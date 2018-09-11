import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {

  render() {
    let ProjectItems;
    if(this.props.Projects){
      ProjectItems = this.props.Projects.map(project  =>{
      console.log(project);
      return (
          <ProjectItem key = {project.title} project ={project} />
      );

      });
    }
    return (
      <div className="Projects">
      <h3>Latest Projects</h3>
  {ProjectItems}
      </div>
    );
  }
}

export default Projects;
