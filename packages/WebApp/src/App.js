import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px red solid;
  color: cyan;
`;
const UserList = lazy(() => import('./components/UserList'));

const App = () => (
  <React.Fragment>
    <div>Hello Arup Upopadhyay</div>
    <Suspense fallback={<div id={'loading'}>Loading</div>}>
      <Container className="users">
        <ul>
          <UserList />
        </ul>
      </Container>
    </Suspense>
  </React.Fragment>
);

export default App;
