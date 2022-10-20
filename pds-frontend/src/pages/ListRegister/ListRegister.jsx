import InputSearch from '../../components/InputSearch/InputSearch';
import Collapse from '../../components/Collapse/Collapse';
import client from '../../api/apollo';
import { Container, StyledNameText, StyledText, StyledButton, StyledContent, StyledSelect } from './styles';
import { useEffect, useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import {Col, Row, Typography, Button, Select, Table, Space} from 'antd';
import moment from 'moment';
import { useNavigate, useLocation } from "react-router-dom";
import SubHeader from '../../components/SubHeader/SubHeader';

const {Text, Title} = Typography;

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

  const {state} = useLocation();
  
  useEffect(() => {
    queryAlunos.refetch();
    queryDocentes.refetch();
  }, [state])

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
      const filteredAlunos = discentes.filter(entry => {
        // coloca strings em caixa baixa e remove acentos
        let record = entry.nomeCompleto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        let term = currValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        return record.includes(term);
      });
      setItems(filteredAlunos);

      const filteredDocs = docs.filter(entry => {
        // coloca strings em caixa baixa e remove acentos
        let record = entry.nomeCompleto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        let term = currValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        return record.includes(term);
      });
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

    
    const header = 
      (<Row >
        <Col span={24}>
          <InputSearch placeholder={"Buscar"} onSearch={onSearch}/>
        </Col>
      </Row>)

  const filterSelectInitialState = () => {
    setShowDiscentes(true);
    setShowDocs(true);
  }

  useEffect(() => {
    filterSelectInitialState();
  }, [])
      

const dataFormater = date => moment(date).format("DD/MM/YYYY");

const navigate = useNavigate();

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

const columns = [
  {
    title: 'Nome Completo',
    dataIndex: 'nomeCompleto',
    key: 'nomeCompleto',
    sorter: (a, b) => a.nomeCompleto.localeCompare(b.nomeCompleto),
    defaultSortOrder: 'ascend'
  },
  {
    title: 'Matrícula',
    dataIndex: 'matricula',
    key: 'matricula',
  },
  {
    title: 'E-mail Inst.',
    dataIndex: 'emailInstitucional',
    key: 'emailInstitucional',
  },
  {
    title: 'E-mail Pes.',
    dataIndex: 'emailPessoal',
    key: 'emailPessoal',
  },
  {
    title: 'Ingresso',
    dataIndex: 'dataIngresso',
    key: 'dataIngresso',
    render: (_, {dataIngresso}) => (
      <>{dataFormater(dataIngresso)}</>
    )
  },
  {
    title: 'Prazo Máx.',
    dataIndex: 'dataLimite',
    key: 'dataLimite',
    render: (_, {dataLimite}) => (
      <>{dataFormater(dataLimite)}</>
    )
  },
  {
    title: 'Orientador',
    dataIndex: 'orientador',
    key: 'orientador',
    render: (_, {orientador}) => (
      <>{orientador.nomeCompleto}</>
    )
  },
  {
    title: 'Coorientador',
    dataIndex: 'coorientador',
    key: 'coorientador',
    render: (_, {coorientador}) => (
      <>{coorientador?.nomeCompleto}</>
    )
  },
  {
    title: 'Status',
    dataIndex: 'ativo',
    key: 'ativo',
    render: (_, {ativo}) => (
      <>
        {ativo ? <Text type="success">Ativo</Text> :
        <Text type="secondary">Inativo</Text>}
      </>
    ),
    filters: [
      {
        text: 'Ativos',
        value: true,
      },
      {
        text: 'Inativos',
        value: false,
      },
    ],
    onFilter: (value, record) => record.ativo === value,
  },
  {
    title: 'Ações',
    key: 'action',
    render: (_, item) => (
      <Space size="small">
        <a onClick={() => handleClick(item)}>Editar</a>
        {item.ativo ?
          <a onClick={() => handleInactive(item, false)}>Inativar</a>
          :
          <a onClick={() => handleInactive(item, true)}>Ativar</a>
        }
        {/* <a onClick={() => handleClick(item)}>Prorrogar</a> */}
        {/* <a onClick={() => handleClick(item)}>Deletar</a> */}
      </Space>
    )
  },
];

const columnsDoc = [
  {
    title: 'Nome Completo',
    dataIndex: 'nomeCompleto',
    key: 'nomeCompleto',
    sorter: (a, b) => a.nomeCompleto.localeCompare(b.nomeCompleto),
    defaultSortOrder: 'ascend'
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Ações',
    key: 'action',
    render: (_, item) => (
      <Space size="small">
        <a onClick={() => handleClickDoc(item)}>Editar</a>
        {/* <a onClick={() => handleClick(item)}>Deletar</a> */}
      </Space>
    )
  },
];

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
            <br />
            {showDiscentes ? 
            <>
              <Title level={4}>Discentes</Title>
              <Table columns={columns} dataSource={items} />
            </> : null}
            <br>
            </br>
            {showDocs ? 
            <>
              <Title level={4}>Docentes</Title>
              <Table columns={columnsDoc} dataSource={itemsDoc} />
            </> : null}


        </Container>
    </> 
}

export default ListRegister;