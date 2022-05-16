import FormGroupContainer from '../../components/FormGroupContainer/FormGroupContainer';
import DatePicker from '../../components/DatePicker/DatePicker';
import Select from '../../components/Select/Select';
import { StyledForm, StyledButton } from './styles';
import { Form, Alert } from 'antd';
import { useMutation, gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [docentes, setDocentes] = useState([]);

    const docqueryResult =  useQuery(gql`
    query ExampleQuery{
        docentes {
          nomeCompleto
          email
          id
        }
      }
    `)

    const CA = gql`
    mutation CustomCreateAluno($customCreateAlunoData2: FieldsCreateAluno!) {
        customCreateAluno(data: $customCreateAlunoData2) {
            nomeCompleto
            matricula
            dataIngresso
            dataLimite
            cpf
            emailInstitucional
            emailPessoal
            ativo
            orientador {
              id
            }
            coorientador {
                id
            }
        }
      }
    `;

    useEffect(() => {
        let docs = docqueryResult.data?.docentes ? docqueryResult.data.docentes : [];
        setDocentes(docs.map(e => {
            return {
                value: e.id,
                label: e.nomeCompleto
            }
        }))
    }, [docqueryResult])

    const [createAluno] = useMutation(CA);
    const [form] = Form.useForm();


    const formItems = [
        {
            label: "Nome completo",
            name: "nomeCompleto",
            col: 24,
            required: true
        },
        {
            label: "Matrícula",
            name: "matricula",
            col: 12,
            required: true
        },
        {
            label: "CPF",
            name: "cpf",
            col: 12,
            required: true
        },
        {
            label: "E-mail Institucional",
            name: "emailInstitucional",
            col: 24,
            required: true
        },
        {
            label: "E-mail Pessoal",
            name: "emailPessoal",
            col: 24,
            required: false
        },
        {
            label: "Orientador",
            name: "orientadorId",
            col: 24,
            required: true,
            formComponent: <Select options={docentes}/>
        },
        {
            label: "Co-orientador",
            name: "coorientadorId",
            col: 24,
            required: false,
            formComponent: <Select options={docentes}/>
        },
        {
            label: "Data de ingresso",
            name: "dataIngresso",
            col: 12,
            required: false,
            formComponent: <DatePicker/>
        }
    ];

    const submitButton = <Form.Item >
        <StyledButton type="primary" onClick={() => {form.submit()}}>
          Cadastrar
        </StyledButton>
    </Form.Item>

    const formatValues = e => {
        e["dataIngresso"] = e["dataIngresso"] ? e["dataIngresso"].format() : "";
        return e;
    }

    const navigate = useNavigate();

    const onFinish = (e) => {
        e = formatValues(e);
        console.log("e -> ", e);
        createAluno({
            variables: {
                customCreateAlunoData2: e
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
            description="Discente cadastrado com sucesso."
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

export default Register;