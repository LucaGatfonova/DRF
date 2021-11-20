import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import UserList from './components/User.js';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


class App extends React.Component{
   constructor(props) {
       super(props)
       this.state = {
           'users': []
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
   }


   render () {
       return (
         <>
           <div>
                <Navbar />
           </div>
           <div>
               <UserList users={this.state.users} />
           </div>
               <div className="page-container">
               <div className="content-wrap">
                    </div>
                        <Footer />
                    </div>
         </>
       );
   }
}


export default App;


