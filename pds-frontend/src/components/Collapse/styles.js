import { Collapse, Button } from 'antd';
import styled from 'styled-components';
const { Panel } = Collapse;

export const StyledCollapse = styled(Collapse)`
    .ant-collapse-item-disabled > .ant-collapse-header {
        cursor: pointer!important;
    }
`;

export const StyledPanel = styled(Panel)`

`;

export const StyledNameText = styled.span`
    color: #071D41;  
    font: normal normal bold 18px/19px Poppins;
    letter-spacing: -0.21px;
`;

export const StyledText = styled.span`
    color: #071D41;  
    font: normal normal normal 18px/19px Poppins;
    letter-spacing: -0.21px;
`;
export const StyledStatusName = styled.span`
    color: #2EC615
`;

export const StyledContent = styled.div`

`;

export const StyledButton = styled(Button)`
    width: 100%;
    border: none;
    marging-top: 5px;
`;