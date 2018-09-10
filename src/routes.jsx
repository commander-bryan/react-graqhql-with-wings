import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import HomeRoute from './pages/Home/routes';
import ReviewsRoute from './pages/Reviews/routes';

const Routes = () => (
    <Router>
        <Switch>
            {HomeRoute}
            {ReviewsRoute}
        </Switch>
    </Router>
);

export default Routes;
