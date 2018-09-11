import { compose } from 'redux';
import { connect } from 'react-redux';
import SingleReduxReview from './SingleReduxReview';

import { addReview } from '../../store/actions/review';

const mapStateToProps = (state, props) => {
    return ({
        reviewFields: state.reviewReducers[props.review.id],
    });
};

const enhance = compose(
    connect(
        mapStateToProps,
        {
            addReview,
        },
    ),
);

export default enhance(SingleReduxReview);
