import React, {Component} from 'react';
import {connect} from 'react-redux';
import {showPopup} from '../../../actions'

import './style.scss';
import Calendar from "./calendar";
import TimesImg from './times-solid.svg'


class MainPage extends Component {

    state = {
        showPopup: false
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

    nameOfDay = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'


    ]


    getMonth () {
        return this.nameOfMonth[this.props.shownDataInPopup[0]]
    }
    getDay (){
        return this.props.shownDataInPopup[1]
    }
    getDate(){
        return this.nameOfDay[this.props.shownDataInPopup[2]]

    }

    showPopup() {
        return (
            <div className='popup'>
                <div className='popup-container'>
                    <div className='popup-form'>
                        <label className='popup-label'>Month</label>
                        <input className="form-control popup-form-input" type="text" placeholder={this.getMonth()}
                               readOnly/>
                    </div>
                    <div className='popup-form'>
                        <label className='popup-label'>Day</label>
                        <input className="form-control popup-form-input" type="text" placeholder={`${this.getDay()}th ${this.getDate()}`}
                               readOnly/>
                    </div>
                    <div className='popup-close-button'><img className='popup-close-button' src={TimesImg}
                                                             onClick={() => {
                                                                 this.props.showPopup(false)
                                                             }}
                    /></div>
                </div>
            </div>
        )
    }

    keyPressed = (event) => {
        if (event.key === 'Escape') {
            this.props.showPopup(false)
        }
    }

    render() {
        return (
            <div className='container-fluid' onKeyDown={(event) => {
                this.keyPressed(event)
            }} tabIndex='0'>
                <div className='row main-page'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                        <div className='container-text'>
                            <div className='row justify-content-end'>
                                <div className='col'>
                                    <h1 className='head-text'>
                                        Choose the day for the meeting
                                    </h1>
                                </div>
                            </div>
                            <div className='row justify-content-end'>
                                <div className='col'>
                                    <h3 className='text'>
                                        We encourage you to book your appointment online. <br/> This will save you time.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-5 col-xl-4 container-calendar'>
                        <div className='calendar'>
                            <Calendar/>
                        </div>
                    </div>
                </div>
                {this.props.isShownPopup ? this.showPopup() : null}
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        isShownPopup: state.showPopup,
        shownDataInPopup: state.shownDataInPopup
    }
};

const mapDispatchToProps = {
    showPopup
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
