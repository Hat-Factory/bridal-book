const intitialState = false;

const accountReducer = (state = intitialState, action) => {
  switch (action.type) {
    case 'CREATE_ACCOUNT':
      console.log(action)
      return action.new
    default:
      return state;
  }
};

export default accountReducer;