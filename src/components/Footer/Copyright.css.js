import styled from 'styled-components';
import variable from "../../styles/Variables.css";

const CopyrightCSS = styled.p`
  font: 400 ${variable.value.bv2}/${variable.value.bv10} ${variable.fonts.RobotoMedium};
  color: ${variable.colors.primaryColor};
  margin:0 auto;
  @media ${variable.media.sm}{
    margin: 0;
  }
  @media ${variable.media.md}{
    margin: 0 1rem;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
`;

export default CopyrightCSS;