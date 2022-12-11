import { useEffect, useState } from "react"

export default function Home() {

  type User = {
    id: number,
    name: string
  }

  const [users, setUsers] = useState<User[]>([]);

  // useEffect(() => {
  //   fetch('/api/users')
  //     .then(response => response.json())
  //     .then(data => setUsers(data.data));
  // }, [])


  function fetchUsers(setUsers: (arg0: any) => any) {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data.data));
  }

  useEffect(() => {
    fetchUsers(setUsers);
  }, [])


  return (
    <>
      <h1>Hello World</h1>
      {
        users && users.map(user => (
          <p id={user.id.toString()}>{user.id} - {user.name}</p>
        ))
      }
      <button onClick={() => fetchUsers(setUsers)}>Read Users</button>
    </>
  )
}
