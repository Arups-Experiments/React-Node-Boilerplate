import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const UserList = ({ userList = [], initiateUserListDispatch }) => {
  useEffect(() => {
    async function fetchDetails() {
      const URL = 'https://jsonplaceholder.typicode.com/users';
      const resp = await fetch(URL);
      const json = await resp.json();
      initiateUserListDispatch(json);
    }
    fetchDetails();
  }, [initiateUserListDispatch]);

  return (
    <Container>
      {userList.map(user => (
        <li key={user.name}>{user.name}</li>
      ))}
    </Container>
  );
};

// connecting view layer to state layer with react-redux
const mapStateToProps = state => {
  return {
    userList: state.userListState.userList,
  };
};

const mapDispatchToProps = dispatch => ({
  initiateUserListDispatch: list => {
    dispatch({ type: 'USER_LIST', list });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
