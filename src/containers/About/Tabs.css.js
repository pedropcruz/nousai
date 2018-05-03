import styled from 'styled-components';
import variable from "../../styles/Variables.css";

const TabsCSS = styled.div`
  & {
    height: inherit;
  }
  .tabs{
    &__content{
      
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