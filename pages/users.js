import React from "react";

// users will be populated at build time by getStaticProps()
function Users({ users }) {
  return (
    <ul>
      {users.map((users) => (
        <li>{users.name}</li>
      ))}
    </ul>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get users.
  // You can use any data fetching library
  const res = await fetch('https://jsonplaceholder.typicode.com/users/');
  const users = await res.json()

  // By returning { props: users }, the Users component
  // will receive `users` as a prop at build time
  return {
    props: {
      users,
    },

  }
}

export default Users;