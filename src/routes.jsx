import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import HomeRoute from './pages/Home/routes';
import ReviewsRoute from './pages/Reviews/routes';
import ReviewRoute from './pages/Review/routes';
import ReduxReviewRoute from './pages/ReduxReview/routes';

const Routes = () => (
    <Router>
        <Switch>
            {HomeRoute}
            {ReviewsRoute}
            {ReviewRoute}
            {ReduxReviewRoute}
        </Switch>
    </Router>
);

export default Routes;
