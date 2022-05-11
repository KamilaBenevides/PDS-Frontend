import React from 'react'
import { gql, useQuery } from "@apollo/client";

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

    return (
            <h1>Login screen</h1>
    )
}

export default Login;