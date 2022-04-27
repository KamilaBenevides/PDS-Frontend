import styled from "styled-components";
import { DatePicker } from "antd";


export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #CECFD0;

  background: #ffffff 0% 0% no-repeat padding-box;

  background: #FFFFFF 0% 0% no-repeat padding-box;  
  :hover{
    cursor: pointer;
    border-color: #071D41 !important;
  }
  :focus{
    border-color: #071D41 !important;
    box-shadow: 0 0 0.3em #071D41;
  }
  input::placeholder,
  svg {
    color: #cecfd0;
  }
`;