export const actions = {
    ADD_REVIEW: 'ADD_REVIEW',
    SET_IS_DIRTY: 'SET_IS_DIRTY',
};

export const addReview = value => ({
    type: actions.ADD_REVIEW,
    value,
});

export const setIsDirty = value => ({
    type: actions.SET_IS_DIRTY,
    value,
});
