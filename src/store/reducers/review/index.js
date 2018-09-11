import { actions } from '../../actions/review';

const reviewReducer = (state = {}, action) => {
    if (action.type === actions.ADD_REVIEW) {
        const newState = { ...state };
        newState[action.value.id] = {
            name: action.value.name,
            description: action.value.description,
            address: action.value.address,
            district: action.value.district,
        }
        return newState;
    }

    if (action.type === actions.SET_IS_DIRTY) {
        return { ...state, isDirty: action.value.isDirty};
    }

    return { ...state };
};

export default reviewReducer;
