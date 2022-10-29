import styled from 'styled-components';
import { Layout } from 'antd';
const { Header} = Layout;

export const StyledHeader = styled(Header)`
    background:  #071D41;
    padding: 0px;
    display: flex;
    border-bottom: 1px solid #646d82 !important;
    align-items: center;
`;

export const StyledLogo = styled.div`
    // width: 200px;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    // padding-top: 20px;
    // height: 120px;
    cursor: pointer;
    float: end;
`;

export const StyledText = styled.span`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    // line-height: 30px;
    color: #FFFFFF;
`;