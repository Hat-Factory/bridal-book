
const intitialState = null;

const imageReducer = (state = intitialState, action) => {
  switch (action.type) {
    case 'ADD_IMAGE':
      return action.image
    default:
      return state;
  }
};

export default imageReducer;