import React from 'react';

const UserData = ({ name }) => {
  return <span>You selected {name}</span>;
};

export default function Users() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchRemoteUsers = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const result = await response.json();
      setUsers(result);
    };
    fetchRemoteUsers();
  }, []);

  return (
    <div>
      <label htmlFor="users">Choose a user:</label>
      <select id="users">
        {users.map(user => (
          <option value={user.name} key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}
