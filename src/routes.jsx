import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import HomeRoute from './pages/Home/routes';

const Routes = () => (
    <Router>
        <Switch>
            {HomeRoute}
        </Switch>
    </Router>
);

export default Routes;
