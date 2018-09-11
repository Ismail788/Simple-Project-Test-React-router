import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Home from "./Components/Home";
import Stuff from "./Components/Stuff";
import Contact from "./Components/Contact";
import uuid from 'uuid';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      Projects: []
    }
  }
  componentWillMount(){
    this.setState({Projects:[
      {
        id: uuid.v4(),
        title: 'Business website',
        category: 'Web Design'
      },
      {
            id: uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
            id: uuid.v4(),
        title: 'Ecommerce Shopping',
        category: 'Web Development'
       } ]});
  }
  handleAddproject(project){
let Projects = this.state.Projects;
Projects.push(project);
this.setState({Projects: Projects});
  }
  render() {
    return (
      <HashRouter>
            <div className="container">
          <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/stuff">Stuff</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
             <h1>Simple Project test</h1>
      <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>

          </div>
      < AddProject addproject={this.handleAddproject.bind(this)}/>
      <Projects Projects={this.state.Projects} />

     </div>
</HashRouter>
    );
  }
}

export default App;
