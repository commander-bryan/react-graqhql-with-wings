import { compose } from 'redux';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Review from './Review';
import GraphQLStateHandler from '../../components/GraphQLStateHandler/GraphQLStateHandler';

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


const enhance = compose(
    graphql(reviewQuery, reviewQueryParams),
    graphql(modifyReviewMutation, modifyReviewMutationParams),
    GraphQLStateHandler('data', true),
);


export default enhance(Review);
