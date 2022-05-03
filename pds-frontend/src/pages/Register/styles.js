import { Form, Button } from "antd";
import styled from "styled-components";

export const StyledForm = styled(Form)`
    padding: 3%;
`;

export const StyledButton = styled(Button)`
    background: #071D41;
    border-color: #071D41;
    :hover{
        border-color: #071D41 !important;
    }
    :hover{
        background: #264474;
    }
    :focus{
        
        border-color: #071D41 !important;
        box-shadow: 0 0 0.3em #071D41;
    }
`;