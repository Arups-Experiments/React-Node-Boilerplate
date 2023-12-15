const counterReducer = (prevState = { count: 0 }, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...prevState,
        count: prevState.count + 1,
      };
    case 'decrement':
      return {
        ...prevState,
        count: prevState.count - 1,
      };
    default:
      return { ...prevState };
  }
};

export default counterReducer;
