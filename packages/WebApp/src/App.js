import React, { Suspense, lazy } from 'react';

const UserList = lazy(() => import('./components/UserList'));

const App = () => (
  <>
    <div>Hello Arup Upopadhyay</div>
    <Suspense fallback={<div id={'loading'}>Loading</div>}>
      <UserList />
    </Suspense>
  </>
);

export default App;
