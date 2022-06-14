import { Form, FormItemProps, Button } from "antd";
import styled from "styled-components";

export const StyledFormItem = styled(Form.Item)`
  margin-bottom: "16px"; 
  .ant-form-item-label {
    padding: 0;
  }
  .ant-form-item-label > label {
    color: #071D41;
    height: auto;
  }
  .ant-form-item-label > label.ant-form-item-required::before {
    content: none;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 20px;
`;

export const StyledAddButton = styled(Button)`
    color: #FFFF;
    background: #071D41;
    border-color: #071D41;
    :hover{
        border-color: #071D41 !important;
    }
    :hover{
        background: #264474;
        color: #FFF;
    }
    :focus{
        color: #FFFF;
        background-color: #264474;
        border-color: #071D41 !important;
        box-shadow: 0 0 0.3em #071D41;
    }
    :active {
        color: #FFFF;
        background: #264474;
    }
`;