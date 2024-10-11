import styled from "styled-components";

const StyledProjectTitle = styled.a`
  padding: 40px 60px;
  border-bottom: 1px solid rgb(201, 201, 201);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s linear;
  text-decoration: none;
  cursor: pointer;
  position: relative;

  & h2 {
    transition: all 0.2s linear;
    margin: 0;
  }
  & div {
    transition: all 0.2s linear;
  }

  &:hover {
    opacity: 0.6;

    & h2 {
      transform: translatex(10px);
    }
    & div {
      transform: translatex(-10px);
    }
  }

  &:nth-child(1) {
    border-top: 1px solid rgb(201, 201, 201);
  }

  & h2 {
    font-size: 5vw;
    font-weight: 500;
    color: #000;
  }

  @media (max-width: 991px) {
    padding: 30px 40px;
  }

  @media (max-width: 768px) {
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`;

const StyledProjectIcons = styled.div`
  display: flex;
  gap: 10px;

  & img {
    width: 40px;
    height: 40px;
  }
`;

function ProjectItem({ project, setModal }) {
  return (
    <StyledProjectTitle
      href={project.link}
      target="_blank"
      onMouseEnter={() => setModal({ active: true, index: project.id })}
      onMouseLeave={() => setModal({ active: false, index: project.id })}
    >
      <h2>{project.title}</h2>
      <StyledProjectIcons>
        {project.iconLists.map((icon) => (
          <img key={icon} src={icon} alt={project.title} />
        ))}
      </StyledProjectIcons>
    </StyledProjectTitle>
  );
}

export default ProjectItem;
