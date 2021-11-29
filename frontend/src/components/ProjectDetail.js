import React from 'react';
import { useParams } from 'react-router-dom'

const ProjectItem = ({project, users}) => {
   return (
       <tr>
           <td>{project.name}</td>
           <td>{project.repository}</td>
           <td>{project.users.map((userId) => {return users.find((user) => user.id == userId).last_name})}</td>
       </tr>
   )
}

const TodoItem = ({todo, users}) => {
   return (
       <tr>
           <td>{todo.project}</td>
           <td>{todo.users.map((userId) => {return users.find((user) => user.id == userId).last_name})}</td>
           <td>{todo.title}</td>
           <td>{todo.text}</td>
       </tr>
   )
}

const ProjectDetail = ({projects, todo}) => {

    let { id } = useParams();
    console.log('project_id = ',{id})
    let filtered_projects = projects.filter((item) => item.id == id)
    let filtered_todo = todo.filter((item) => item.id == id)

    return (
        <div>
            <h2>Проект:</h2>
               <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Repository</th>
                            <th>User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered_projects.map((project)=> <ProjectItem project={project} />)}
                    </tbody>
               </table>

            <h2>Заметки:</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Project</th>
                            <th>User</th>
                            <th>Title</th>
                            <th>Text</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered_todo.map((todo)=> <TodoItem todo={todo} />)}
                    </tbody>
                </table>
        </div>
    )
}

export default ProjectDetail;