export const incrementAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: 'INCREMENT' });
    }, 1000);
  };
};
export const decrementAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: 'DECREMENT' });
    }, 1000);
  };
}