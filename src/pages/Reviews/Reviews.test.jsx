import React from 'react';
import { shallow } from 'enzyme';

import Reviews from './Reviews';

describe('<Reviews />', () => {
    const mockReviewsData = {
        WingsReviews: [{
            
            location: {
                name: 'test location',
            },
            id: 'test id',
        }]
    };

    let component;

    beforeEach(() => {
        component = shallow(<Reviews data={mockReviewsData} />);
    });

    test('should render a link', () => {
        expect(component.find('Link')).toHaveLength(1);
        expect(component.find('Link').props().to).toEqual('/review/test id');
    });
});