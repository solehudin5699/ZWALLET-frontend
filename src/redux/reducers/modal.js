const initialState = {
  modalEditImageProfile: false,
  modalSignOut: false,
};

const modalReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'EDITIMAGEPROFILE':
      return {
        ...prevState,
        modalEditImageProfile: action.payload,
      };

    case 'SIGNOUT':
      return {
        ...prevState,
        modalSignOut: action.payload,
      };

    default:
      return prevState;
  }
};

export default modalReducer;
