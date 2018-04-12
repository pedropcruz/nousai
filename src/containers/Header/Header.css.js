import styled from 'styled-components';
import variable from "../../styles/Variables.css";
import Logo from '../../logo.svg';
import LogoDesktop from '../../logoDesktop.svg';


const HeaderCSS = styled.header`
  width: calc(100% - 2em);
  align-items: center;
  height: 64px;
  background: ${variable.colors.whiteColor};
  .nousai__header{
    &--logo{
      width: ${variable.value.bv11};
      height: ${variable.value.bv11};
      background: url(${Logo}) center center no-repeat;
        @media ${variable.media.sm}{
          width: 175px;
          height: 100%;
          background: url(${LogoDesktop}) center center no-repeat;
        }
      }
    &--menu{
      width: ${variable.value.bv7};
      height: ${variable.value.bv3};
      border:0;
      padding:0;
      background: 0 0;
      cursor: pointer;
      &:focus, &:active{       
        outline: 0;            
      }                        
      span {
        position: absolute;
        display: block;
        width: 100%;
        height: 4px;
        left:0;
        background: ${variable.colors.primaryColor};
        &:first-child{
          top:0;
        }
        &:last-child{
          bottom: 0;
        }
      }
    }
  }
`;

export default HeaderCSS;