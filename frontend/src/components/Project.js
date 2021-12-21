import React from 'react'
import {Link} from 'react-router-dom'


const ProjectItem = ({project, users, deleteProject}) => {
   return (
            <tr>
                <td><Link to={`/project/${project.id}`}>{project.id}</Link></td>
                <td>{project.name}</td>
                <td>{project.users}</td>
                <td><button onClick={() => deleteProject(project.id)} type='button'>Delete</button></td>
            </tr>
   )
}

const ProjectList = ({projects, users, deleteProject}) => {
   return (
   <div>
       <table>
             <th>id</th>
             <th>Name</th>
             <th>User</th>
             <th></th><th></th>
            {projects.map((project) => <ProjectItem project={project} deleteProject={deleteProject}/>)}
       </table>
       <Link to={'/projects/create'}>Create</Link>
   </div>
   )
}


export default ProjectList;
