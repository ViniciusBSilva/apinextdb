
import { useEffect, useState } from "react"



export default function Home() {

  type User = {
    id: number,
    name: string
  }

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data.data);
        console.log("users", users);
      });
  }, [])

  return (
    <>
      <h1>Hello World</h1>
      {
        users && users.map(user => (
          <p id={user.id.toString()}>{user.id} - {user.name}</p>
        ))
      }
    </>
  )
}
