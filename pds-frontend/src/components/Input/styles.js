import { Input } from "antd";
import styled from "styled-components";

export const StyledInput = styled(Input)`
    border-radius: 8px;
    border: 1px solid #CECFD0;
    .ant-input-suffix {
    color: #cecfd0;
    }
    ::placeholder {
    color: #cecfd0;
    }
    :hover{
    border-color: #071D41 !important;
    }
    :focus{
    border-color: #071D41 !important;
    box-shadow: 0 0 0.3em #071D41;
    }
`;