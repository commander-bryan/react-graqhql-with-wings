import React from 'react';
import PropTypes from 'prop-types';

import './scss/SingleReduxReview.scss';

class SingleReduxReview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.review.id,
            sauce: props.review.wings.sauce,
            price: props.review.wings.price,
            quality: props.review.wings.quality,
            name: props.reviewFields.name,
            description: props.reviewFields.description,
            address: props.reviewFields.address,
            district: props.reviewFields.district,
            isEditing: false,
        }

        this.toggleIsEditing = this.toggleIsEditing.bind(this);
        this.setReviewField = this.setReviewField.bind(this);
        this.getEditable = this.getEditable.bind(this);
        this.saveReview = this.saveReview.bind(this);
    }

    saveReview() {
        this.props.save({
            variables: {
                ModifiedWingsReviewInput: {
                    wings: {
                        sauce: {
                            description: this.state.sauce.description,
                            givenStars: this.state.sauce.givenStars,
                            totalStars: this.state.sauce.totalStars,
                        },
                        price: {
                            description: this.state.price.description,
                            givenStars: this.state.price.givenStars,
                            totalStars: this.state.price.totalStars,
                        },
                        quality: {
                            description: this.state.quality.description,
                            givenStars: this.state.quality.givenStars,
                            totalStars: this.state.quality.totalStars,
                        },
                    },
                    location: {
                        name: this.state.name,
                        address: this.state.address,
                        district: this.state.district,
                        description: this.state.description,
                    },
                    id: this.state.id,
                },
            },
        });
    }

    toggleIsEditing() {
        this.setState({ isEditing: !this.state.isEditing });
    }

    setReviewField(event, field) {
        const newState = {};
        newState[field] = event.target.value;
        this.setState(newState);
    }

    getEditable(field) {
        let editable = <input value={this.state[field] || ''} onChange={(e) => this.setReviewField(e, field)} />;
        return (
            <div className="single-review__editable-field">
                {field}: {editable}
            </div>
        )
    }

    render() {
        const {
            sauce, price, quality,
            name, description, address, district,
            isEditing,
        } = this.state;
        return (
            <div className="single-review">
                <div className="single-review__controls">
                    <button className="single-review__controls-edit" onClick={this.toggleIsEditing}>
                        {this.state.isEditing ? 'done' : 'edit'}
                    </button>
                    {isEditing ? null :
                        <button className="single-review__controls-save" onClick={this.saveReview}>save</button>
                    }
                </div>
                <div className="single-review__content">
                    <h1 className="single-review__heading">{isEditing ? this.getEditable('name') : name}</h1>
                    <div className="single-review__about">
                        <h2>About {name}</h2>
                        <span className="single-review__about-address">{isEditing ? this.getEditable('address') : address}</span>
                        <span className="single-review__about-district">{isEditing ? this.getEditable('district') : district}</span>
                        <span className="single-review__about-description">
                            {isEditing ? this.getEditable('description') :
                                description ? description : 'No details!'
                            }
                        </span>
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
            </div>
        );
    }
};

const ratingShape = {
    description: PropTypes.string.isRequired,
    givenStars: PropTypes.number.isRequired,
    totalStars: PropTypes.number.isRequired,
}

SingleReduxReview.propTypes = {
    review: PropTypes.shape({
        id: PropTypes.string.isRequired,
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
    save: PropTypes.func.isRequired,
};

export default SingleReduxReview;
