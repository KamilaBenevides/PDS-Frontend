import styled from 'styled-components';
import { Layout } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

export const StyledHeader = styled(Header)`
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
`;

export const StyledText = styled.span`
    font-family: Poppins;
    font-style: normal;
    font-weight: 900;
    font-size: 35px;
    line-height: 52px;
    color: #FFFFFF;
    
`;