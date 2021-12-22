import React from 'react'

class ProjectForm extends React.Component {

    constructor(props) {
        super(props)
            this.state = {'name': '', 'repository_url': '', 'users': []
        }
        console.log('props = ', props)
        console.log('props.id = ', props.id)
        console.log('this.state = ', this.state)
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

    handleUsersChange(event) {
        if (!event.target.selectedOptions) {
            this.setState({
                'users': []
            })
            return;
        }
        let users = []
        for(let i=0; i< event.target.selectedOptions.length; i++) {
            users.push(event.target.selectedOptions.item(i).value)
        }
        this.setState({
            'users': users
        })
    }

    handleSubmit(event) {
        this.props.createProject(this.state.name, this.state.repository_url, this.state.users)
        console.log(this.state.name, this.state.repository_url, this.state.users)
        event.preventDefault()
    }

    render() {
        return (
        <form onSubmit={(event)=> this.handleSubmit(event)}>
            <div className="form-group">
                <label>Наименование</label>
                <input type="text" className="form-control" name="name" value={this.state.name} onChange={(event)=>this.handleChange(event)} />
                <br/><br/>
                <label>Ссылка на репозиторий</label>
                <input type="text" className="form-control" name="repository_url" value={this.state.repository_url} onChange={(event)=>this.handleChange(event)} />
                <br/><br/>
            </div>
            <div className="form-group">
                <label for="users">Пользователи</label>
                <select name="users" multiple onChange={(event)=>this.handleUsersChange(event)}>
                                {this.props.users.map((item)=><option value={item.id}>{item.username}</option>)}
                </select>
                <br/><br/>
            </div>
            <input type="submit" className="btn btn-primary" value="Save" />
        </form>
        );
    }
}

export default ProjectForm;