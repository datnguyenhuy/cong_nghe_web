import React, {Component} from 'react';
import {DataContext} from './Context';
import querystring from 'querystring';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import axios from 'axios'
var gv = {};
export default class Login extends Component{
    state={
     username:"",
     password:""
	}

    handleChange=(event)=>{
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    handleSubmit=async (event)=>{
        event.preventDefault();
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        try{
            console.log(this.state.username);
            let body = {
                email: this.state.username,
                password: this.state.password
            };
            console.log(body);
            let headers = {
                    //'Content-Type': 'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Origin': '*'
			};
            body = querystring.stringify(body);
            let result = await axios.post('http://localhost:3000/signin',body,headers); 
            //let result = await axios({
            // method: 'post',
            // url: 'http://localhost:3000/signin',
            // headers: {"content-type": "application/json"},
            // data: {
            //   firstName: 'Fred',
            //   lastName: 'Flintstone'
            // }
            //});
            console.log(result);
		} catch(e){
            console.log(e);  
		}
    }

    render(){
     return(
      <div className='login'>
        <form onSubmit={this.handleSubmit}>
            <label>
                Username:
                <input type="text" name='username' value={this.state.username} onChange={this.handleChange}/>
            </label>

            <br></br>

            <label>
                Password:
                <input type="text" name='password' value={this.state.password} onChange={this.handleChange}/>
            </label>

            <br></br>

            <input type='submit' value='Login'/>
        </form>
     </div>
	 )
	}
}