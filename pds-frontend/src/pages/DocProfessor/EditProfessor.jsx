import FormGroupContainer from '../../components/FormGroupContainer/FormGroupContainer';
import { StyledForm, StyledButton } from '../Register/styles';
import { Form, Alert } from 'antd';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, gql } from '@apollo/client';


const EditProfessor = () => {

    const { id } = useParams();

    const { loading, error, data } = useQuery(gql`
    query DocQuery($where: DocenteWhereUniqueInput!){
        docente(where: $where){
          nomeCompleto
          email
          id
        }
      }
    `, { variables: { where: { id: parseInt(id) }}}
    );   
    
    const UD = gql`
    mutation UpdateDocente($data: DocenteUpdateInput!, $where: DocenteWhereUniqueInput!) {
        updateDocente(data: $data, where: $where) {
          nomeCompleto
          email
        }
      }
    `;

    const [updateDocente] = useMutation(UD);
    const [form] = Form.useForm();

    useEffect(() => {
        let doc = data?.docente ? data.docente : {email: "", nomeCompleto:""};
        form.setFieldsValue({
            nomeCompleto: doc.nomeCompleto,
            email: doc.email,
        });
    }, [data]);

    let formItems = [
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
          Editar
        </StyledButton>
    </Form.Item>

    const navigate = useNavigate();

    const onFinish = (e) => {
        console.log("e -> ", e);
        updateDocente({
            variables: {
                data: { nomeCompleto: { set: e['nomeCompleto'] },
                        email: { set: e['email'] }},
                where: { id: data.docente.id }
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
            description="Docente editado com sucesso."
            type="success"
            showIcon
            closable
        />
    } else if (erro) {
        alertSucesso = <Alert
            message="Erro!"
            description="Ocorreu um erro ao editar o discente."
            type="error"
            showIcon
            closable
        />
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

export default EditProfessor;