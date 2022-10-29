import InputSearch from '../../components/InputSearch/InputSearch';
import Collapse from '../../components/Collapse/Collapse';
import client from '../../api/apollo';
import { Container, StyledNameText, StyledText, StyledButton, StyledContent, StyledSelect, RowSearch, ButtonNewRegister } from './styles';
import { useEffect, useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import {Col, Row, Typography, Button, Select, Table, Space, Dropdown, Menu} from 'antd';
import moment from 'moment';
import { useNavigate, useLocation } from "react-router-dom";
import SubHeader from '../../components/SubHeader/SubHeader';
import { UserAddOutlined } from '@ant-design/icons';

const {Text, Title} = Typography;

const ListRegister = () => {

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

    const header = 
    (<RowSearch >
        <InputSearch placeholder={"Buscar"} onSearch={onSearch}/>
        <ButtonNewRegister style={{marginLeft: '20px'}} onClick={()=>AddProf()} icon={<UserAddOutlined />}>Adicionar docentes</ButtonNewRegister>
    </RowSearch>)

  const filterSelectInitialState = () => {
    setShowDiscentes(true);
    setShowDocs(true);
  }

  useEffect(() => {
    filterSelectInitialState();
  }, [])
      
const navigate = useNavigate();

const AddProf = () => {
  navigate('/dashboard/Registerprofessor/');
}

const handleClickDoc = (item) => {
  navigate('/dashboard/professor/' + item.id);
}


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
const content = item =>
  (<StyledContent>
      
  </StyledContent>)
    
    return <>
        <SubHeader title={'Visualizar Docentes'}/>
        <Container>
            {header}    
            <>
              <Table columns={columnsDoc} dataSource={itemsDoc} />
            </>


        </Container>
    </> 
}

export default ListRegister;