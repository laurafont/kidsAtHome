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
          <Route path="/resource" component={ResourcePage} />
          <Route path="/addResource" component={InputPage} />
          <Route path="/categories/:id" component={CategoryBox} />
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
      <img src="client\src\img\art_supplies.jpeg" />
    </div>
    <div className="container">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <CategoryPage />
  </div>
);



