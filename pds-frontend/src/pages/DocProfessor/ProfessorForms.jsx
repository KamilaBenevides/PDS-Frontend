import FormGroupContainer from '../../components/FormGroupContainer/FormGroupContainer';
import { StyledForm, StyledButton } from '../Register/styles';
import { Form, Alert } from 'antd';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from '@apollo/client';


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
            required: true
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
        });
    }

    const [sucesso, setSucesso] = useState(false);

    let alertSucesso = <></>;
    if (sucesso) {
        alertSucesso = <Alert
            message="Sucesso"
            description="Docente cadastrado com sucesso."
            type="success"
            showIcon
            closable
        />
    } else {
        alertSucesso = <></>
    }

    return (
        <>
            <StyledForm form={form} layout="vertical" onFinish={e => onFinish(e)}>
                {alertSucesso}
                <FormGroupContainer items={formItems}/>
                {submitButton}
            </StyledForm>
        </>
    )
}

export default ProfessorForms;