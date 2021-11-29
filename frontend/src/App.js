import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import UserList from './components/User.js';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProjectList from './components/Project.js';
import TodoList from './components/Todo.js';
import ProjectDetail from './components/ProjectDetail.js';


const NotFound404 = ({ location }) => {
  return (
    <div>
        <h1>Страница по адресу '{location.pathname}' не найдена</h1>
    </div>
  )
}

class App extends React.Component{
   constructor(props) {
       super(props)
       this.state = {
           'users': [],
           'projects': [],
           'todo': [],
       }
   }

   componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/').then(
            response => {
        	    const users = response.data
        	    this.setState(
                    {
                    'users': users
                    }
                )
            }
        ).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/projects/').then(
            response => {
        	    const projects = response.data
        	    this.setState(
                    {
                    'projects': projects
                    }
                )
            }
        ).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todo/').then(
            response => {
        	    const todo = response.data
        	    this.setState(
                    {
                    'todo': todo
                    }
                )
            }
        ).catch(error => console.log(error))
   }


    render () {
        return (
            <div>
                <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={() => <UserList users={this.state.users} />} />
                        <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects}/>} />
                        <Route exact path='/todo' component={() => <TodoList todo={this.state.todo} />} />
                        <Route exact path='/project/:id'>
                            <ProjectDetail projects={this.state.projects}
                             users={this.state.users} todo={this.state.todo} /> </Route>
                        <Route component={NotFound404} />
                    </Switch>
                    <Footer />
                </BrowserRouter>
             </div>

    )
  }
}

export default App;

