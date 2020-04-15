import React, { Component } from 'react';
import axios from "axios";



export default class Login extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password: ""
        }
    }

    handleInput = e => {
        this.setState ({
            [e.target.name] : e.target.value

        })
    }

    tryLogin = () => {
    axios("/login", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        data: {username: this.state.username, password: this.state.password},
    }) 
        .then(results => {
        localStorage.setItem("token", results.data.token);
        alert("log in ok!")
        })
        .catch(err => console.log(err));

    };
    
    render() {
        
        return (
            
            <div className="App">
                <div className="container mt-5">
                    <h3>Log in</h3>
                    <br/>
                    <hr/>
                    <br/>
                    <div className="container mx-5">
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-8">
                                <input className="form-control"
                                type="text"
                                placeholder="Your username"
                                name="username"
                                value={this.state.username}
                                onChange={e => this.handleInput(e)} /> 
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-8">
                                <input className="form-control"
                                type="password"
                                placeholder="Your account's password"
                                name="password"
                                value={this.state.password}
                                onChange={e => this.handleInput(e)} />
                            </div>
                        </div>
                    </form>
                    </div>
                    <br/>
                    <hr/>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-secondary" onClick={this.tryLogin}>Login</button>
                    </div>
                </div>    
            </div>
         
        )
    }
}
