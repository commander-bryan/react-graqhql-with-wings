import React from 'react';
import { shallow } from 'enzyme';

import Reviews from './Review';

describe('<Review />', () => {
    const mockMutation = jest.fn();
    const mockReviewsData = {
        WingsReview: {
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
        }
    };

    let component;

    beforeEach(() => {
        component = shallow(<Reviews data={mockReviewsData} modifyReviewMutation={mockMutation} />);
    });

    test('should render a SingleReview component', () => {
        expect(component.find('SingleReview')).toHaveLength(1);
        expect(component.find('SingleReview').props().review).toEqual(mockReviewsData.WingsReview);
        expect(component.find('SingleReview').props().save).toEqual(mockMutation);
    });
});