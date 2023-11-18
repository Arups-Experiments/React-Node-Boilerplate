import styled from 'styled-components';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';

const UserList = ({ userList = [] }) => {
  return (
    <>
      {userList.map(user => (
        <li key={user.name}>{user.name}</li>
      ))}
    </>
  );
};

const Container = styled.div`
  border: 1px red solid;
  color: brown;
`;

const User = ({ userList, initiateUserListDispatch }) => {
  useEffect(() => {
    async function fetchDetails() {
      const URL = '/users';
      const resp = await fetch(URL);
      const json = await resp.json();
      initiateUserListDispatch(json);
    }
    fetchDetails();
  }, [initiateUserListDispatch]);

  return (
    <React.Fragment>
      <div>Hello Arup Upopadhyay</div>
      <Container className="users">
        <ul>
          <UserList userList={userList} />
        </ul>
      </Container>
    </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(User);
