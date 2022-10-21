import { Header } from "antd/lib/layout/layout";
import styled from "styled-components";

export const StyledHeader = styled(Header)`
  display: flex;
  // align-items: center;
  flex-direction: row;
  justify-content: left;
  max-height: 100vh;
  background: #f0f2f5;
`;

export const StyledTitle = styled.p`
    // letter-spacing: 0px;
    font-size: 24px;
    color: #071D41;
    // text-overflow: ellipsis;
    // overflow: hidden;
    // align-content: bottom;
    font-weight: 600;
  `;

  export const StyledText = styled.p`
    letter-spacing: 0px;
    font-size: 16px;
    color: #576274;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: 200;
  `;

export const StyledSubHeaderText = styled.div`
  margin-top: 20px;
  // overflow: hidden;
  // line-height: 150%;
`;

export const TitleHeader = styled.p`
    color:  #071D41;
    font-size: 20px;
    font-weight: 600;
`