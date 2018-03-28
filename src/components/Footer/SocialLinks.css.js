import styled from 'styled-components';
import variable from "../../styles/Variables.css";

const SocialLinksCSS = styled.ul`
  margin: 0 auto;
  @media ${variable.media.sm}{
    margin: 0 auto 0 0;
  }
  li a{
    text-decoration: none;
    color: ${variable.colors.primaryColor};
  }  
`;

export default SocialLinksCSS;