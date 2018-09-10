import React from 'react';
import { shallow } from 'enzyme';

import Reviews from './Reviews';

describe('<Reviews />', () => {
    const mockReviewsData = {
        WingsReviews: [{
            wings: {
                sauce: {
                    description: 'test sauce',
                    givenStars: 10,
                    totalStars: 10,
                },
                price: {
                    description: 'test price',
                    givenStars: 10,
                    totalStars: 10,
                },
                quality: {
                    description: 'test quality',
                    givenStars: 10,
                    totalStars: 10,
                },
            },
            location: {
                name: 'test location',
                description: 'test description',
                address: 'test address',
                district: 'test district',
            },
            id: 'test id',
        }]
    };

    let component;

    beforeEach(() => {
        component = shallow(<Reviews data={mockReviewsData} />);
    });

    test('should render a SingleReview', () => {
        expect(component.find('SingleReview')).toHaveLength(1);
    });
});