import InputSearch from '../../components/InputSearch/InputSearch';
import Collapse from '../../components/Collapse/Collapse';
import client from '../../api/apollo';
import { Container, StyledNameText, StyledText, StyledButton, StyledContent, StyledSelect } from './styles';
import { useEffect, useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import {Col, Row, Typography, Button, Select } from 'antd';
import moment from 'moment';
import { useNavigate } from "react-router-dom";
import SubHeader from '../../components/SubHeader/SubHeader';

const {Text} = Typography;

const ListRegister = () => {

    const queryAlunos = useQuery(gql`
    query GetAlunos {
        alunos {
            id
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
    query GetDocentes {
        docentes {
            id
            nomeCompleto
            email
          }
    }
  `);

  const [items, setItems] = useState([]);
  const [itemsDoc, setItemsDoc] = useState([]);

  const [discentes, setDiscentes] = useState([]);
  const [docs, setDocs] = useState([]);

  const [showDiscentes, setShowDiscentes] = useState(true);
  const [showDocs, setShowDocs] = useState(true);

    useEffect(() => {
        let items = queryAlunos.data?.alunos ? queryAlunos.data.alunos : [];
        console.log("items ", items);
        setItems(items); 
        setDiscentes(items);
    }, [queryAlunos.data])

    useEffect(() => {
      let itemsDoc = queryDocentes.data?.docentes ? queryDocentes.data.docentes : [];
      setItemsDoc(itemsDoc);
      setDocs(itemsDoc);
    }, [queryDocentes.data])
  

    const onSearch = value => {
      const currValue = value;
      const filteredAlunos = discentes.filter(entry =>
        entry.nomeCompleto.toLowerCase().includes(currValue.toLowerCase())
      );
      setItems(filteredAlunos);

      const filteredDocs = docs.filter(entry =>
        entry.nomeCompleto.toLowerCase().includes(currValue.toLowerCase())
      );
      setItemsDoc(filteredDocs);
    }

    const filterOptions = [{
      label: "Discentes",
      value: "discentes"
    },
    {
      label: "Docentes",
      value: "docentes"
    },
    {
      label: "Todos",
      value: "todos"
    }
  ];

  const onFilterSelectChange = value => {
      if (value === "discentes") {
        setShowDiscentes(true);
        setShowDocs(false);
      } else if (value === "docentes") {
        setShowDiscentes(false);
        setShowDocs(true);
      } else {
        setShowDiscentes(true);
        setShowDocs(true);
      }
  }
    
    const header = 
      (<Row >
        <Col span={18}>
          <InputSearch placeholder={"Buscar"} onSearch={onSearch}/>
        </Col>
        <Col span={6}>
          <StyledSelect 
          options={filterOptions} 
          onChange={onFilterSelectChange}
          defaultValue="todos"/>
        </Col>
      </Row>)

  const filterSelectInitialState = () => {
    setShowDiscentes(true);
    setShowDocs(true);
  }

  useEffect(() => {
    filterSelectInitialState();
  }, [])
      

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

const navigate = useNavigate();

const docContent = item => (
  <StyledContent>
    <Row gutter={16}>
      <Col span={24}>
        <StyledText><strong>E-mail:</strong> {item.email}</StyledText>
      </Col>
      <Col span={3}>
        <StyledButton onClick={() => handleClickDoc(item)}
          style={{
            background: '#838EA0',
              color: '#FFFFFF'
            }}>
          EDITAR
        </StyledButton>
      </Col>
    </Row>
  </StyledContent>
)

const handleClick = (item) => {
  navigate('/dashboard/register/' + item.id);
}

const handleClickDoc = (item) => {
  navigate('/dashboard/professor/' + item.id);
}

const [setAtivo] = useMutation(gql`mutation CustomSetAlunoAtivo($ativo: Boolean!, $alunoId: Float!) {
  customSetAlunoAtivo(ativo: $ativo, alunoId: $alunoId) {
    id
  }
}`)

const handleInactive = (item, active) => {
  setAtivo({ variables: { alunoId: item.id, ativo: active }})
  .then(() => queryAlunos.refetch());
}

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
            <StyledButton type="primary" onClick={() => handleInactive(item, false)}
              style={{
                background: '#838EA0',
                  color: '#FFFFFF'
                }}>
              INATIVAR
            </StyledButton>
          </Col> :
          <Col span={3}>
            <StyledButton type="primary" onClick={() => handleInactive(item, true)}
              style={{
                background: '#838EA0',
                  color: '#FFFFFF'
                }}>
              REATIVAR
            </StyledButton>
          </Col>}
          <Col span={3}>
            <StyledButton onClick={() => handleClick(item)}
              style={{
                background: '#838EA0',
                  color: '#FFFFFF'
                }}>
              EDITAR
            </StyledButton>
          </Col>
      </Row>
  </StyledContent>)
    
    return <>
        <SubHeader title={'Visualizar Cadastrados'}/>
        <Container>
            {header}
            <br>
            </br>
            {showDiscentes ? 
            <>
              <Collapse items={items} header={discentesHeader} content={content} />
            </> : null}
            <br>
            </br>
            {showDocs ? 
            <>
              <Collapse items={itemsDoc} header={docentesHeader} content={docContent} />
            </> : null}


        </Container>
    </> 
}

export default ListRegister;