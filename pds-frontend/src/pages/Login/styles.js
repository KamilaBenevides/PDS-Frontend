import styled from 'styled-components'
import { Button } from 'antd';

export const FormWrapper = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10% 2rem;
`;

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-content: center;
    justify-content: center;
`;

export const Title = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 900;
    font-size: 50px;
    line-height: 75px;
    text-align: center;
    margin-bottom: 0px;
`;

export const Subtitle = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    text-align: center;
`;

export const MainButton = styled(Button)`
    width: 30%;
`;