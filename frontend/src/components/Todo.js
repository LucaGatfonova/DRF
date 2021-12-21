import React from 'react'
import {Link} from 'react-router-dom'


const TodoItem = ({todo, deleteTodo}) => {
   return (
       <tr>
           <td>
               {todo.project}
           </td>
           <td>
               {todo.user}
           </td>
           <td>
               {todo.title}
           </td>
           <td>
               {todo.text}
           </td>
           <td><button onClick={() => deleteTodo(todo.id)} type='button'>Delete</button></td>
       </tr>
   )
}

const TodoList = ({todo, deleteTodo}) => {
   return (
   <div>
       <table>
           <th>
               Project
           </th>
           <th>
               User
           </th>
           <th>
               Title
           </th>
           <th>
               Text
           </th>
           <th></th>
           {todo.map((todo) => <TodoItem todo={todo} deleteTodo={deleteTodo} />)}
       </table>
       <Link to={'/todo/create'}>Create</Link>
   </div>
   )
}

export default TodoList;