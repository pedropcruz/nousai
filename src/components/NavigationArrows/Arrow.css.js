import styled from 'styled-components';
import variable from "../../styles/Variables.css";

const arrowWidth = "75px";

const ArrowCSS = styled.nav`
  .prev,
  .next{
  background: ${variable.colors.whiteColor};
  width: 4em;
  height:100%;
  text-align: center;
  z-index: -1;
    &__link{
      white-space: nowrap;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      top:50vh;
      transform-origin: 50% 0;
      text-decoration: none;
      font: 400 ${variable.value.bv5}/${variable.value.bv6} ${variable.fonts.RufinaBold};
      color: ${variable.colors.primaryColor};
    }
    &:before{
      content: " ";
      transition: width .3s ease-in-out;
      position: absolute;
      display: block;
      top: 50vh;
      height: calc(${variable.value.bv0} - 1px);
      width: calc(${arrowWidth}/2);
      background: ${variable.colors.primaryColor};
    }
    &:after{
      transition: all .3s ease-in-out;
      content: " ";
      position: absolute;
      display: block;
      top: 50vh;
      width: ${variable.value.bv1};
      height: ${variable.value.bv1};
      border-top: 3px solid ${variable.colors.primaryColor};
      border-right: 3px solid ${variable.colors.primaryColor};
    }
    &:hover{
      &:before{
        width: ${arrowWidth};   
      }
    }
  }
  .prev{
    &__link{
      transform: rotate(-90deg);
    }
    &:before{
      left: ${arrowWidth};
    }
    &:after{
      transform: rotate(225deg);
      transform-origin: 85% 15%;
      right: 300px;
    }
    &:hover{
      &:after{
        right: -${variable.value.bv2};
      }
    }
  }
  .next{
    &__link{
      transform: rotate(90deg);
    }
    &:before{
      right: ${arrowWidth};
    }
    &:after{
      transform: rotate(45deg);
      transform-origin: 50% -70%;
      left: 300px;
    }
    &:hover{
      &:after{
        left: -${variable.value.bv2};
      }
    }
  }
`;

export default ArrowCSS;