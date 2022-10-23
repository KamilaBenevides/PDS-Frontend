import { Button, Select, Col } from 'antd';
import styled from "styled-components";

export const Container = styled.div`
    padding: 3%;
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

export const StyledSelect = styled(Select)`
    width: 100%;
`;

export const RowSearch = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

export const ButtonNewRegister = styled(Button)`
    background: #071D41;
    color: #FFF
`;
export const Subtext = styled.p`
    font-size: 16px;
`;
export const BtnClose = styled.div`
    display: flex;
    justify-content: right;
    padding: 10px 0 0 0;
`;