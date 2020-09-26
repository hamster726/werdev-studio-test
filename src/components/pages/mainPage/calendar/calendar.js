import React from 'react';
import './style.scss'
import ArrowLeftImg from './arrow-left.svg'
import ArrowRightImg from './arrow-right.svg'

const Calendar = () => {


    const nameOfMonth = [
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


    const getDay = (date) => {
        let day = new Date(date.getFullYear(), date.getMonth()).getDay();
        return day - 1;
    }

    const currentDate = new Date();
    const activeDay = new Date().getDate();
    const daysInCurrentMonth = 32 - new Date(currentDate.getFullYear(), currentDate.getMonth(), 32).getDate();
    const monthStarts = getDay(currentDate);


    const showPopup = (date) => {
        alert(date);
    }

    const renderDays = (arr, date) => {

        let isActiveDay = (day) => {
            if (date === currentDate && day === activeDay) {
                return 'active-cell'
            } else {
                return ''
            }
        }

        let isCurrentMonth = () => {
            if (date === currentDate) {
                return 'current-month'
            } else {
                return 'not-current-month'
            }
        }

        return arr.map((item) => {
            return (
                [
                    <td key={item} className={`calendar-cell ${isCurrentMonth()} ${isActiveDay(item)}`} onClick={() => {
                        showPopup(new Date(date.getFullYear(), date.getMonth(), item))
                    }}>
                        {item}
                    </td>]
            )
        })
    }


    const createPrevMonth = () => {
        const prevDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
        const daysInMonth = 32 - new Date(prevDate.getFullYear(), prevDate.getMonth(), 32).getDate();

        console.log('curr month: ' + (currentDate.getMonth() + 1));
        console.log('days in prev month ' + daysInMonth);
        console.log('curr month starts ' + monthStarts);


        let arr = [];
        for (let i = 0; i < (monthStarts + 1); i++) {

            arr.push(daysInMonth - i);
        }
        arr = arr.reverse();


        return renderDays(arr, prevDate);

    }


    const createCurrentMonth = () => {
        let arr = [];
        for (let i = 0; i < daysInCurrentMonth; i++) {
            arr.push(i + 1);
        }

        return renderDays(arr, currentDate);
    }

    const createNextMonth = () => {
        const nexDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
        const monthStarts = getDay(nexDate);


        let arr = [];
        for (let i = 0; i < 7 - monthStarts; i++) {
            arr.push(i + 1);
        }

        return renderDays(arr, nexDate);

    }


    const renderCalendar = () => {
        const calendarWithDays = [];
        calendarWithDays.push(...createPrevMonth());
        calendarWithDays.push(...createCurrentMonth());
        calendarWithDays.push(...createNextMonth());


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
                {getRow()}
                {getRow()}
                {getRow()}
                {getRow()}
                {getRow()}
            </>
        )
    }

    const header = `${nameOfMonth[currentDate.getMonth()]} ${currentDate.getFullYear()}`.toUpperCase();
    return (
        <>
            <div className='calendar-header'>
                <div className='calendar-prev-month'>
                    <img className='calendar-prev-month' src={ArrowLeftImg}/>
                </div>
                <div className='calendar-current-month'>
                    {header}
                </div>
                <div className='calendar-next-month' >
                    <img className='calendar-next-month' src={ArrowRightImg}/>
                </div>
            </div>
            <table>
                <tbody>
                {renderCalendar()}
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

export default Calendar;