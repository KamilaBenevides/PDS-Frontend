import styled from 'styled-components'
import { Button, Input } from 'antd';

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
    height: 100vh;
    align-content: center;
    justify-content: center;
    background: #071D41;
    padding-bottom: 0px;
`;

export const Title = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 900;
    font-size: 50px;
    line-height: 75px;
    text-align: center;
    margin-bottom: 0px;
    color: #FFF;
`;

export const Subtitle = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    text-align: center;
    color: #FFF;
`;

export const MainButton = styled(Button)`
    width: 30%;
    margin-left: auto; 
    margin-right: 0;
`;

export const InputForm = styled(Input)`
    border-radius: 8px;
    border: 1px solid #CECFD0;
`;