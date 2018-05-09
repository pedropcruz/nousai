import styled from 'styled-components';
import variables from '../../styles/Variables.css';
import bgimg from '../../resources/img/pricing_background.jpg';

const PricingCSS = styled.section`
  position: relative;
  height: 100%;
  @media ${variables.media.md}{
    background: url(${bgimg}) no-repeat center;
    background-size: cover;
  }
  .content{
    margin:0 2em;
    @media ${variables.media.sm}{
      margin:0 6em;
    }
    .pricing__package{
      &--title{
        
      }
    }
  }
`;

export default PricingCSS;