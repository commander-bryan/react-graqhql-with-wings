import React from 'react';
import PropTypes from 'prop-types';
import SingleReduxReview from '../../components/SingleReduxReview';

const Reviews = ({
    data,
    addReview,
    modifyReviewMutation
}) => {
    const { location: { name, description, address, district }, id } = data.WingsReview;
    addReview({
        id,
        name,
        description,
        address,
        district,
    });
    return (
        <div className="review">
            <SingleReduxReview
                review={data.WingsReview}
                save={modifyReviewMutation}
            />
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
        WingsReview: PropTypes.shape({
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
        }),
    }).isRequired,
    modifyReviewMutation: PropTypes.func.isRequired,
};

export default Reviews;
