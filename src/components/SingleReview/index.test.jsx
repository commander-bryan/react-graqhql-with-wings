import React from 'react';
import { shallow } from 'enzyme';

import SingleReview from './';

describe('<SingleReview />', () => {
    const mockReview = {
        wings: {
            sauce:{
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
    }

    let component;

    beforeEach(() => {
        component = shallow(<SingleReview review={mockReview} />);
    });

    describe('Displays data', () => {
        test('Displays heading', () => {
            expect(component.find('.single-review__heading')).toHaveLength(1);
            expect(component.find('.single-review__heading').text()).toEqual('test location');
        });
        test('Displays address', () => {
            expect(component.find('.single-review__about-address')).toHaveLength(1);
            expect(component.find('.single-review__about-address').text()).toEqual('test address');
        });
        test('Displays district', () => {
            expect(component.find('.single-review__about-district')).toHaveLength(1);
            expect(component.find('.single-review__about-district').text()).toEqual('test district');
        });
        test('Displays description', () => {
            expect(component.find('.single-review__about-description')).toHaveLength(1);
            expect(component.find('.single-review__about-description').text()).toEqual('test description');
        });
        test('Displays sauce rating', () => {
            expect(component.find('.single-review__ratings-sauce')).toHaveLength(1);
            expect(component.find('.single-review__ratings-sauce').find('span')).toHaveLength(2);
            expect(component.find('.single-review__ratings-sauce').find('span').at(0).text()).toEqual('The Sauce: test sauce');
            expect(component.find('.single-review__ratings-sauce').find('span').at(1).text()).toEqual('Rating: 10 / 10');
        });
        test('Displays price rating', () => {
            expect(component.find('.single-review__ratings-price')).toHaveLength(1);
            expect(component.find('.single-review__ratings-price').find('span')).toHaveLength(2);
            expect(component.find('.single-review__ratings-price').find('span').at(0).text()).toEqual('The Price: test price');
            expect(component.find('.single-review__ratings-price').find('span').at(1).text()).toEqual('Rating: 10 / 10');
        });
        test('Displays quality rating', () => {
            expect(component.find('.single-review__ratings-quality')).toHaveLength(1);
            expect(component.find('.single-review__ratings-quality').find('span')).toHaveLength(2);
            expect(component.find('.single-review__ratings-quality').find('span').at(0).text()).toEqual('The Quality: test quality');
            expect(component.find('.single-review__ratings-quality').find('span').at(1).text()).toEqual('Rating: 10 / 10');
        });
    });
});
