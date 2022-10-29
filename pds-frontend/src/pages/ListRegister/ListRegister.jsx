import InputSearch from "../../components/InputSearch/InputSearch";
import Collapse from "../../components/Collapse/Collapse";
import client from "../../api/apollo";
import {
  Container,
  StyledNameText,
  StyledText,
  StyledButton,
  StyledContent,
  StyledSelect,
  RowSearch,
  ButtonNewRegister,
  BtnClose,
} from "./styles";
import { useEffect, useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import {
  Col,
  Row,
  Typography,
  Button,
  Select,
  Table,
  Space,
  Dropdown,
  Menu,
  Modal,
} from "antd";
import moment from "moment";
import { useNavigate, useLocation } from "react-router-dom";
import SubHeader from "../../components/SubHeader/SubHeader";
import { EllipsisOutlined, UserAddOutlined } from "@ant-design/icons";
import {
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import DetailsDiscente from "./DetailsDiscente";
import ProgressStudent from "./ProgressStudent";
import * as af from "../Alerts/AlertFilters";

const { Text, Title } = Typography;

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


  const [items, setItems] = useState([]);
  const [itemsDoc, setItemsDoc] = useState([]);

  const [discentes, setDiscentes] = useState([]);
  const [docs, setDocs] = useState([]);

  const [showDiscentes, setShowDiscentes] = useState(true);
  const [showDocs, setShowDocs] = useState(true);

  const { state } = useLocation();

  useEffect(() => {
    queryAlunos.refetch();
  }, [state]);

  useEffect(() => {
    let items = queryAlunos.data?.alunos ? queryAlunos.data.alunos : [];
    console.log("items ", items);
    setItems(items);
    setDiscentes(items);
  }, [queryAlunos.data]);

  const onSearch = (value) => {
    const currValue = value;
    const filteredAlunos = discentes.filter((entry) => {
      // coloca strings em caixa baixa e remove acentos
      let record = entry.nomeCompleto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      let term = currValue
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      return record.includes(term);
    });
    setItems(filteredAlunos);
  };
  const header = (
    <RowSearch>
      <InputSearch placeholder={"Buscar"} onSearch={onSearch} />
      <ButtonNewRegister
        style={{ marginLeft: "20px" }}
        onClick={() => AddStudent()}
        icon={<UserAddOutlined />}
      >
        Adicionar discentes
      </ButtonNewRegister>
    </RowSearch>
  );

  const filterSelectInitialState = () => {
    setShowDiscentes(true);
    setShowDocs(true);
  };

  useEffect(() => {
    filterSelectInitialState();
  }, []);

  const dataFormater = (date) => moment(date).format("DD/MM/YYYY");

  const navigate = useNavigate();

  const AddStudent = () => {
    navigate("/dashboard/RegisterStudent/");
  };
  const handleClick = (item) => {
    navigate("/dashboard/register/" + item.id);
  };

  const [setAtivo] = useMutation(gql`
    mutation CustomSetAlunoAtivo($ativo: Boolean!, $alunoId: Float!) {
      customSetAlunoAtivo(ativo: $ativo, alunoId: $alunoId) {
        id
      }
    }
  `);

  const columns = [
    {
      title: "Nome Completo",
      dataIndex: "nomeCompleto",
      key: "nomeCompleto",
      sorter: (a, b) => a.nomeCompleto.localeCompare(b.nomeCompleto),
      defaultSortOrder: "ascend",
    },
    {
      title: "Matrícula",
      dataIndex: "matricula",
      key: "matricula",
    },
    {
      title: "E-mail Institucional",
      dataIndex: "emailInstitucional",
      key: "emailInstitucional",
    },
    // {
    //   title: 'E-mail Pes.',
    //   dataIndex: 'emailPessoal',
    //   key: 'emailPessoal',
    // },
    {
      title: "Ingresso",
      dataIndex: "dataIngresso",
      key: "dataIngresso",
      render: (_, { dataIngresso }) => <>{dataFormater(dataIngresso)}</>,
    },
    {
      title: "Prazo Máx.",
      dataIndex: "dataLimite",
      key: "dataLimite",
      render: (_, { dataLimite }) => <>{dataFormater(dataLimite)}</>,
    },
    {
      title: "Orientador",
      dataIndex: "orientador",
      key: "orientador",
      render: (_, { orientador }) => <>{orientador.nomeCompleto}</>,
    },
    {
      title: "Status",
      dataIndex: "ativo",
      key: "ativo",
      render: (_, { ativo }) => (
        <>
          {ativo ? (
            <Text type="success">Ativo</Text>
          ) : (
            <Text type="secondary">Inativo</Text>
          )}
        </>
      ),
      filters: [
        {
          text: "Ativos",
          value: true,
        },
        {
          text: "Inativos",
          value: false,
        },
      ],
      onFilter: (value, record) => record.ativo === value,
    },
    {
      title: "Ações",
      key: "action",
      render: (_, item) => (
        <>
          <Dropdown overlay={menu(item)} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <EllipsisOutlined
                  style={{
                    fontSize: "24px",
                    color: "#071D41",
                    fontWeight: "600",
                  }}
                />
              </Space>
            </a>
          </Dropdown>
        </>
      ),
    },
  ];
  const menu = (item) => (
    <Menu
      items={[
        {
          label: <a onClick={() => handleClick(item)}>Editar</a>,
          key: "0",
        },
        {
          label: item.ativo ? (
            <a onClick={() => handleInactive(item, false)}>Inativar</a>
          ) : (
            <a onClick={() => handleInactive(item, true)}>Ativar</a>
          ),
          key: "1",
        },
        {
          label: <a onClick={() => handleClickOpen(item)}>Editar progresso</a>,
          key: "2",
        },
        {
          label: <a onClick={() => showDetails(item)}>Ver Detalhes</a>,
          key: "3",
        }
      ]}
    />
  );

  const [openDetails, setOpenDetails] = useState(false);
  const [studentSelect, setStudentSelect] = useState();

  const showDetails = (item) => {
    setStudentSelect(item);
    setOpenDetails(true);
  };

  const handleCloseDetails = () => {
    setOpenDetails(false);
  };

  const [open, setOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState();

  const handleClickOpen = (StudentLine) => {
    setOpen(true);
    setStudentSelect(StudentLine);
    const textTitle = "Editando progresso do discente {NOME}".replace(
      "{NOME}",
      StudentLine.nomeCompleto
    );
    setHeaderTitle(textTitle);
  };
  const handleCloseDialog = () => {
    setOpen(false);
  };

  

  const handleInactive = (item, active) => {
    setAtivo({ variables: { alunoId: item.id, ativo: active } }).then(() =>
      queryAlunos.refetch()
    );
  };

  
  const content = (item) => (
    <StyledContent>
      <Row gutter={16}>
        <Col span={24}>
          <StyledText>
            <strong>Matrícula:</strong> {item.matricula}
          </StyledText>
        </Col>
        <Col span={24}>
          <StyledText>
            <strong>E-mail:</strong> {item.emailInstitucional}
          </StyledText>
        </Col>
        <Col span={24}>
          <StyledText>
            <strong>Data de ingresso:</strong>
            {dataFormater(item.dataIngresso)}
          </StyledText>
        </Col>
        <Col span={24}>
          <StyledText>
            <strong>Prazo máximo no programa:</strong>{" "}
            {dataFormater(item.dataLimite)}
          </StyledText>
        </Col>
        {item.orientador?.nomeCompleto ? (
          <Col span={24}>
            <StyledText>
              <strong>Orientador: </strong> {item.orientador?.nomeCompleto}
            </StyledText>
          </Col>
        ) : null}
        {item.ativo ? (
          <Col span={3}>
            <StyledButton
              type="primary"
              onClick={() => handleInactive(item, false)}
              style={{
                background: "#838EA0",
                color: "#FFFFFF",
              }}
            >
              INATIVAR
            </StyledButton>
          </Col>
        ) : (
          <Col span={3}>
            <StyledButton
              type="primary"
              onClick={() => handleInactive(item, true)}
              style={{
                background: "#838EA0",
                color: "#FFFFFF",
              }}
            >
              REATIVAR
            </StyledButton>
          </Col>
        )}
        <Col span={3}>
          <StyledButton
            onClick={() => handleClick(item)}
            style={{
              background: "#838EA0",
              color: "#FFFFFF",
            }}
          >
            EDITAR
          </StyledButton>
        </Col>
      </Row>
    </StyledContent>
  );

  return (
    <>
      <SubHeader title={"Visualizar Discentes"} />
      <Container>
        {header}
        {showDiscentes ? (
          <>
            <Table columns={columns} dataSource={items} />
          </>
        ) : null}
      </Container>
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>{headerTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <ProgressStudent studentSelect={studentSelect} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Fechar</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        maxWidth={"md"}
        fullWidth
        open={openDetails}
        onClose={handleCloseDetails}
      >
        <DialogContent>
          <DetailsDiscente studentSelect={studentSelect} />
          <BtnClose>
          <Button onClick={handleCloseDetails}>Fechar</Button>
          </BtnClose>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ListRegister;
