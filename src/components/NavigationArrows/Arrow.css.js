import styled from 'styled-components';
import variable from "../../styles/Variables.css";

const ArrowCSS = styled.nav`
  .prev,
  .next{
  background: ${variable.colors.whiteColor};
  width: 6em;
  height:auto;
  text-align: center;
  z-index: 10;
  top: ${variable.value.defaultValue};
  bottom: ${variable.value.defaultValue};
    &__link{
      white-space: nowrap;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      top:50%;
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
      top: 50%;
      height: calc(${variable.value.bv0} - 1px);
      width: calc(${variable.value.defaultValue}/2);
      background: ${variable.colors.primaryColor};
    }
    &:after{
      transition: all .3s ease-in-out;
      content: " ";
      position: absolute;
      display: block;
      top: 50%;
      width: ${variable.value.bv1};
      height: ${variable.value.bv1};
      border-top: 3px solid ${variable.colors.primaryColor};
      border-right: 3px solid ${variable.colors.primaryColor};
    }
    &:hover{
      &:before{
        width: ${variable.value.defaultValue};   
      }
    }
  }
  .prev{
    &__link{
      transform: rotate(-90deg);
    }
    &:before{
      left: calc(${variable.value.defaultValue} - ${variable.value.bv2});
    }
    &:after{
      transform: rotate(225deg);
      transform-origin: 85% 15%;
      right: calc(${variable.value.defaultValue} + ${variable.value.bv3});
    }
    &:hover{
      &:after{
        right: 10px;
      }
    }
  }
  .next{
    &__link{
      transform: rotate(90deg);
    }
    &:before{
      right: calc(${variable.value.defaultValue} - ${variable.value.bv2});
    }
    &:after{
      transform: rotate(45deg);
      transform-origin: 50% -70%;
      left: calc(${variable.value.defaultValue} + ${variable.value.bv3});
    }
    &:hover{
      &:after{
        left: 10px;
      }
    }
  }
`;

export default ArrowCSS;