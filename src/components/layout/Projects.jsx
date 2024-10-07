import styled from "styled-components";
import { projects } from "../../data";
import { Container } from "../Container";
import { useState } from "react";
import ProjectItem from "../ui/ProjectItem";
import PorjectItemModal from "../ui/PorjectItemModal";
const StyledProjects = styled.div``;

function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <Container>
      <StyledProjects>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} setModal={setModal} />
        ))}
      </StyledProjects>
      <PorjectItemModal modal={modal} projects={projects} />
    </Container>
  );
}

export default Projects;
