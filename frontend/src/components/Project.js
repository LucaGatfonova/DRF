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

class ProjectList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {'filter': '', 'filtered_projects': props.projects}
    }

    handleChange(event)
    {
        this.setState(
                {
                    [event.target.name]: event.target.value
                }
            );
        console.log(event.target.name, '=', event.target.value)
    }

    handleFilterChange(event) {
        this.setState(
                        {
                            filter: event.target.value,
                            filtered_projects: this.props.projects.filter((item) => item.name.toUpperCase().indexOf(event.target.value.toUpperCase()) != -1)
                        }
                    );
        console.log(event.target.name, '=', event.target.value)
    }

    render() {
        return (
        <div>
            <label>Фильтр</label>
            <input type="text"  name="filter" value={this.state.filter} onChange={(event)=>this.handleFilterChange(event)} />
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>User</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.filtered_projects.map((project)=> <ProjectItem project={project} users={this.props.users} deleteProject={this.props.deleteProject} updateProject={this.props.updateProject}/>)}
                </tbody>
            </table>
            <Link to={'/projects/create'}>Create</Link>
        </div>
        );
    }
}

export default ProjectList;
