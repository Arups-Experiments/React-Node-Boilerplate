import React from 'react';
import useFetchUsers from './useFetchUsers';

const UserData = ({ name }) => {
  return <span>You selected {name}</span>;
};

export default function Users() {
  const { users, setUsers, activeUser, setActiveUser } = useFetchUsers();

  const handleUserSelected = evt => {
    setActiveUser(evt.target.value);
  };

  return (
    <div>
      <label htmlFor="users">Choose a user:</label>
      <select id="users" onChange={handleUserSelected}>
        {users.map(user => (
          <option value={user.name} key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      {activeUser && (
        <div>
          <UserData name={activeUser} />{' '}
        </div>
      )}
    </div>
  );
}
