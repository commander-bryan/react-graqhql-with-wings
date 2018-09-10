import React from 'react';
import PropTypes from 'prop-types';
import SingleReview from '../../components/SingleReview';

import './scss/Reviews.scss';

const Reviews = ({
    data,
}) => {
    return (
        <div className="reviews">
            {data.WingsReviews.map(review => <SingleReview key={review.id} review={review} />)}
        </div>
    );
};

const ratingShape = {
    description: PropTypes.string.isRequired,
    givenStars: PropTypes.number.isRequired,
    totalStars: PropTypes.number.isRequired,
}

Reviews.propTypes = {
    data: PropTypes.shape({
        WingsReviews: PropTypes.arrayOf(PropTypes.shape({
            wings: PropTypes.shape({
                sauce: PropTypes.shape(ratingShape).isRequired,
                price: PropTypes.shape(ratingShape).isRequired,
                quality: PropTypes.shape(ratingShape).isRequired,
            }).isRequired,
            location: PropTypes.shape({
                name: PropTypes.string.isRequired,
                description: PropTypes.string,
                address: PropTypes.string.isRequired,
                district: PropTypes.string.isRequired,
            }).isRequired,
            id: PropTypes.string.isRequired,
        })),
    }).isRequired,
};

export default Reviews;
