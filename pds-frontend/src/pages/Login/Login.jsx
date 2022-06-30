import React from 'react'
import { useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { TOKEN_KEY } from '../../api/apollo';
import { Container, 
  FormWrapper, 
  Title,
  Subtitle, 
  MainButton, 
  InputForm } from './styles';
import { Form, message } from 'antd'
import FormGroupContainer from '../../components/FormGroupContainer/FormGroupContainer';
import { useAuth } from '../Login/AuthProvider';

const Login = () => {
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const LOGIN = gql`
    mutation CustomLogin($customLoginData2: FieldsLogin!) {
        customLogin(data: $customLoginData2) {
            id
            token
            expiresIn
        }
        }
    `;

  const [customLogin, { data, loading, error }] = useMutation(LOGIN);

  const auth = useAuth();
  const signIn = async (signInData) => {

    customLogin({
      variables: {
        customLoginData2: signInData,
      }
    })
    .then(res => {
      localStorage.setItem(TOKEN_KEY, res.data.customLogin.token);
      auth.signIn(res.data.customLogin.token);
      navigate('/dashboard');
    }, error => {
      message.error({
        content: "Erro ao realizar Login",
        style: { marginTop: "85vh" },
      });
      console.log("res error ", error);
    });
  
    
  };

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
      formComponent: <InputForm
      placeholder="******"
      type={"password"}/>
    },
  ];

  const onSubmit = () => {
    form.submit();
  }

  const onFinish = (e) => {
    signIn(e);
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