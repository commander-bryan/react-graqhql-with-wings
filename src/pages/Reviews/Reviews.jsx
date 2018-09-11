import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './scss/Reviews.scss';

const Reviews = ({
    data,
}) => {
    return (
        <div className="reviews">
            {data.WingsReviews.map(
                review => <Link key={review.id} to={`/review/${review.id}`}>Go to {review.location.name}</Link>)
            }
        </div>
    );
};

Reviews.propTypes = {
    data: PropTypes.shape({
        WingsReviews: PropTypes.arrayOf(PropTypes.shape({
            location: PropTypes.shape({
                name: PropTypes.string.isRequired,
            }).isRequired,
            id: PropTypes.string.isRequired,
        })),
    }).isRequired,
};

export default Reviews;
