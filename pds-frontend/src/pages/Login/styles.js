import styled from 'styled-components'
import { Button, Input } from 'antd';

export const FormWrapper = styled.div`
    width: 40%;
    height: 50%;
    background-color: #DFDEDE;
    display: flex;
    align-content: center;
    flex-direction: column;
    justify-content: center;
    padding: 10% 3rem;
    border-radius: 5px;
    .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input {
        background: none!important;
    }
`;

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
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
    color: #071D41;
    padding: 0 0 40px 0;
`;

export const Subtitle = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    text-align: center;
    color: #071D41;
`;

export const MainButton = styled(Button)`
    width: 100%;
    margin-left: auto; 
    margin-right: auto;
    color: #FFF;
    background: #071D41;
    :hover{
        border-color: #FFF !important;
        box-shadow: 0 0 0.3em #FFF;
        color: #FFF;
        background: #071D41;
        // background: #071D41;
    }
    :focus{
        border-color: #071D41 !important;
        box-shadow: 0 0 0.3em #FFF;
        color:  #071D41;
        background: #DFDEDE;
    }
`;

export const InputForm = styled(Input)`
    border: 1px solid #071D41;
    border-radius: 4px;
    height: 50px;
    background: none;
    color: #071D41;
    .ant-input-suffix {
        color: #FFF;
    }
    ::placeholder {
        color: #FFF;
    }
    &:hover{
        border-color: #DFDEDE !important;
        box-shadow: 0 0 0.5em #FFF;
        background: none;
    }
    :focus{
        border: 4px solid #DFDEDE;
    }
`;

export const RowIcon = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: center;
`