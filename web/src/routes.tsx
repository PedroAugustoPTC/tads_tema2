import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import InitialPage from './pages/InitialPage';
import Login from './pages/Login';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/initial-page" exact component={InitialPage} />
        </BrowserRouter>
    )
}

export default Routes;
