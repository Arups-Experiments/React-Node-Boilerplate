import React from 'react';

function useFetchUsers() {
  const [users, setUsers] = React.useState([]);
  const [activeUser, setActiveUser] = React.useState('');

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

  return { users, setUsers, activeUser, setActiveUser };
}

export default useFetchUsers;
