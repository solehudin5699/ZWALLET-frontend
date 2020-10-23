const initialState = {
  socket: null,
  allowNotif: false,
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
    case 'NOTIF':
      return {
        ...prevState,
        allowNotif: action.payload,
      };
    default:
      return prevState;
  }
};

export default socketReducer;
