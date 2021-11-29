import React from 'react'
import {Link} from 'react-router-dom'


const ProjectItem = ({project, users}) => {
   return (
       <tr>
           <td>
               <Link to={`/project/${project.id}`}>{project.id}</Link>
           </td>
           <td>
               {project.name}
           </td>
           <td>
               {project.users}
           </td>
       </tr>
   )
}

const ProjectList = ({projects, users}) => {
   return (
       <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>User</th>
                </tr>
            </thead>
       <tbody>
            {projects.map((project) => <ProjectItem project={project} />)}
       </tbody>
       </table>
   )
}


export default ProjectList;
