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
`;