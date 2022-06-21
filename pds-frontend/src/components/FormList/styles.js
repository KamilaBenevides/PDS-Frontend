import { Form, FormItemProps, Button } from "antd";
import styled from "styled-components";
import {
  DeleteFilled,
} from '@ant-design/icons';

export const StyledFormItem = styled(Form.Item)`
  margin-bottom: 16px; 
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

export const RemoveIcon = styled(DeleteFilled)`
  position: relative;
  top: 24px;
  margin: 0 18px;
  color: #071D41;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s;
`;

export const StyledButton = styled(Button)`
  margin-top: 20px;
`;

export const StyledAddButton = styled(Button)`

  text-align: left;
  font: normal normal bold 14px/16px Poppins;
  letter-spacing: 0px;
  color: #071D41;
  padding: 4px 0px
`;