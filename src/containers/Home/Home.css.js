import styled from 'styled-components';
import backgroundImage from '../../resources/img/bgnousaiwebsite.png';
import variable from "../../styles/Variables.css";

const HomeCSS = styled.div`
  &.nousai__quotes,
  .nousai__quotes{
    height: 100%;
    @media ${variable.media.md}{
      background: url(${backgroundImage}) no-repeat 100% center;
    }
    &--welcome{
      margin-left: 4vw;
      width: auto;
      text-align: center;
      top: 50%;
      transform: translate(0,-50%);
      font:400 ${variable.value.bv5}/1.2em ${variable.fonts.RobotoMedium};
      color: ${variable.colors.primaryColor};
      @media ${variable.media.md}{
        text-align: left;
        width: 40%;
        font-size: 2.5em;
      }
      span{
        text-decoration: underline;
      }
    }
    &--phrase{
      display: none;
      @media ${variable.media.md}{
        display: block;
        font: 900 2.4em/1em ${variable.fonts.RufinaBold};
        color: ${variable.colors.primaryColor};
      }
      p{
        text-align: right;
        font: 200 .4em/1em ${variable.fonts.Rufina};
      }
    }
  }
`;

export default HomeCSS;