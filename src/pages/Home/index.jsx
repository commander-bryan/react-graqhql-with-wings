import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="app">
        <h1>React + Graphql Demo</h1>
        <span>This app will fetch a list of reviews from a Graphql backend and allow new ones to be created</span>
        <Link to="/reviews">Start</Link>
    </div>
)

export default Home;