import React from 'react';
import './App.css'; // 🔥 Make sure to import the App.css file.

// Implement the User component separately
function User(props) {
  return (
    <div>{props.user.age}Age - {props.user.name}</div>
  );
}

function App() {
  const users = [
    { id: 1, age: 30, name: "Brad Pitt" },
    { id: 2, age: 24, name: "Tom Holland" },
    { id: 3, age: 21, name: "Zendaya" },
    { id: 4, age: 29, name: "Shah Rukh Khan" },
  ];
  return (
    <div className="app-container">
      {users.map((user) => {
        return <User user={user} key={user.id} />;
      })}
    </div>
  );
}

export default App;