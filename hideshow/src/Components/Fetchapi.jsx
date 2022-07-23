// import React from 'react'




import React, { useEffect, useState } from "react"

const Fetchapi = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
        console.log(data);
      })
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <div key={user.id}>
            <li key={user.id}>{user.name}</li>
            <p >{user.email}</p>
            <p >{user.address.zipcode}</p>

            </div>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Fetchapi
