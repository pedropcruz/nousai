import styled from 'styled-components';

const ArrowCSS = styled.nav`
  a{
    text-decoration: none;
    position:fixed;
    top:0;
    bottom:0;
    height: 100%;
    &.prev{
      left:0; 
    }
    &.next{
      right:0;
    }
  }

`;

export default ArrowCSS;