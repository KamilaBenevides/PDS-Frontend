import { Header } from "antd/lib/layout/layout";
import styled from "styled-components";

export const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  height: 50px;
  max-height: 50px;
  background: #f0f2f5;
  padding: 50px 0px 10px 0px;
`;

export const StyledTitle = styled.p`
    letter-spacing: 0px;
    font-size: 20px;
    color: #071D41;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin: 0 0 0 0;
    font-weight: 600;
  `;

  export const StyledText = styled.p`
    letter-spacing: 0px;
    font-size: 16px;
    color: #2F4F4F;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin: 0 0 10 0;
    font-weight: 300;
  `;

export const StyledSubHeaderText = styled.div`
  overflow: hidden;
  line-height: 150%;
`;