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
      }
    
      getCategory = (props) => {
        console.log(props);
        fetch(`/${props.match.params.id}`)
          .then(response => response.json())
          .then(response => {
            this.setState({ category: response });
          });
      };

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


    render() {
        return (
            <div>
                <h1>{this.state.category.name}</h1>
                <div>
                {this.state.resources.filter(re => re.category_id === this.state.category.id).map(resource => (
                      <div key={this.state.resources.id}>
                        <Link to={`/resources/${this.state.resources.id}`}>
                            <img src={resource.thumbnail} /></Link>
                        <div>{resource.name}</div>
                        <div>{resource.description}</div>
                        <div>{resource.indoor}</div>
                        <div>{resource.age_id}</div>
                      </div>
                  ))}
                </div>
            </div>
        )
    }
}

function Category(props) {
    let { id } = useParams();
  return <h3>{id} {props.name}</h3>;
  }

