import {Select } from "antd";

import styled from "styled-components";

export const StyledSelect = styled(Select)`
    && .ant-select-selector {
        border-radius: 8px;
        border: 1px solid #CECFD0;
        :hover{
            border-color: #071D41 !important;
            }
        :focus{
            border-color: #071D41 !important;
            box-shadow: 0 0 0.3em #071D41;
        }
    }
`;

