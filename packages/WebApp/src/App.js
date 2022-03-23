import React, { Suspense, lazy, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px red solid;
  color: brown;
`;
const UserList = lazy(() => import('Components/UserList'));

const App = ({ userList, initiateUserListDispatch }) => {
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
      <Suspense fallback={<div id={'loading'}>Loading</div>}>
        <Container className="users">
          <ul>
            <UserList userList={userList} />
          </ul>
        </Container>
      </Suspense>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
