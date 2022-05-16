import FormGroupContainer from '../../components/FormGroupContainer/FormGroupContainer';
import DatePicker from '../../components/DatePicker/DatePicker';
import Select from '../../components/Select/Select';
import { StyledForm, StyledButton } from '../Register/styles';
import { Form, Alert } from 'antd';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, gql } from '@apollo/client';
import moment from 'moment';


const EditRegister = () => {

    const { id } = useParams();

    const [docentes, setDocentes] = useState([]);

    const docQuery = useQuery(gql`
    query ExampleQuery{
        docentes {
          nomeCompleto
          email
          id
        }
      }
    `);

    useEffect(() => {
        let docs = docQuery.data?.docentes ? docQuery.data.docentes : [];
        setDocentes(docs.map(e => {
            return {
                value: e.id,
                label: e.nomeCompleto
            }
        }))
    }, [docQuery]);

    const alunoQuery = useQuery(gql`
    query GetAluno($where: AlunoWhereUniqueInput!) {
        aluno(where: $where) {
            id
            nomeCompleto
            matricula
            dataIngresso
            dataLimite
            cpf
            emailInstitucional
            emailPessoal
            ativo
            orientadorId
            coorientadorId
            orientador {
              email
              id
              nomeCompleto
            }
            coorientador {
                id
                email
                nomeCompleto
            }
          }
    }`, { variables: { where: { id: parseInt(id) }}}
    );
    
    const UA = gql`
    mutation UpdateAluno($data: AlunoUpdateInput!, $where: AlunoWhereUniqueInput!) {
        updateAluno(data: $data, where: $where) {
            nomeCompleto
            matricula
            dataIngresso
            dataLimite
            cpf
            emailInstitucional
            emailPessoal
            ativo
            orientadorId
            coorientadorId
            orientador {
              id
            }
            coorientador {
                id
            }
        }
      }
    `;

    const [updateAluno] = useMutation(UA);
    const [form] = Form.useForm();

    useEffect(() => {
        let doc = alunoQuery.data?.aluno ? alunoQuery.data.aluno : {matricula: "", emailPessoal: "", nomeCompleto:"", cpf:"", orientadorId:"", coorientadorId:"", dataIngresso:""};
        form.setFieldsValue({
            nomeCompleto: doc.nomeCompleto,
            emailPessoal: doc.emailPessoal,
            matricula: doc.matricula,
            cpf: doc.cpf,
            dataIngresso: moment(doc.dataIngresso),
            orientador: doc.orientadorId,
            coorientador: doc.coorientadorId
        });
    }, [alunoQuery]);

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
            formComponent: <Select options={[{ value: 0, label: "..."}].concat(docentes)}/>
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
          Editar
        </StyledButton>
    </Form.Item>

    const navigate = useNavigate();

    const onFinish = (e) => {
        console.log("e -> ", e);
        updateAluno({
            variables: {
                data: {
                    nomeCompleto: { set: e['nomeCompleto'] },
                    emailPessoal: { set: e['emailPessoal'] },
                    matricula: { set: e['matricula'] },
                    cpf: { set: e['cpf'] },
                    dataIngresso: { set: e['dataIngresso'].format() },
                    orientador: { connect: { id: e['orientador'] } },
                    coorientador: e['coorientador'] ? { connect: { id: e['coorientador'] } } : { disconnect: true },
                },
                where: { id: alunoQuery.data.aluno.id }
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
            description="Aluno editado com sucesso."
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

export default EditRegister;