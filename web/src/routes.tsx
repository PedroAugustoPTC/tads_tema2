import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

import InitialPage from './pages/InitialPage';
import Login from './pages/Login';

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Route path="/" exact component={Login} />
            <Route path="/initial-page" component={InitialPage} />
            <Route path="/user" />
            <Route path="/class" />
            <Route path="/student" />
            <Route path="/activity" />
            <Route path="/rate" />
        </BrowserRouter>

    )
}

export default Routes;
