import React from 'react';
import PropTypes from 'prop-types';
import SingleReview from '../../components/SingleReview';

const Reviews = ({
    data,
    modifyReviewMutation
}) => {
    return (
        <div className="review">
            <SingleReview 
                key={data.WingsReview.id}
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
