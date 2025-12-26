import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class ResourcePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resource: [],
            categoryName: null,
            ageName: null
        }
    }
    componentDidMount() {
        this.getResource();
      }
      getResource = () => {
        fetch(`/resources/${this.props.match.params.id}`)
          .then(response => response.json())
          .then(response => {
            this.setState({ resource: response });
            this.getCategory();
            this.getAge();
            console.log(this.state.resource[0].category_id);
          });
      };
      getCategory = () => {
        console.log(this.state.resource[0].category_id);
        console.log(this.state.resource);
        const cat=this.state.resource[0].category_id;
        fetch(`/category/${cat}`)
          .then(response => response.json())
          .then(response => {
            this.setState({ categoryName: response[0].name });
          });
      };
      getAge = () => {
        const age=this.state.resource[0].age_id;
        fetch(`/age/${age}`)
          .then(response => response.json())
          .then(response => {
            this.setState({ ageName: response[0].age_range });
          });
      };
      render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-7">
                        {this.state.resource.map((resource, index) => {
                        return (
                            <div key={index} className="col-md-3 mb-4 text-center">
                            <img width="600px" src={resource.thumbnail} alt={resource.name} />
                            </div>
                         );
                        })}
                    </div>
                    <div className="col-4">
                    {this.state.resource.map((resource, index) => {
                        return (
                            <div key={index} className="card">
                                <div className="card-body">
                                    <h3 className="card-title">{resource.name}</h3>
                                    <p className="card-text font-weight-light">{resource.description}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                    <span className="font-weight-light">Category:</span> {this.state.categoryName}</li>
                                    <li className="list-group-item">
                                    <span className="font-weight-light">Type of activity:</span> {resource.indoor === 1 ? "indoor" : "outdoor"}</li>
                                    <li className="list-group-item">
                                    <span className="font-weight-light">Suitable for ages:</span> {this.state.ageName}</li>
                                </ul>
                                <Link className="btn btn-light" to={resource.file} target="_blank" download>
                                    <button className="btn btn-light">Download file</button>
                                </Link>
                            </div>
                        );})}
                    </div>
                </div>
            </div>
        )
    }
}