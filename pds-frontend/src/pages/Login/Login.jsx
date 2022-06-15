import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { gql, useQuery, useMutation } from "@apollo/client";
import { TOKEN_KEY } from '../../api/apollo';
import { Container, 
  FormWrapper, 
  Title,
  Subtitle, 
  MainButton, 
  InputForm } from './styles';
import { Form, message } from 'antd'
import FormGroupContainer from '../../components/FormGroupContainer/FormGroupContainer';

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("local storage", localStorage.getItem(TOKEN_KEY));
  }, [])

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

  const signIn = async (signInData) => {

    customLogin({
      variables: {
        customLoginData2: signInData,
      }
    })
    .then(res => {
      console.log("res sucesso", res);
      localStorage.setItem(TOKEN_KEY, res.data.customLogin.token);
      navigate('/dashboard');
    }, error => {
      // message.error("Erro ao realizar Login");
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