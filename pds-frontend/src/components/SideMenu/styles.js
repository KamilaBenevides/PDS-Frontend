import styled from 'styled-components';

import { Layout, Menu } from 'antd';
const { Sider } = Layout;

export const StyledSideMenu = styled(Sider)`
    background: #071D41;
    .ant-menu-title-content {
        color: white;
    }
    
`;

export const StyledMenu = styled(Menu)`
    background:  #071D41;
    border: none;
    flex-grow : 1;
    .ant-menu-item-active {
        background-color: #344664;
        }
    .ant-menu-submenu-open {
        ::after {
            opacity: 0;
          }
    }

    && {
        .ant-menu-item-selected {
          background:  #264474;
          span {
            font-weight: 600;
            color: #ffffff;
          }
          ::after {
            opacity: 0;
          }
        }
      }
    
      .anticon-caret-down {
        // color: white;
        font-size: 12px;
        margin-left: 14px;
      }
      .ant-menu-sub{
        background: #071D41;
    }
`;

export const StyledText = styled.span`
    // color: white;
`;