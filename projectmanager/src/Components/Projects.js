import React, { Component } from 'react';

class Projects extends Component {
    render() {
      let projectItems;
      if(thisprops.projects) {
        projectItems = this.props.projects.map(project => {
          //console.log(project);
          return(
            <ProjectItem project={project} />
          );
        });
      }
        return (
            <div className="Projects">
                {projectItems}
            </div>
        );
    }
}

export default Projects;
