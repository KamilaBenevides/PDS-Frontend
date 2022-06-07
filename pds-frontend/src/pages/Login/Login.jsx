import React from 'react'
import { gql, useQuery } from "@apollo/client";
import { Container, 
  FormWrapper, 
  Title,
  Subtitle, 
  MainButton, 
  InputForm } from './styles';
import { Form } from 'antd'
import FormGroupContainer from '../../components/FormGroupContainer/FormGroupContainer';

const QUERY_ALUNOS = gql`
  query alunosGET {
    alunos {
      cpf
      nomeCompleto
      id
      ativo
      dataIngresso
      dataLimite
      emailInstitucional
      emailPessoal
      matricula
      orientador {
        nomeCompleto
      }
    }
  }
`;

const Login = () => {

    const {data, loading, error} = useQuery(QUERY_ALUNOS, {fetchPolicy: "network-only"});
    const [form] = Form.useForm();

    React.useEffect(() => {
        console.table({data, loading, error})
    }, [data, loading, error])


    const loginItems = [
      {
        label: "Usuário",
        name: "username",
        col: 24,
        required: true,
        formComponent: <InputForm />
      },
      {
        label: "Senha",
        name: "password",
        col: 24,
        required: true,
        formComponent: <InputForm />
      },
    ];

    const onSubmit = () => {
      form.submit();
    }

    const onFinish = (e) => {
      console.log("e", e);
    }


    return (
            <Container>
              <FormWrapper>
                <Title>Alertas PPGI</Title>
                <Subtitle>Facilitando o SIGAA</Subtitle>
                <Form form={form} layout="vertical" onFinish={e => onFinish(e)}>
                  <FormGroupContainer items={loginItems}/>
                </Form>
                <MainButton onClick={onSubmit}>
                    Entrar
                </MainButton>
              </FormWrapper>
            </Container>
            
    )
}

export default Login;