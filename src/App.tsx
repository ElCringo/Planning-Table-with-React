import React from 'react';
import './App.css';
import Users from './assets/testdata';

/*The table in the app component will be changed to show only the user's first and last names,
and the rest of the data will be shown when clicking on a user (maybe in a modal or separate view).
Also, similar will be done with the tasks, which will be shown next to the username.
Behind tasks, there will be a timeline for each user.
On this timeline, the task duration will be visualized.
Assigning the tasks to specific users would ideally be possible by pulling the task from one field to another,
but for now, chosing a task from a list would suffice.*/


const App: React.FC = () => {
  return (
    <div>
      <h1>Users List</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">Department</th>
            <th scope="col">Role</th>
            <th scope="col">Tasks</th>
          </tr>
        </thead>
        {Users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td><button>{user.firstName + " " + user.name}</button></td>
            <td>{user.email}</td>
            <td>{user.department}</td>
            <td>{user.role}</td>
            <td><button>{Array.isArray(user.tasks) ? user.tasks.join(', ') : String(user.tasks ?? '')}</button></td>
          </tr>
        ))}
      </table > <object data="" type=""></object>
    </div>
  );
}

export default App;
