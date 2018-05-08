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
      &--title{
        font: 400 ${variable.value.bv5}/${variable.value.bv6} ${variable.fonts.Rufina};
        color: ${variable.colors.primaryColor};
        margin: 1.2em 0 1em 0;
        @media ${variable.media.sm}{
          font: 400 ${variable.value.bv10}/${variable.value.bv11} ${variable.fonts.Rufina};
        }
        span{
        position: relative;
        display: inline-block;
        overflow: hidden;
        padding-right: 2em;
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