import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    useParams
  } from "react-router-dom";

export default class CategoryBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: [],
            resources: []
        }
    }

    componentDidMount() {
        this.getCategory();
        this.getResources();
      }
    
      getCategory = () => {
        fetch(`/category/${this.props.match.params.id}`)
          .then(response => response.json())
          .then(response => {
            this.setState({ category: response });
          });
      };
  
      getResources = () => {
        fetch(`/category/${this.props.match.params.id}/resources`)
          .then(response => response.json())
          .then(response => {
            this.setState({ resources: response });
          });
      };


    render() {
        return (
            <div className="container mt-4">
                <div>
                {this.state.category.map((category, index) => {
                    return (
                      <div key={index}>
                        <h3>{category.name}</h3> 
                      </div>
                    );
                    })}
                </div>
                <hr/>
                <div className="row">
                {this.state.resources.map((resource, index) => {
                      return (
                      <div key={index} className="col-md-3 mb-4 text-center">
                        <Link to={`/resources/${resource.id}`}>
                            <img width="200px" src={resource.thumbnail} /></Link>
                        <div className="card-title font-weight-bold mt-2">{resource.name}</div>
                      </div>
                      );
                      })}
                </div>
            </div>
        )
    }
}

