import React from 'react'
import { gql, useQuery } from "@apollo/client";
import { StyledForm, Container, FormWrapper, Title, Subtitle, MainButton } from './styles';
import { Form } from 'antd'
import Input from '../../components/Input/Input';
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

    React.useEffect(() => {
        console.table({data, loading, error})
    }, [data, loading, error])


    const loginItems = [
      {
        label: "Usuário",
        name: "username",
        col: 24,
        required: true
      },
      {
        label: "Senha",
        name: "password",
        col: 24,
        required: true
      },
    ];



    return (
            <Container>
              <FormWrapper>
                <Title>Alertas PPGI</Title>
                <Subtitle>Facilitando o SIGAA</Subtitle>
                <Form>
                  <FormGroupContainer items={loginItems}/>
                </Form>
                <MainButton>
                    Entrar
                </MainButton>
              </FormWrapper>
            </Container>
            
    )
}

export default Login;