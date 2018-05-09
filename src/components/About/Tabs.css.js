import styled from 'styled-components';
import variable from "../../styles/Variables.css";

const TabsCSS = styled.div`
  & {
    height: inherit;
    overflow: hidden;
  }
  .tabs{
    &__content{
      margin: 0 2em;
      @media ${variable.media.sm}{
        margin: 0 6em;      
      }
      &--desc{
        font: 400 ${variable.value.bv4}/${variable.value.bv6} ${variable.fonts.RobotoMedium};
        color: ${variable.colors.primaryColor};
        @media ${variable.media.lg}{
          font: 400 ${variable.value.bv7}/${variable.value.bv9} ${variable.fonts.RobotoMedium};
        }
        &__items{
          position: relative;
        }
      }
    }
    &__labels{
      text-align: right;
      li{
        a{
          cursor: pointer;
          font: 400 ${variable.value.bv3}/${variable.value.bv9} ${variable.fonts.Rufina};
          color: ${variable.colors.primaryColor};
          &:after{
            content: '';
            display: inline-block;
            vertical-align: middle;
            width: 8px;
            height: 8px;
            margin:0 ${variable.value.bv6} 0 ${variable.value.bv2};
            border-radius: 50%;
            border: ${variable.value.bv0} solid ${variable.colors.primaryColor};
          }
        }
        &.active{
          a:after{
            background: ${variable.colors.primaryColor};
          }
        }
      }
    }
  }
`;

export default TabsCSS;