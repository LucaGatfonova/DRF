import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {BrowserRouter, Route, Switch, Redirect, Link} from "react-router-dom";
import UserList from './components/User.js';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProjectList from './components/Project.js';
import TodoList from './components/Todo.js';
import ProjectDetail from './components/ProjectDetail.js';
import LoginForm from './components/LoginForm.js';


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
           'token': '',
       }
   }

   set_token(token) {
       const cookies = new Cookies()
       cookies.set('token', token)
       this.setState({'token': token}, () => this.load_data())
   }

   is_auth() {
       return !!this.state.token
   }

   logout() {
       this.set_token('')
       this.setState({'username': ''})
   }

    get_token_from_storage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({'token': token}, () => this.load_data())
    }

   get_token(username, password) {
           // Хранение Token в localStorage
//            localStorage.setItem('token', response.data.token)
//            let token = localStorage.getItem('token')

        const cookies = new Cookies()

        const data = {username: username, password: password}
        axios.post('http://127.0.0.1:8000/api-token-auth/', data).then(
            response => {
                this.set_token(response.data['token'])
                this.setState({'username': username})
                console.log(this.state.username)
            // Вариант хранения Token в localStorage
//            localStorage.setItem('token', response.data.token)
//            let token = localStorage.getItem('token')
//            console.log(token)
        }).catch(error => alert('Неверный логин или пароль'))
    }

    load_data() {
        const headers = this.get_headers()
        axios.get('http://127.0.0.1:8000/api/users/', {headers}).then(
            response => {
        	    const users = response.data.results
        	    this.setState(
                    {
                    'users': users
                    }
                )
           }).catch(error => {
                console.log(error)
                this.setState({users:[]})
           })

        axios.get('http://127.0.0.1:8000/api/projects/', {headers}).then(
            response => {
        	    const projects = response.data.results
        	    this.setState(
                    {
                    'projects': projects
                    }
                )
           }).catch(error => {
                console.log(error)
                this.setState({projects:[]})
           })

        axios.get('http://127.0.0.1:8000/api/todo/', {headers}).then(
            response => {
        	    const todo = response.data.results
        	    this.setState(
                    {
                    'todo': todo
                    }
                )
           }).catch(error => {
                console.log(error)
                this.setState({todo:[]})
           })
    }

    get_headers() {
        let headers = {
            'Content-Type': 'application/json'
        }
        if (this.is_auth()){
                headers['Authorization'] = 'Token ' + this.state.token
            }
        return headers
    }

   componentDidMount() {
        this.get_token_from_storage()
   }


    render () {
        return (
            <div>
                <BrowserRouter>
                    <Navbar />
                    {this.state.username}
                    <br/>
                    {this.is_auth()
                        ?
                        <button type="button" onClick={() => this.logout()}>Logout</button> :
                        <button type="button"><Link to='/login'>Login</Link></button>
                    }
                    <Switch>
                        <Route exact path='/' component={() => <UserList users={this.state.users} />} />
                        <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects}/>} />
                        <Route exact path='/todo' component={() => <TodoList todo={this.state.todo} />} />
                        <Route exact path='/login' component={() => <LoginForm  get_token={(username, password) => this.get_token(username, password)}/>} />
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

