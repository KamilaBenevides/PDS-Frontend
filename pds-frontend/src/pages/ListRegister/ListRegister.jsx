import InputSearch from '../../components/InputSearch/InputSearch';
import Collapse from '../../components/Collapse/Collapse';
import client from '../../api/apollo';
import { Container } from './styles';
import { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const ListRegister = () => {

    const { loading, error, data } = useQuery(gql`
    query GetExchangeRates {
        alunos {
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
          }
    }
  `);

  const [items, setItems] = useState([]);

    useEffect(() => {
        console.log("use effect client", client);
        console.log("data -> ", data);
        let items = data?.alunos ? data.alunos : []
        setItems(items); 
    }, [data])
    

    const onSearch = value => console.log(value); 
    const header = <InputSearch placeholder={"Buscar"} onSearch={onSearch}/>
    
    return <>
        <Container>
            {header}
            <Collapse items={items}/>
        </Container>
    </> 
}

export default ListRegister;