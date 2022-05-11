import InputSearch from '../../components/InputSearch/InputSearch';
import Collapse from '../../components/Collapse/Collapse';
import client from '../../api/apollo';
import { Container } from './styles';
import { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const ListRegister = () => {

    const queryAlunos = useQuery(gql`
    query GetAlunos {
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

  const queryDocentes = useQuery(gql`
    query GetAlunos {
        docentes {
            nomeCompleto
            email
          }
    }
  `);

  const [items, setItems] = useState([]);
  const [itemsDoc, setItemsDoc] = useState([]);

    useEffect(() => {
        let items = queryAlunos.data?.alunos ? queryAlunos.data.alunos : []
        setItems(items); 
    }, [queryAlunos.data])
    
    useEffect(() => {
      // console.log("use effect client", client);
      // console.log("data -> ", queryDocentes.data);
      queryDocentes.refetch();
      let itemsDoc = queryDocentes.data?.docentes ? queryDocentes.data.docentes : []
      setItemsDoc(itemsDoc); 
  }, [queryDocentes.data])
  

    const onSearch = value => console.log(value); 
    const header = <InputSearch placeholder={"Buscar"} onSearch={onSearch}/>
    
    return <>
        <Container>
            {header}
            <h4>Discentes</h4>
            <Collapse items={items}/>
            <h4>Docentes</h4>
            <Collapse items={itemsDoc}/>
        </Container>
    </> 
}

export default ListRegister;