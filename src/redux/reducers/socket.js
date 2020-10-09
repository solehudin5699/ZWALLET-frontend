const initialState = {
  socket: null,
};

const socketReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'SETSOCKET':
      return {
        ...prevState,
        socket: action.payload,
      };
    case 'RESETSOCKET':
      return {
        ...prevState,
        socket: null,
      };
    default:
      return prevState;
  }
};

export default socketReducer;
