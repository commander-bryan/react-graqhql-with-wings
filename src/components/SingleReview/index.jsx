import React from 'react';
import PropTypes from 'prop-types';

import './scss/Review.scss';

const SingleReview = ({
    review: { 
        wings: { sauce, price, quality },
        location: { name, description, address, district },
    },
}) => {
    return (
        <div className="single-review">
            <h1 className="single-review__heading">{name}</h1>
            <div className="single-review__about">
                <h2>About {name}</h2>
                <span className="single-review__about-address">{address}</span>
                <span className="single-review__about-district">{district}</span>
                <span className="single-review__about-description">{description ? description : 'No details!'}</span>
            </div>
            <div className="single-review__ratings">
                <h2>Ratings for {name}</h2>
                <div className="single-review__ratings-sauce">
                    <span>The Sauce: {sauce.description}</span>
                    <span>Rating: {sauce.givenStars} / {sauce.totalStars}</span>
                </div>
                <div className="single-review__ratings-price">
                    <span>The Price: {price.description}</span>
                    <span>Rating: {price.givenStars} / {price.totalStars}</span>
                </div>
                <div className="single-review__ratings-quality">
                    <span>The Quality: {quality.description}</span>
                    <span>Rating: {quality.givenStars} / {quality.totalStars}</span>
                </div>
            </div>
        </div>
    );
};

const ratingShape = {
    description: PropTypes.string.isRequired,
    givenStars: PropTypes.number.isRequired,
    totalStars: PropTypes.number.isRequired,
}

SingleReview.propTypes = {
    review: PropTypes.shape({
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
    }).isRequired,
};

export default SingleReview;
