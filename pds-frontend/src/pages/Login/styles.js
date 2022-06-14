import styled from 'styled-components'
import { Button, Input } from 'antd';

export const FormWrapper = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10% 2rem;
    .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input {
        background: none!important;
    }
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
    color: #071D41;
    :hover{
        border-color: #FFF !important;
        box-shadow: 0 0 0.3em #FFF;
        color: #071D41;
        background: #DFDEDE;
        // background: #F0F0F0;
    }
    :focus{
        border-color: #FFF !important;
        box-shadow: 0 0 0.3em #FFF;
        color: #071D41;
        background: #DFDEDE;
    }
`;

export const InputForm = styled(Input)`
    border: 1px solid #FFF;
    border-radius: 4px;
    height: 50px;
    background: none;
    color: #FFF;
    
    


    .ant-input-suffix {
        color: #FFF;
    }
    ::placeholder {
        color: #FFF;
    }
    &:hover{
        border-color: #FFF !important;
        box-shadow: 0 0 0.5em #FFF;
        background: none;
    }
    :focus{
        border: 4px solid #FFF;
    }
`;