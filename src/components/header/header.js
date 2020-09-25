import React from 'react';
import WeRDevsLogo from './werdevs-logo.png';
import './style.scss';


const Header = () => {
    return (
            <header className='container-fluid  header'>
            <nav className='navbar navbar-expand-lg navbar-light'>
                <a className="navbar-brand" href="/"><img src={WeRDevsLogo}/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav text-uppercase">
                        <li className="nav-item navlink-custom">
                            <a className="nav-link " href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item navlink-custom">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}

export default Header;
