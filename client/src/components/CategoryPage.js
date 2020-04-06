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
        fetch("/")
          .then(response => response.json())
          .then(response => {
            this.setState({ categories: response });
          });
      };

    
    render() {
        return (
            <div>
                <table>
                <tbody>
                  {this.state.categories.map(category => (
                      <tr key={this.state.categories.id}>
                        <Link to={`/categories/${this.state.categories.id}`}>
                            <img src={category.thumbnail} /></Link>
                        <th>{category.name}</th>
                        <th>{category.description}</th> 
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
        )
    }
}
