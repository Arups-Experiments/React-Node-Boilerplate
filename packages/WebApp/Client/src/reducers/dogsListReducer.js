const INITIAL_DOG_LIST = {
  dogList: [],
};

function dogListReducer(state = INITIAL_DOG_LIST, action) {
  switch (action.type) {
    case 'DOG_LIST': {
      return {
        ...state,
        dogList: action.list,
      };
    }
    default:
      return state;
  }
}

export default dogListReducer;
