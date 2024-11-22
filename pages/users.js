import React from 'react';

export default function Users({ users }) {
  return (
    <div>
      <h1>Users fetched at build time</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  // Hacer una solicitud de datos en tiempo de compilación
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}