import React from 'react';
import Header from '../header';
import MainPage from "../pages/mainPage";
import AboutPage from "../pages/aboutPage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


const App = () => {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path='/' exact>
                    <MainPage/>
                </Route>
                <Route path='/about' exact>
                    <AboutPage/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
