import { compose } from 'redux';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import ReduxReview from './ReduxReview';
import GraphQLStateHandler from '../../components/GraphQLStateHandler/GraphQLStateHandler';

import { addReview } from '../../store/actions/review';

export const reviewQuery = gql`
    query WingsReview($id: String!) {
        WingsReview(id: $id) {
            wings {
                sauce {
                    description
                    givenStars
                    totalStars
                }
                price {
                    description
                    givenStars
                    totalStars
                }
                quality {
                    description
                    givenStars
                    totalStars
                }
            }
            location {
                name
                description
                address
                district
            }
            id
            __typename
        }
    }
`;

export const modifyReviewMutation = gql`
    mutation ModifyReview($ModifiedWingsReviewInput: ModifiedWingsReviewInput!) {
        ModifyReview(input: $ModifiedWingsReviewInput) {
            wings {
                sauce {
                    description
                    givenStars
                    totalStars
                }
                price {
                    description
                    givenStars
                    totalStars
                }
                quality {
                    description
                    givenStars
                    totalStars
                }
            }
            location {
                name
                description
                address
                district
            }
        }
    }
`;

export const reviewQueryParams = {
    options: props => {
        return (
            {
                variables: {
                    id: props.computedMatch.params.id,
                },
            }
        )
    },
};

const modifyReviewMutationParams = {
    ...reviewQueryParams,
    name: 'modifyReviewMutation',
};

const mapStateToProps = (state, props) => ({
});

const enhance = compose(
    graphql(reviewQuery, reviewQueryParams),
    graphql(modifyReviewMutation, modifyReviewMutationParams),
    GraphQLStateHandler('data', true),
    connect(
        mapStateToProps,
        {
            addReview,
        },
    ),
);

export default enhance(ReduxReview);
