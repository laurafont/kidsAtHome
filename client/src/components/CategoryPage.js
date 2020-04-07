import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class CategoryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        this.getCategories();
      }
    
      getCategories = () => {
        fetch("/category")
          .then(response => response.json())
          .then(response => {
            this.setState({ categories: response });
          });
      };

    
    render() {
        return (
            <div className="container mt-5">
                  {this.state.categories.map((category, index) => {
                    return (
                      <div className="row" key={index}>  
                        <div className="col-4 text-right"><h3><Link className="link" to={`/categories/${index + 1}`}>{category.name}</Link></h3></div>
                        <div className="col-2 text-center"> <Link to={`/categories/${index + 1}`}>
                            <img width="50px" src={category.thumbnail} /></Link></div>
                        <div className="col-6 font-weight-light">{category.description}</div> 
                      </div>
                    );
                    })}
            </div>
        )
    }
}
