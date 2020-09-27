import React, {Component} from 'react';
import './style.scss'
import ArrowLeftImg from './arrow-left.svg'
import ArrowRightImg from './arrow-right.svg'
import {showPopup, addChosenData} from "../../../../actions";
import {connect} from 'react-redux'

class Calendar extends Component {

    state = {
        currentDate: new Date(),
        dayToday: new Date(),

    }

    nameOfMonth = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    componentDidMount() {
        const {currentDate} = this.state;
        const daysInCurrentMonth = 32 - new Date(currentDate.getFullYear(), currentDate.getMonth(), 32).getDate();
        const monthStarts = this.getDay(currentDate);

        this.setState({
            daysInCurrentMonth,
            monthStarts
        })
    }

    getDay = (date) => {
        let day = new Date(date.getFullYear(), date.getMonth()).getDay();
        // if (day === 7) day = 0;
        return day - 1;
    }

    showPopup = (date) => {
        this.props.addChosenData(date);
        this.props.showPopup(true);
    }

    renderDays = (arr, date) => {

        const isActiveDay = (day) => {
            if (date.getMonth() === this.state.dayToday.getMonth() && date.getDate() === day) {
                return 'active-cell'
            } else {
                return ''
            }
        }

        const isCurrentMonth = () => {
            if (date === this.state.currentDate) {
                return 'current-month'
            } else {
                return 'not-current-month'
            }
        }

        const isChosenDay = (day) => {
            const {chosenDates} = this.props;
            for (let i = 0; i < chosenDates.length; i++) {
                if (date.getFullYear() === chosenDates[i].getFullYear() &&
                    date.getMonth() === chosenDates[i].getMonth() &&
                    day === chosenDates[i].getDate()) {
                    return 'chosen-date'
                }
            }
            return '';
        }

        return arr.map((item) => {
            return (
                [
                    <td key={item + date.getMonth()}
                        className={`calendar-cell ${isCurrentMonth()} ${isActiveDay(item)} ${isChosenDay(item)}`}
                        onClick={() => {
                            this.showPopup(new Date(date.getFullYear(), date.getMonth(), item))
                        }}>
                        {item}
                    </td>]
            )
        })
    }


    createPrevMonth = (currentDate) => {
        const prevDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
        const daysInMonth = 32 - new Date(prevDate.getFullYear(), prevDate.getMonth(), 32).getDate();
        const monthStarts = currentDate.getDay() + 2;

        let arr = [];
        for (let i = 0; i < (monthStarts); i++) {

            arr.push(daysInMonth - i);
        }
        arr = arr.reverse();

        return this.renderDays(arr, prevDate);

    }


    createCurrentMonth = (currentDate) => {
        const daysInCurrentMonth = 32 - new Date(currentDate.getFullYear(), currentDate.getMonth(), 32).getDate();

        let arr = [];
        for (let i = 0; i < daysInCurrentMonth; i++) {
            arr.push(i + 1);
        }

        return this.renderDays(arr, currentDate);
    }

    createNextMonth = (currentDate) => {
        const nexDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
        const monthStarts = this.getDay(nexDate);


        let arr = [];
        for (let i = 0; i < 7 - monthStarts; i++) {
            arr.push(i + 1);
        }

        return this.renderDays(arr, nexDate);

    }


    updateMonth = (date) => {

        const {currentDate} = this.state;

        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + date, currentDate.getDate());

        this.setState({
            currentDate: newDate,

        })

    }


    render() {
        const {currentDate} = this.state;
        const header = `${this.nameOfMonth[currentDate.getMonth()]} ${currentDate.getFullYear()}`.toUpperCase();
        const calendarWithDays = [];
        calendarWithDays.push(...this.createPrevMonth(currentDate));
        calendarWithDays.push(...this.createCurrentMonth(currentDate));
        calendarWithDays.push(...this.createNextMonth(currentDate));


        const getRow = () => {
            let row = [];
            for (let i = 0; i < 7; i++) {
                row.push(calendarWithDays.shift());
            }
            return (
                <tr>
                    {row}
                </tr>
            );
        }


        return (
            <>
                <div className='calendar-header'>
                    <div className='calendar-prev-month' onClick={() => {
                        this.updateMonth(-1)
                    }}>
                        <img className='calendar-prev-month' src={ArrowLeftImg}/>
                    </div>
                    <div className='calendar-current-month'>
                        {header}
                    </div>
                    <div className='calendar-next-month' onClick={() => {
                        this.updateMonth(+1)
                    }}>
                        <img className='calendar-next-month' src={ArrowRightImg}/>
                    </div>
                </div>
                <table>
                    <tbody>
                    {getRow()}
                    {getRow()}
                    {getRow()}
                    {getRow()}
                    {getRow()}
                    </tbody>
                </table>
                <div className='calendar-footer'>
                    <div className='calendar-day'>S</div>
                    <div className='calendar-day'>M</div>
                    <div className='calendar-day'>T</div>
                    <div className='calendar-day'>W</div>
                    <div className='calendar-day'>T</div>
                    <div className='calendar-day'>F</div>
                    <div className='calendar-day'>S</div>
                </div>
            </>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        isShownPopup: state.showPopup,
        chosenDates: state.datePull,
    }
};

const mapDispatchToProps = {
    showPopup,
    addChosenData
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);