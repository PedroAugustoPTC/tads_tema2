import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

import InitialPage from './pages/InitialPage';
import Login from './pages/Login';
import User from './pages/User';
import Class from './pages/Class';
import Activy from './pages/Activity';

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Route path="/" exact component={Login} />
            <Route path="/initial-page" component={InitialPage} />
            <Route path="/user" component={User} />
            <Route path="/class" component={Class}/>
            <Route path="/student" />
            <Route path="/activity" component={Activy}/>
            <Route path="/rate" />
        </BrowserRouter>
    )
}

export default Routes;
