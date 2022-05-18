import InputSearch from '../../components/InputSearch/InputSearch';
import Collapse from '../../components/Collapse/Collapse';
import client from '../../api/apollo';
import { Container, StyledNameText, StyledText, StyledButton, StyledContent, StyledStatusName} from './styles';
import { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import {Col, Row } from 'antd';
import moment from 'moment';

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
        let items = queryAlunos.data?.alunos ? queryAlunos.data.alunos : [];
        console.log("items ", items);
        setItems(items); 
    }, [queryAlunos.data])
    
    useEffect(() => {
      queryDocentes.refetch();
      let itemsDoc = queryDocentes.data?.docentes ? queryDocentes.data.docentes : []
      setItemsDoc(itemsDoc); 
  }, [queryDocentes.data])
  

    const onSearch = value => console.log(value); 
    const header = <InputSearch placeholder={"Buscar"} onSearch={onSearch}/>

    const discentesHeader = item =>
        <>
            <Col span={!item.matricula ? 24: 20}>
                <StyledNameText>{item.nomeCompleto}</StyledNameText>
            </Col>
            {!item.matricula ? null: <Col span={4}>
                <StyledStatusName>STATUS: em aberto</StyledStatusName>
            </Col>}
        </>

const dataFormater = date => moment(date).format("DD/MM/YYYY");

const content = item =>
  (<StyledContent>
      <Row gutter={16}>
          <Col span={24}>
              <StyledText><strong>Matrícula:</strong> {item.matricula}</StyledText>
          </Col>
          <Col span={24}>
              <StyledText><strong>E-mail:</strong> {item.emailInstitucional}</StyledText>
          </Col>
          <Col span={24}>
              <StyledText><strong>Data de ingresso:</strong>{dataFormater(item.dataIngresso)}</StyledText>
          </Col>
          <Col span={24}>
              <StyledText><strong>Prazo máximo para agendamento:</strong> {dataFormater(item.dataLimite)}</StyledText>
          </Col>
          {item.orientador?.nomeCompleto ? 
          <Col span={24}>
              <StyledText><strong>Orientador: </strong> {item.orientador?.nomeCompleto}</StyledText>
          </Col> : null}
          <Col span={3}>
        <StyledButton type="primary" danger 
        style={{
          background: '#838EA0',
            color: '#FFFFFF'
          }}>
        INATIVAR
        </StyledButton>
        </Col>
      </Row>
  </StyledContent>)
    
    return <>
        <Container>
            {header}
            <h4>Discentes</h4>
            <Collapse items={items} header={discentesHeader} content={content}/>
            <h4>Docentes</h4>
            <Collapse items={itemsDoc} header={discentesHeader}/>
        </Container>
    </> 
}

export default ListRegister;