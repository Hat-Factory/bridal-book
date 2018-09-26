const intitialState = [];

const taskReducer = (state = intitialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.task]
    default:
      return state;
  }
};

export default taskReducer;