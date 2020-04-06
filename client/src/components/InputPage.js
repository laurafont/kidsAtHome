import React, { Component } from 'react'

export default class InputPage extends Component {
    render() {
        return (
            <div className="App">
                <div className="container mt-5">
                    <h3>Any idea you want to share with other parents?</h3>
                    <br/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <hr/>
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Title</label>
                            <div className="col-sm-10">
                                <input className="form-control"
                                type="text"
                                placeholder="Resource title"
                                name="name"
                                onChange={e => this.handleInput(e)}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Description</label>
                            <div className="col-sm-10">
                                <textarea className="form-control"
                                placeholder="Short description"
                                name="description"
                                onChange={e => this.handleInput(e)}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Category</label>
                            <div className="col-sm-10">
                            <select className="custom-select mr-sm-2"
                            name="category"
                            onChange={e => this.handleInput(e)}>
                                <option selected>Choose category</option>
                                <option value="crafts">Crafts</option>
                                <option value="pyscho">Pyschomotricity</option>
                                <option value="educational">Educational resources</option>
                                <option value="music">Music</option>
                                <option value="recipes">Recipes</option>
                            </select>    
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Age</label>
                            <div className="col-sm-10">
                            <select className="custom-select mr-sm-2"
                            name="age" 
                            onChange={e => this.handleInput(e)}>
                                <option selected>Select range of age</option>
                                <option value="0-3">Ages 0 - 3</option>
                                <option value="4-6">Ages 4 - 6</option>
                                <option value="7-9">Ages 7 - 9</option>
                                <option value="10-12">Ages 10 - 12</option>
                                <option value="13+">Ages 13 +</option>
                            </select>    
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <legend className="col-form-label col-sm-2 pt-0">Type of activity</legend>
                                <div className="col-sm-1">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="indoor" value="indoor" checked />
                                        <label className="form-check-label">Indoor</label>
                                        <input className="form-check-input" type="radio" name="outdoor" value="outdoor" />
                                        <label className="form-check-label">Outdoor</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
