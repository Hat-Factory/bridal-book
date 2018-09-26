const intitialState = null;

const viewTaskReducer = (state = intitialState, action) => {
  switch (action.type) {
    case 'ADD_TASK_ID':
      return action.id
    default:
      return state;
  }
};

export default viewTaskReducer;