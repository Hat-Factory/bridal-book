// const intitialState = false;

// const accountReducer = (state = intitialState, action) => {
//   switch (action.type) {
//     case 'CREATE_ACCOUNT':
//       console.log(action)
//       return action.new
//     default:
//       return state;
//   }
// };

// export default accountReducer;


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