
import { TimePicker, Button } from 'antd';
import styled from "styled-components";


export const Container = styled.div`
    padding: 3%;
`;

export const StyledTimePicker = styled(TimePicker)`
    width: 100%;
    border-radius: 8px;
    border-radius: 8px;
    border: 1px solid #CECFD0;
    :hover{
        border-color: #071D41 !important;
        }
    :focus{
        border-color: #071D41 !important;
        box-shadow: 0 0 0.3em #071D41;
    }
    
`;

export const StyledButton = styled(Button)`

`;