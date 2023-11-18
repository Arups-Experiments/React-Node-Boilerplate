const INITIAL_USER_LIST = {
  userList: [],
};

function userListReducer(state = INITIAL_USER_LIST, action) {
  switch (action.type) {
    case 'USER_LIST': {
      return {
        ...state,
        userList: action.list,
      };
    }
    default:
      return state;
  }
}

export default userListReducer;
