import { compose } from 'redux';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Reviews from './Reviews';
import GraphQLStateHandler from '../../components/GraphQLStateHandler/GraphQLStateHandler';

export const reviewsQuery = gql`
    query WingsReviews {
        WingsReviews {
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


const enhance = compose(
    graphql(reviewsQuery),
    GraphQLStateHandler('data', true),
);


export default enhance(Reviews);
