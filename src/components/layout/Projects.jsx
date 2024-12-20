import { projects } from "../../data";
import { Container } from "../Container";
import { useState } from "react";
import ProjectItem from "../ui/ProjectItem";
import PorjectItemModal from "../ui/PorjectItemModal";
import styled from "styled-components";

const ProjectWrapper = styled.div`
  position: relative;
  background-color: #fff;
`;
function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <Container>
      <ProjectWrapper>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} setModal={setModal} />
        ))}
      </ProjectWrapper>
      <PorjectItemModal modal={modal} projects={projects} />
    </Container>
  );
}

export default Projects;
