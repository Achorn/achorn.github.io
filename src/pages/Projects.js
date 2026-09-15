import PageHeader from "../components/layout/PageHeader";
import ProjectCard from "../components/cards/ProjectCard";
import projects from "../data/projects";

const Projects = () => (
  <>
    <PageHeader
      title="projects"
      subtitle="Games, tools, and apps — most of them built to learn something specific."
    />

    {projects.map((project, index) => (
      <ProjectCard
        key={project.id}
        project={project}
        reversed={index % 2 === 1}
      />
    ))}
  </>
);

export default Projects;
