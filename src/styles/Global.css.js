import 'basscss/css/basscss.min.css';
import {injectGlobal} from 'styled-components';
import variable from './Variables.css';
import './reset.css';
import Fonts from './Fonts.css';

function fontFace(name, fontDir, src) {
    return `
       @font-face {
          font-family: '${name}';
          src: url('../fonts/${fontDir + '/' + src}.ttf')  format('truetype');
          font-weight: normal;
          font-style: normal;
        }
    `;
}

injectGlobal`
  ${fontFace("Roboto", "Roboto", "Roboto-Regular")};
  ${fontFace("RobotoBold", "Roboto", "Roboto-Bold")};
  ${fontFace("RobotoMedium", "Roboto", "Roboto-Medium")};
  ${fontFace("Rufina", "Rufina", "Rufina-Regular")};
  ${fontFace("RufinaBold", "Rufina", "Rufina-Bold")};
  
  ${Fonts}
  
  html{
    font-family: ${variable.fonts.Roboto};
    background: ${variable.colors.whiteColor};
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  
  .Modal{
    position: relative;
    padding: 3em 2rem;
    &:focus{
      outline: 0;
    }
    &--Overlay{
      position: fixed;
      top:0;
      right:0;
      left:0;
      bottom:0;
      background: ${variable.colors.primaryColor};
      z-index: 20;
      button{
        display: block;
        margin-left: auto;
        position: relative;
        outline: 0;
        border: 0;
        background: transparent;
        text-indent: -9999px;
        width: ${variable.value.bv7};
        height: ${variable.value.bv7};
        &:hover{
          cursor: pointer;
        }
        &:before,
        &:after{
          content: "";
          position: absolute;
          display: block;
          top:0;
          right:0;
          width: ${variable.value.bv7};
          height: 3px;
          background: ${variable.colors.whiteColor};
        }
        &:before{
          transform: rotate(45deg);
        }
        &:after{
          transform: rotate(-45deg);
        }
      }
    }
    &--navLinks{
      li{
        font:900 3em/2em ${variable.fonts.RufinaBold};
        color: ${variable.colors.whiteColor};
        overflow: hidden;
        padding-left: 12vw;
        a{
          position: relative;
          color: inherit;
          text-decoration: none;
          &:after{
            transition: width .3s ease-in-out;
            position: absolute;
            content: "";
            width: 0;
            height: 3px;
            background: ${variable.colors.whiteColor};
            left: 0;
            bottom: 0;
          }
          &:hover{
            &:after{
              width: 100%;
            }
          }
        }
      }
    }
  }
  
  
  .nousai_app{
    &--section{
      top: ${variable.value.defaultValue};
      bottom:${variable.value.defaultValue};
      right:${variable.value.bv3};
      left:${variable.value.bv3};
      @media ${variable.media.md}{
        right:${variable.value.defaultValue};
        left: ${variable.value.defaultValue};
      }
    }
  }
`;