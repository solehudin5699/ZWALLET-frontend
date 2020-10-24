export const setSocketCreator = (socket) => {
  return {
    type: 'SETSOCKET',
    payload: socket,
  };
};
export const resetSocketCreator = () => {
  return {
    type: 'RESETSOCKET',
  };
};
