import styled from 'styled-components';
import bgimg from '../../resources/img/about_background.jpg';
import variables from '../../styles/Variables.css';

const AboutCSS = styled.div`
  position: relative;
  height: 100%;
  @media ${variables.media.md}{
    background: url(${bgimg}) no-repeat center;
    background-size: cover;
  }
`;

export default AboutCSS;