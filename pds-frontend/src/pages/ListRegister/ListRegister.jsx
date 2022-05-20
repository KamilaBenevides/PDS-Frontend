import InputSearch from '../../components/InputSearch/InputSearch';
import Collapse from '../../components/Collapse/Collapse';
import client from '../../api/apollo';
import { Container, StyledNameText, StyledText, StyledButton, StyledContent } from './styles';
import { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import {Col, Row, Typography } from 'antd';
import moment from 'moment';

const {Text} = Typography;

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

    const docentesHeader = item =>
        <>
            <Col span={24}>
                <StyledNameText>{item.nomeCompleto}</StyledNameText>
            </Col>
        </>

    const discentesHeader = item =>
        <>
            <Col span={20}>
                <StyledNameText>{item.nomeCompleto}</StyledNameText>
            </Col>
            {item.ativo ?
              <Col span={4}>
                <Text type="success">STATUS: ativo</Text>
              </Col>:
              <Col span={4}>
                <Text type="secondary">STATUS: inativo</Text>
              </Col>
            }
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
              <StyledText><strong>Prazo máximo no programa:</strong> {dataFormater(item.dataLimite)}</StyledText>
          </Col>
          {item.orientador?.nomeCompleto ? 
          <Col span={24}>
              <StyledText><strong>Orientador: </strong> {item.orientador?.nomeCompleto}</StyledText>
          </Col> : null}
          {item.ativo ?
          <Col span={3}>
            <StyledButton type="primary" danger 
              style={{
                background: '#838EA0',
                  color: '#FFFFFF'
                }}>
              INATIVAR
            </StyledButton>
          </Col> : null}
      </Row>
  </StyledContent>)
    
    return <>
        <Container>
            {header}
            <h4>Discentes</h4>
            <Collapse items={items} header={discentesHeader} content={content}/>
            <h4>Docentes</h4>
            <Collapse items={itemsDoc} header={docentesHeader}/>
        </Container>
    </> 
}

export default ListRegister;