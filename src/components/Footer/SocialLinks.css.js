import styled from 'styled-components';
import variable from "../../styles/Variables.css";

const SocialLinksCSS = styled.ul`
  margin: 0 auto;
  @media ${variable.media.sm}{
    margin: 0 auto 0 1rem;
  }
  li{
    &:first-child{
      margin-left: 0;
    }
    &:last-child{
      margin-right: 0;
    }
    a{
      text-decoration: none;
      color: ${variable.colors.primaryColor};
    }  
  }
`;

export default SocialLinksCSS;