import { Form, FormItemProps } from "antd";
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