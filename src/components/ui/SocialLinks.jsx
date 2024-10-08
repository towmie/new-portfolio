import { socialMedia } from "../../data";
import styled from "styled-components";

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  /* align-items: flex-start; */
  justify-content: space-between;
  gap: 20px;
  padding: 40px 60px;

  & p {
    color: #fff;
    font-size: 32px;
    margin: 0;
    font-family: "Oswald", sans-serif;
  }
`;

const SocialList = styled.div`
  p {
    color: #fff;
    font-size: 18px;
    opacity: 0.4;
    font-family: "Oswald", sans-serif;
  }

  ul {
    display: flex;
    gap: 20px;
    align-items: center;
    margin: 0;
    margin-top: 1rem;
    padding: 0;
  }

  a {
    display: inline-block;
    color: #ffffff;
    font-size: 24px;
    font-family: "Oswald", sans-serif;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.76, 0, 0.24, 1);
    position: relative;

    &::before {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 0;
      height: 3px;
      background-color: #fff;
      transition: all 0.3s cubic-bezier(0.76, 0, 0.24, 1);
    }

    &:hover::before {
      width: 100%;
    }
  }
`;

function SocialLinks() {
  return (
    <SocialWrapper>
      <p>
        Reach out to me today and let&apos;s discuss how I can help you achieve
        your goals
      </p>
      <SocialList>
        <p>Socials</p>
        <ul>
          {socialMedia.map((item) => (
            <a target="_blank" href={item.link} key={item.id}>
              {item.network}
            </a>
          ))}
        </ul>
      </SocialList>
    </SocialWrapper>
  );
}

export default SocialLinks;
