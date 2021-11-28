import React from 'react'


const TodoItem = ({todo}) => {
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
       </tr>
   )
}

const TodoList = ({todo}) => {
   return (
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
           {todo.map((todo) => <TodoItem todo={todo} />)}
       </table>
   )
}

export default TodoList;