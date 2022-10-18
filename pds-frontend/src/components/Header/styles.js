import styled from 'styled-components';
import { Layout } from 'antd';
const { Header} = Layout;

export const StyledHeader = styled(Header)`
    background:  #071D41;
    padding: 0px;
    border-bottom: 1px solid #646d82 !important;
`;

export const StyledLogo = styled.div`
    width: 100px;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    height: 120px;
    cursor: pointer;
    float: end;
`;

export const StyledText = styled.span`
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 15px;
    color: #FFFFFF;
`;