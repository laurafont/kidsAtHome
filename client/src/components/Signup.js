import React, { Component } from 'react';


const emailRegex = RegExp(/^[A-Za-z0-9_.-]+@[A-Za-z0-9_.-]+\.[A-Za-z]{2,4}$/);

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers: [],
            fullname: null,
            email: null,
            username:null,
            password: null,
            
            formErrors:{
                fullname: "",
                email: "",
                username: "",
                password: ""
            }
        };
    }

    componentDidMount() {
        this.getUser();
      }

      getUser = () => {
        fetch("/users")
          .then(response => response.json())
          .then(response => {
            this.setState({ allUsers : response });
          });
      };  

      handleInput(e) {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case "fullname":
                formErrors.fullname = value.length < 5 ?
                "Minimum 5 characters required" : "" ;
                break;
            case "email":
                formErrors.email = emailRegex.test(value) ?
                "" : "Invalid e-mail address" ;
                break;
            case "username":
                formErrors.username = value.length < 5 ?
                "Minimum 5 characters required" : "" ;
                break;        
            case "password":
                formErrors.password = value.length < 5 ?
                "Minimum 5 characters required" : "" ;
                break;
                default:
                break;           
        }
                this.setState({ formErrors, [name]: value}, () => console.log(this.state));
        
        
      };

      addUser() {
        fetch("/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            fullname: this.state.fullname,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
          })
        })
          .then(response => response.json())
          .then(response => {
            this.setState({ allUsers : response });
          })
          .catch(error => {
            console.log(error);
          });       
      }

      deleteUser = id => {
        fetch(`/users/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(response => {
            if (response.message === "Error") {
              return console.error("error");
            }
            this.getUser();
          })
          .catch(error => {
            console.log(error);
          });
      };

    render () {
        
    const { formErrors} = this.state;

    return(

        <div className="App">
                <div className="container mt-5">
                    <h3>New User Account</h3>
                    <br/>
                    <hr/>
                    <br/>
                    <div className="container mx-5">
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Full Name</label>
                            <div className="col-sm-8">
                                <input className="form-control"
                                type="text"
                                placeholder="Firstname & Lastname"
                                name="fullname"
                                onChange={e => this.handleInput(e)}/>
                                {formErrors.fullname.length > 0 && (<span className="formerrors">{formErrors.fullname}</span>
                                )}
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">E-mail</label>
                            <div className="col-sm-8">
                                <input className="form-control"
                                placeholder="your@email.com"
                                name="email"
                                onChange={e => this.handleInput(e)}/>
                                {formErrors.email.length > 0 && (<span className="formerrors">{formErrors.email}</span>
                                )}
                            </div>
                        </div>
                        
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-8">
                                <input className="form-control"
                                type="text"
                                placeholder="Create a username"
                                name="username"
                                onChange={e => this.handleInput(e)}/> 
                                {formErrors.password.length > 0 && (<span className="formerrors">{formErrors.password}</span>
                                )}
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-8">
                                <input className="form-control"
                                type="password"
                                placeholder="Create a password"
                                name="password"
                                onChange={e => this.handleInput(e)}/>
                                 {formErrors.password.length > 0 && (<span className="formerrors">{formErrors.password}</span>
                                )}
                            </div>
                        </div>


                    </form>
                    </div>
                    <br/>
                    <hr/>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-secondary" onClick={e =>this.addUser(e)}>Register</button>
                    </div>
                    <div>
                    <p className="text-align-center m-4">Already have an account? <a href="/login"> Click here to log in</a></p>
                    </div> 
                </div>

                
            </div>
        )
    }
}

   
   


