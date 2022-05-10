import FormGroupContainer from '../../components/FormGroupContainer/FormGroupContainer';
import DatePicker from '../../components/DatePicker/DatePicker';
import Select from '../../components/Select/Select';
import { StyledForm, StyledButton } from './styles';
import { Form } from 'antd';
import { useMutation, gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

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
    mutation CreateAluno($data: AlunoCreateInput!) {
        createAluno(data: $data) {
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
            label: "Name completo",
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
            label: "E-mail",
            name: "emailPessoal",
            col: 24,
            required: true
        },
        {
            label: "Orientador",
            name: "orientador",
            col: 24,
            required: true,
            formComponent: <Select options={docentes}/>
        },
        {
            label: "Co-orientador",
            name: "coorientador",
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
        e["ativo"] = true;
        e["dataLimite"] = "2024-12-04"
        e["orientador"] = {
            "connect": {"id": e["orientador"]}
        }
        e["coorientador"] = {
            "connect": {"id": e["coorientador"]}
        }
        return e;
    }

    const onFinish = (e) => {
        e = formatValues(e);
        console.log("e -> ", e);
        createAluno({
            variables: {
                data: e
              }
        });
    }

    return (
        <>
            <StyledForm form={form} layout="vertical" onFinish={e => onFinish(e)}>
                <FormGroupContainer items={formItems}/>
                {submitButton}
            </StyledForm>
        </>
    )
}

export default Register;