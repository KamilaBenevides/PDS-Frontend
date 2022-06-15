import { Header } from "antd/lib/layout/layout";
import styled from "styled-components";

export const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 74px;
  max-height: 74px;
  background: #f0f2f5;
  padding: 0 24px;
`;

export const StyledTitle = styled.p`
    letter-spacing: 0px;
    font-size: 18px;
    color: #071D41;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin: 0 0 0 0;
    font-weight: 600;
  `;

export const StyledSubHeaderText = styled.div`
  overflow: hidden;
  line-height: 150%;
`;