import React from 'react';
import { shallow } from 'enzyme';

import SingleReview from './';

describe('<SingleReview />', () => {
    const mockSave = jest.fn();
    const mockReview = {
        id: 'test id',
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
        component = shallow(<SingleReview review={mockReview} save={mockSave} />);
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
        test('Displays controls', () => {
            expect(component.find('.single-review__controls-edit')).toHaveLength(1);
            expect(component.find('.single-review__controls-save')).toHaveLength(1);
        });
        test('Populates state correctly', () => {
            expect(component.state()).toEqual({
                id: 'test id',
                sauce: { description: 'test sauce', givenStars: 10, totalStars: 10 },
                price: { description: 'test price', givenStars: 10, totalStars: 10 },
                quality: { description: 'test quality', givenStars: 10, totalStars: 10 },
                name: 'test location',
                description: 'test description',
                address: 'test address',
                district: 'test district',
                isEditing: false
            });
        });
    });

    describe('Wwhile editing', () => {
        beforeEach(() => {
            component = shallow(<SingleReview review={mockReview} save={mockSave} />);
            component.find('.single-review__controls-edit').simulate('click');
        });
        test('Contains editable text boxes', () => {
            expect(component.find('.single-review__editable-field')).toHaveLength(4);
        });
    });

    describe('On save', () => {
        beforeEach(() => {
            component = shallow(<SingleReview review={mockReview} save={mockSave} />);
            component.find('.single-review__controls-save').simulate('click');
        });
        test('Contains editable text boxes', () => {
            expect(mockSave).toHaveBeenCalledWith(
                {
                    "variables":
                    {
                        "ModifiedWingsReviewInput":
                        {
                            "id": "test id",
                            "location": {
                                "address": "test address",
                                "description": "test description",
                                "district": "test district",
                                "name": "test location"
                            },
                            "wings": {
                                "price": {
                                    "description": "test price",
                                    "givenStars": 10,
                                    "totalStars": 10
                                },
                                "quality": {
                                    "description": "test quality",
                                    "givenStars": 10,
                                    "totalStars": 10
                                },
                                "sauce": {
                                    "description": "test sauce",
                                    "givenStars": 10,
                                    "totalStars": 10
                                }
                            }
                        }
                    }
                }
            );
        });
    });
});
