import React, {Component} from 'react';
import './style.scss';
import Calendar from "./calendar";

class MainPage extends Component {

    render() {
        return (
            <div className='container-fluid'>
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

            </div>
        )
    }


}

export default MainPage;
