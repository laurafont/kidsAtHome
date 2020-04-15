import React from 'react';
import CategoryBox from './components/CategoryBox';
import ResourcePage from './components/ResourcePage';
import CategoryPage from './components/CategoryPage';
import InputPage from './components/InputPage';
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/categories" exact component={CategoryPage} />
          <Route path="/resources/:id" component={ResourcePage} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/addResource" component={InputPage} />
          <Route path="/categories/:id" exact component={CategoryBox} />
          <Route path="/" exact component={Landing} />
        </Switch>
        <div className="footer"></div>
      </div>
    </Router>
  );
}

const Landing = () => (
  <div>
    <div className="slider-container mx-auto">
    <Carousel>
      <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://images.pexels.com/photos/2170/creative-desk-pens-school.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        className="d-block w-100"
         src="https://images.pexels.com/photos/3855552/pexels-photo-3855552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
         alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://images.pexels.com/photos/3662668/pexels-photo-3662668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    <div className="container mt-3">
      <div className="container px-5">
        <p className="font-italic text-center font-weight-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>
    <CategoryPage />
  </div>
);



