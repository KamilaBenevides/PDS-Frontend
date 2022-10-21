import styled from 'styled-components'
import { Layout, Card } from 'antd';

const { Content } = Layout;

export const StyledLayout = styled(Layout)`
    height: 100vh;
    width: 100%;
`;

export const StyledContent = styled(Content)`
    overflow: auto;
`;

export const StyleContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
`;