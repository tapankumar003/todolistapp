import React, { useState } from 'react';
import './App.css'; // 🔥 Make sure to import the App.css file.

function Users(props) {
  return (
    <div className='mcard'>
  <div><h5>{props.user.name}</h5> {props.user.des}</div>
  <button onClick={() => props.handleDelete(props.user.id)}>
        Delete
      </button>
      <button onClick={() => props.handleDelete(props.user.id)}>
        Done
      </button>

  </div>
);
}

function App() {
  const [users, setUsers] = useState(
    [{ id: 1, des: 'hyper text mark up language...', name: 'Html' },
    { id: 2, des: 'cascading styling sheet..', name: 'CSS' }
    ]);

    const [doneitems, setdone] = useState([]);

  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      des: des,
      name: name
    };
    setUsers([...users,newUser])
  };

  const deleteUserHandler = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    const doneitem = users.filter((user) => user.id === id)[0];
    setUsers(newUserList);
    setdone([...doneitems,doneitem])
  };

  const [name, setName] = useState('');
  const [des, setdes] = useState('');


  return (
    <div className='maincard'>
      <h2 className='hdn'>My Todo List</h2>
      <div className='unp'>
      <h5>Title: </h5><input className='inp' value={name}
        onChange={(e) => setName(e.target.value)} />

      <h5>description: </h5><input className='inp' value={des} 
        onChange={(e) => setdes(e.target.value)} />

      <button className='ibtn' onClick={addUserHandler}>Add</button>
      </div >
      <h3>working</h3>
      <div className='mmcd'>
      {users.map((user) => {
        return (<Users  user={user} key={user.id} handleDelete={deleteUserHandler}></Users>);
      })}
      </div>
      <hr/>
      <h3>done</h3>
      <div className='mmcd'>
      {doneitems.map((doneitem) => {
        return (<Users  user={doneitem} key={doneitem.id} handleDelete={deleteUserHandler}></Users>);
      })}
      </div>
    </div>

  );
} export default App;