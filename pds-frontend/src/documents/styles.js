
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

export const Text = styled.p`
    letter-spacing: 0px;
    font-size: 14px;
    color: #071D41;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin: 0 0 0 0;
    font-weight: 600; 
`; 

export const StyledButton = styled(Button)`

`;