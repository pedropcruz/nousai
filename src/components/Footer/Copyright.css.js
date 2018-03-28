import styled from 'styled-components';
import variable from "../../styles/Variables.css";

const CopyrightCSS = styled.p`
  font: 400 ${variable.value.bv2}/${variable.value.bv10} ${variable.fonts.RobotoMedium};
  color: ${variable.colors.primaryColor};
  a{
    text-decoration: none;
    color: inherit;
  }
`;

export default CopyrightCSS;