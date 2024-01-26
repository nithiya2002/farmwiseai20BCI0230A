export const ADD_FIELD = 'ADD_FIELD';
export const REMOVE_FIELD = 'REMOVE_FIELD';

// Action creators
export const addField = (field) => {
  return {
    type: ADD_FIELD,
    payload: field,
  };
};

export const removeField = (index) => {
  return {
    type: REMOVE_FIELD,
    payload: index,
  };
};