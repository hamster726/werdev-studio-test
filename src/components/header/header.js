import React, {Component} from 'react';
import WeRDevsLogo from './werdevs-logo.png';
import './style.scss';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {setActivePage} from '../../actions'


class Header extends Component{

    render() {
        return (
            <header className='container-fluid  header'>
                <nav className='navbar navbar-expand-lg navbar-light'>
                    <a className="navbar-brand" href="/"><img src={WeRDevsLogo}/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav text-uppercase" >
                            <li className="nav-item navlink-custom" onClick={() => {this.props.setActivePage(0)}}>
                                <Link className={`nav-link ${this.props.activePage === 0 ? 'active' : ''}`} to="/">Home <span
                                    className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item navlink-custom" onClick={() => {this.props.setActivePage(1)}}>
                                <Link className={`nav-link ${this.props.activePage === 1 ? 'active' : ''}`} to="/about" >About Us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        )
    }


}

const mapStateToProps = (state) => {
    return {
        activePage: state.activePage
    }
};

const mapDispatchToProps = {
    setActivePage
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);
