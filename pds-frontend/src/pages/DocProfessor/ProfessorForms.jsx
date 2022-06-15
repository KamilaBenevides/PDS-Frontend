import FormGroupContainer from '../../components/FormGroupContainer/FormGroupContainer';
import { StyledForm, StyledButton } from '../Register/styles';
import { Form, Alert } from 'antd';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from '@apollo/client';
import Card from '../../components/Card/Card';
import SubHeader from '../../components/SubHeader/SubHeader'

const ProfessorForms = () => {

    const CD = gql`
    mutation CreateDocente($data: DocenteCreateInput!) {
        createDocente(data: $data) {
            nomeCompleto
            email
        }
      }
    `;

    const [createDocente] = useMutation(CD);
    const [form] = Form.useForm();

    const formItems = [
        {
            label: "Nome completo",
            name: "nomeCompleto",
            col: 24,
            required: true
        },
        {
            label: "E-mail",
            name: "email",
            col: 24,
            required: true,
            rules: [
                {
                  type: 'email',
                  message: 'Insira um e-mail em formato válido',
                },
            ]
        },
   ];

    const submitButton = <Form.Item >
        <StyledButton type="primary" onClick={() => {form.submit()}}>
          Cadastrar
        </StyledButton>
    </Form.Item>

    const navigate = useNavigate();

    const onFinish = (e) => {
        console.log("e -> ", e);
        createDocente({
            variables: {
                data: e
            }
        }).then(() => {
            setSucesso(true);
            setTimeout(() => navigate('/dashboard/geral'), 3000);
        }).catch(() => {
            setErro(true);
        });
    }

    const [sucesso, setSucesso] = useState(false);
    const [erro, setErro] = useState(false);

    let alertSucesso = <></>;
    if (sucesso) {
        alertSucesso = <Alert
            message="Sucesso"
            description="Docente cadastrado com sucesso."
            type="success"
            showIcon
            closable
        />
    } else if (erro) {
        alertSucesso = <Alert
            message="Erro!"
            description="Ocorreu um erro ao cadastrar o docente."
            type="error"
            showIcon
            closable
        />
    }

    return (
        <>
        <SubHeader title={'Novo Docente'}/>
        <Card>
            <StyledForm form={form} layout="vertical" onFinish={e => onFinish(e)}>
                {alertSucesso}
                <FormGroupContainer items={formItems}/>
                {submitButton}
            </StyledForm>
        </Card>
        </>
    )
}

export default ProfessorForms;