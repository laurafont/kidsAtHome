import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



export default class InputPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resources: [],
            name: "",
            description: "",
            category_id: null,
            age_id: null,
            indoor: 1,
            thumbnail: "",
            file: "",
            show: false,
            setShow: false,
            selectedOption: 'indoor'
        };
    }

    componentDidMount() {
        this.getResources();
      }
    
      getResources = () => {
        fetch("/resources")
          .then(response => response.json())
          .then(response => {
            this.setState({ resources: response });
          });
      };

    handleInput(e) {
        const value = e.target.value;
        const name = e.target.name;
    
        this.setState({
          [name]: value
        });
      }

      addResource() {
        fetch("/resources", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: this.state.name,
            description: this.state.description,
            category_id: this.state.category_id,
            age_id: this.state.age_id,
            indoor: this.state.indoor,
            thumbnail: this.state.thumbnail,
            file: this.state.file,
          })
        })
          .then(response => response.json())
          .then(response => {
            this.setState({ resources: response });
          })
          .catch(error => {
            console.log(error);
          });
          this.handleShow();
      }
    handleClose = () => {
        this.setState({
            setShow: false
        })
    }

    handleShow = () => {
        this.setState({
            setShow: true
          });
    }


    handleOptionChange = (changeEvent) => {
        this.setState({
        selectedOption: changeEvent.target.name
        });
    }
    
  
      
    render() {
       

        return (
            <div className="App">
                <div className="container mt-5">
                    <h3>Any idea you want to share with other parents?</h3>
                    <br/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <hr/>
                    <br/>
                    <div className="container mx-5">
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Title</label>
                            <div className="col-sm-8">
                                <input className="form-control"
                                type="text"
                                placeholder="Resource title"
                                name="name"
                                onChange={e => this.handleInput(e)}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Description</label>
                            <div className="col-sm-8">
                                <textarea className="form-control"
                                placeholder="Short description"
                                name="description"
                                onChange={e => this.handleInput(e)}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Category</label>
                            <div className="col-sm-8">
                            <select className="custom-select mr-sm-2"
                            name="category_id"
                            onChange={e => this.handleInput(e)}>
                                <option selected>Choose category</option>
                                <option value="1">Crafts</option>
                                <option value="2">Pyschomotricity</option>
                                <option value="3">Educational resources</option>
                                <option value="4">Music</option>
                                <option value="5">Recipes</option>
                            </select>    
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Age</label>
                            <div className="col-sm-8">
                            <select className="custom-select mr-sm-2"
                            name="age_id" 
                            onChange={e => this.handleInput(e)}>
                                <option selected>Select range of age</option>
                                <option value="1">Ages 0 - 3</option>
                                <option value="2">Ages 4 - 6</option>
                                <option value="3">Ages 7 - 9</option>
                                <option value="4">Ages 10 - 12</option>
                                <option value="5">Ages 13 +</option>
                            </select>    
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <legend className="col-form-label col-sm-2 pt-0">Type of activity</legend>
                                <div className="col-sm-1">
                                    <div className="form-check">
                                        <input className="form-check-input" id="indoor" type="radio" name="indoor" value="1" 
                                         checked={this.state.selectedOption === 'indoor'} onChange={e => this.handleOptionChange(e)}/>
                                        <label className="form-check-label" for="indoor">Indoor</label>
                                        <input className="form-check-input" id="outdoor" type="radio" name="outdoor" value="0"
                                          checked={this.state.selectedOption === 'outdoor'} onChange={e => this.handleOptionChange(e)} />
                                        <label className="form-check-label" for="outdoor">Outdoor</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Image</label>
                            <div className="col-sm-8">
                                <input className="form-control"
                                type="text"
                                placeholder="Insert URL"
                                name="thumbnail"
                                onChange={e => this.handleInput(e)}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">File Upload</label>
                            <div className="col-sm-5 ml-3">
                                <input type="file" className="custom-file-input"
                                name="file"
                                onChange={e => this.handleInput(e)}/>
                                <label className="custom-file-label text-left">Choose file</label>
                            </div>
                        </div>
                    </form>
                    </div>
                    <br/>
                    <hr/>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-secondary" onClick={e => this.addResource()}>Add your idea</button>
                    </div>
                </div>

                <Modal show={this.state.setShow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Congratulations</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Your idea has been added to the database!</Modal.Body>
                    <Modal.Footer>
                    <button variant="secondary" onClick={this.handleClose}>Close</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
