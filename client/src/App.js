import React from 'react';
import CategoryBox from './components/CategoryBox';
import ResourcePage from './components/ResourcePage';
import CategoryPage from './components/CategoryPage';
import InputPage from './components/InputPage';
import Header from './components/Header';
import AgePage from './components/AgePage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
          <Route path="/agePage" component={AgePage} />
          <Route path="/resources/:id" component={ResourcePage} />
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
    <div className="container">
      <img width="100%" height="500px" src="https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  alt="art supplies"/>
    </div>
    <div className="container mt-3">
     <div className="container px-5">
      <p className="font-italic text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    </div>
    <CategoryPage />
  </div>
);



