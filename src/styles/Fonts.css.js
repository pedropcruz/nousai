import variables from './Variables.css';

const version = '?38199864';

const Fonts = `
    @font-face {
      font-family: ${variables.fonts.iconFonts};
      src: url('${variables.path.icons}.eot${version}');
      src: url('${variables.path.icons}.eot${version}#iefix') format('embedded-opentype'),
           url('${variables.path.icons}.woff2${version}') format('woff2'),
           url('${variables.path.icons}.woff${version}') format('woff'),
           url('${variables.path.icons}.ttf${version}') format('truetype'),
           url('${variables.path.icons}.svg${version}#fontello') format('svg');
      font-weight: normal;
      font-style: normal;
    }
    /* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */
    /* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */
    /*
    @media screen and (-webkit-min-device-pixel-ratio:0) {
      @font-face {
        font-family: ${variables.fonts.iconFonts};
        src: url('${variables.path.icons}.svg${version}#fontello') format('svg');
      }
    }
    */
     
     [class^="icon-"]:before, [class*=" icon-"]:before {
      font-family: ${variables.fonts.iconFonts};
      font-style: normal;
      font-weight: normal;
      speak: none;
     
      display: inline-block;
      text-decoration: inherit;
      width: 1em;
      margin-right: .2em;
      text-align: center;
      /* opacity: .8; */
     
      /* For safety - reset parent styles, that can break glyph codes*/
      font-variant: normal;
      text-transform: none;
     
      /* fix buttons height, for twitter bootstrap */
      line-height: 1em;
     
      /* Animation center compensation - margins should be symmetric */
      /* remove if not needed */
      margin-left: .2em;
     
      /* you can be more comfortable with increased icons size */
      /* font-size: 120%; */
     
      /* Font smoothing. That was taken from TWBS */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
     
      /* Uncomment for 3D effect */
      /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
    }
     
    .icon-github:before { content: '\\f09b'; } /* '' */
    .icon-gplus:before { content: '\\f0d5'; } /* '' */
    .icon-instagram:before { content: '\\f16d'; } /* '' */
    .icon-twitter:before { content: '\\f309'; } /* '' */
    .icon-facebook:before { content: '\\f30e'; } /* '' */
    .icon-linkedin:before { content: '\\f31a'; } /* '' */
    .icon-dribbble:before { content: '\\f31b'; } /* '' */
    .icon-behance:before { content: '\\f34e'; } /* '' */
`;

export default Fonts;