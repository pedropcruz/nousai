import styled from 'styled-components';
import variable from "../styles/Variables.css";

const FooterCSS = styled.footer`
  width: calc(100% - 2em);                                       
  align-items: center;                               
  height: 64px;
  background: ${variable.colors.whiteColor};                                      
`;

export default FooterCSS;