import React from 'react';

const UserList = ({ userList = [] }) => {
  return (
    <>
      {userList.map(user => (
        <li key={user.name}>{user.name}</li>
      ))}
    </>
  );
};

export default UserList;
