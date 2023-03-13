import ProjectCard from "./ProjectCard";
function Projects(){
    return(
    <section id="projects">
    <h2 className="text-important">Projects</h2>
    <div className="projects-container">
      {/* <!--Project Card --> */}
      <ProjectCard />
      {/* <!--Project Card --> */}
      <ProjectCard />
      {/* <!--Project Card --> */}
      <ProjectCard />
      </div>
  </section>);
}
export default Projects