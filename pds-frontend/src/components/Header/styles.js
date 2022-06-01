import styled from 'styled-components';
import { Layout } from 'antd';
const { Header} = Layout;

export const StyledHeader = styled(Header)`
    background:  #071D41;
    height: 15%;
    padding: 0px;
    border-bottom: 1px solid #646d82 !important;
`;

export const StyledLogo = styled.div`
    width: 250px;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    min-height: 150px;
    cursor: pointer;
`;

export const StyledText = styled.span`
    font-family: Poppins;
    font-style: normal;
    font-weight: 900;
    // font-size: 2vw;
    font-size: 4vh;
    line-height: 35px;
    color: #FFFFFF;
`;