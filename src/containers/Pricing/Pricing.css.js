import styled from 'styled-components';
import variables from '../../styles/Variables.css';
import bgimg from '../../resources/img/pricing_background.jpg';
import brandingIcon from '../../resources/img/branding_icon.png';
import webAppIcon from '../../resources/img/webapp_icon.png';

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
        font: 500 ${variables.value.bv7}/${variables.value.bv6} ${variables.fonts.RobotoMedium};
        color: ${variables.colors.primaryColor};
        text-transform: capitalize;
      }
      &--img{
        height: 65px;
      }
      &--value{
        font:400 ${variables.value.bv4}/${variables.value.bv5} ${variables.fonts.Rufina};
        color: ${variables.colors.primaryColor};
        &__real:after{
          content: "";
          position: absolute;
          height: 2px;
          width: 50%;
          top:50%;
          left:25%;
          background: ${variables.colors.primaryColor};
        }
        &__discount{
          font-size: ${variables.value.bv8};
          line-height: ${variables.value.bv3};
        }
      }
      .h3{
        font: 400 ${variables.value.bv4}/${variables.value.bv5} ${variables.fonts.Roboto};
        color: ${variables.colors.primaryColor};
      }
      &--desc{
        p{
          font: 400 ${variables.value.bv3}/${variables.value.bv5} ${variables.fonts.Rufina};
          color: ${variables.colors.primaryColor};
        }
      }
      &.brandingPackage{
        .pricing__package--img{
          background: url(${brandingIcon}) center no-repeat;
          background-size: contain;
        }
      }
      &.webAppPackage{
        .pricing__package--img{
          background: url(${webAppIcon}) center no-repeat;   
          background-size: contain;       
        }
      }
    }
  }
`;

export default PricingCSS;