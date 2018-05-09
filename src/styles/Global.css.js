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
  .title{
    font: 400 ${variable.value.bv5}/${variable.value.bv6} ${variable.fonts.Rufina};
    color: ${variable.colors.primaryColor};
    @media ${variable.media.sm}{
      font: 400 ${variable.value.bv8}/${variable.value.bv11} ${variable.fonts.Rufina};
    }
    span{
    position: relative;
    display: inline-block;
    overflow: hidden;
    padding-right: 2em;
    margin: 1.2em 0 1em 0;
      &:after{
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background: ${variable.colors.primaryColor};
        top: 50%;
        left: 50%;
      }
    }
  }
  
  .btn{
    position: relative;
    text-transform: uppercase;
    font: 900 ${variable.value.bv5}/${variable.value.bv6} ${variable.fonts.RobotoBold};
    color: ${variable.colors.primaryColor};
    display: block;
    text-decoration: none;
    opacity: 1;
    transition: opacity .3s ease-in-out;
    &:after,
    &:before{
      content: "";
      position: absolute;
      top:50%;
      width: 25%;
      height: 2px;
      background: ${variable.colors.primaryColor};
    }
    &:before{
      left:0;
    }
    &:after{
      right:0;
    }
    &:hover{
      opacity: .5;
    }
  }
`;