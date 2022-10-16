import InputSearch from '../../components/InputSearch/InputSearch';
import Collapse from '../../components/Collapse/Collapse';
import client from '../../api/apollo';
import { Alert, Button, Popconfirm } from 'antd';
import { Container, StyledNameText, StyledText, StyledButton, 
  StyledContent,
  StyledStatusName,
  StyledSelect} from './styles';
import { useEffect, useState, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery, useMutation, gql } from '@apollo/client';
import moment from 'moment';
import * as af from './AlertFilters.js';
import { Col, Row, Typography, Table, Space, Modal } from 'antd';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import TextArea from 'antd/lib/input/TextArea';
const {Text, Title} = Typography;


var date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}/${month}/${year}`;

function getDifferenceInMonths(date1, date2) {
  var diffInYs = parseInt(date2.slice(6,10)) - parseInt(date1.slice(6,10));
  var diffInMs = parseInt(date2.slice(3,5)) - parseInt(date1.slice(3,5));
  if (diffInMs<0)
  {
    diffInYs = diffInYs - 1
    if ( diffInYs < 0 )
    {
      return "Vencido a " + (-1*diffInMs) +" meses"
    }
    diffInMs = 12 + diffInMs 
  }
  Math.abs(diffInYs)
  Math.abs(diffInMs)
  diffInMs = diffInMs + (diffInYs * 12)
  return "Vence em " + (diffInMs-1) + " meses"
}

const BaseAlert = ({alertType}) => {

  const [sendAlert] = useMutation(af.sendAlertaAlunoMutation);

  const handleSend = (aaId) => {
    sendAlert({
      variables: {
        alertaAlunoId: aaId,
        messageEmail: emailTextDefault
      }
    }).then(() => {
      queryAlertaAlunos.refetch();
      setSucesso(true);
    }).catch(() => {
      setErro(true);
    });
  }
  
  const [sendManyAlerts] = useMutation(af.sendManyAlertaAluno);

  const handleSendMany = () => {
    sendManyAlerts({
      variables: {
        alertaAlunoIds: selectedRowKeys
      }
    }).then(() => {
      queryAlertaAlunos.refetch();
      setSucesso(true);
    }).catch(() => {
      setErro(true);
    });
  }

  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState(false);

  let alertSucesso = <></>;
  if (sucesso) {
      alertSucesso = <Alert
          message="Sucesso"
          description="E-mail enviado com sucesso."
          type="success"
          showIcon
          closable
      />
  } else if (erro) {
      alertSucesso = <Alert
          message="Erro!"
          description="Ocorreu um erro ao enviar o e-mail."
          type="error"
          showIcon
          closable
      />
  }

  const [solveAlert] = useMutation(af.solveAlertMutation);

  const handleSolve = (aaId, resolv) => {
    solveAlert({
      variables: {
          data: {
            resolvido: {
              set: resolv
            }
          },
          updateAlertaAlunoWhere2: {
            id: aaId
          }
      }}).then(() => {
          queryAlertaAlunos.refetch();
          queryResolvidos.refetch();
      });
  }

  const [solveManyAlerts] = useMutation(af.solveManyAlertsMutation);

  const handleSolveMany = () => {
    solveManyAlerts({
      variables: {
          data: {
            resolvido: {
              set: true
            }
          },
          where: {
            id: {
              in: selectedRowKeys
            }
          }
      }}).then(() => {
          queryAlertaAlunos.refetch();
          queryResolvidos.refetch();
      });
  }

  const 
  queryAlertaAlunos = useQuery(af.baseQuery, {
    variables: {
      where: {
        ativo: {
          equals: true
        },
        resolvido: {
          equals: false
        },
        alerta: {
          is: {
            tipo: {
              equals: alertType
            }
          }
        }
      }
    }
  });

  const queryResolvidos = useQuery(af.baseQuery, {
    variables: {
      where: {
        ativo: {
          equals: true
        },
        resolvido: {
          equals: true
        },
        alerta: {
          is: {
            tipo: {
              equals: alertType
            }
          }
        }
      }
    }
  });

  const queryInativos = useQuery(af.baseQuery, {
    variables: {
      where: {
        ativo: {
          equals: false
        },
        alerta: {
          is: {
            tipo: {
              equals: alertType
            }
          }
        }
      }
    }
  });

  const [alertas, setAlertas] = useState([]);
  const [vencidos, setVencidos] = useState([]);
  const [enviados, setEnviados] = useState([]);
  const [abertos, setAbertos] = useState([]);
  const [naoIniciados, setNaoIniciados] = useState([]);
  const [resolvidos, setResolvidos] = useState([]);
  const [inativos, setInativos] = useState([]);

  const [vencidosItems, setVencidosItems] = useState([])
  const [enviadosItems, setEnviadosItems] = useState([])
  const [abertosItems, setAbertosItems] = useState([])
  const [naoIniciadosItems, setNaoIniciadosItems] = useState([])
  const [resolvidosItems, setResolvidosItems] = useState([])
  const [inativosItems, setInativosItems] = useState([])

  const location = useLocation();
  
  useEffect(() => {
    queryAlertaAlunos.refetch();
    queryInativos.refetch();
    queryResolvidos.refetch();
  }, [location.state])

  useEffect(() => {
    let aa = queryAlertaAlunos.data?.alertaAlunos ? queryAlertaAlunos.data.alertaAlunos : [];
    
    let vencidos = af.filterVencidos(aa);
    setVencidos(vencidos);
    setVencidosItems(vencidos);

    let enviados = af.filterEnviados(aa);
    setEnviados(enviados);
    setEnviadosItems(enviados);

    let abertos = af.filterAbertos(aa);
    setAbertos(abertos);
    setAbertosItems(abertos);

    let naoIniciados = af.filterNaoIniciados(aa);
    setNaoIniciados(naoIniciados);
    setNaoIniciadosItems(naoIniciados);

    setAlertas(aa);
  }, [queryAlertaAlunos.data]);

  useEffect(() => {
    let aa = queryResolvidos.data?.alertaAlunos ? queryResolvidos.data.alertaAlunos : [];
    let aa_status = aa.map(e => ({...e, status: "Resolvido"}));
    setResolvidos(aa_status);
    setResolvidosItems(aa_status);
  }, [queryResolvidos.data]);
  
  useEffect(() => {
    let aa = queryInativos.data?.alertaAlunos ? queryInativos.data.alertaAlunos : [];
    let aa_status = aa.map(e => ({...e, status: "Inativo"}));
    setInativos(aa_status);
    setInativosItems(aa_status);
  }, [queryInativos.data]);

  const filterOptions = [
    {
      label: "Vencidos",
      value: "vencidos"
    },
    {
      label: "Não iniciados",
      value: "naoInciados"
    },
    {
      label: "Enviados",
      value: "enviados"
    },
    {
      label: "Abertos",
      value: "abertos"
    },
    {
      label: "Resolvidos",
      value: "resolvidos"
    },
    {
      label: "Inativos",
      value: "inativos"
    },
    {
      label: "Todos",
      value: "todos"
    }
  ];

  const compareStrings = (entry, value) => {
    // coloca strings em caixa baixa e remove acentos
    let record = entry?.aluno?.nomeCompleto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    let term = value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    return record.includes(term);
  } 

  const onSearch = value => {
    console.log("filter value ", value);
    if (state.showVencidos) {
      console.log("vencidos", vencidos);
      const filteredAlunos = vencidos.filter(entry => compareStrings(entry, value));
      setVencidosItems(filteredAlunos);
    }
    if (state.showAbertos) {
      const filteredAlunos = abertos.filter(entry => compareStrings(entry, value));
      setAbertosItems(filteredAlunos);
    }
    if(state.showEnviados) {
      const filteredAlunos = enviados.filter(entry => compareStrings(entry, value));
      setEnviadosItems(filteredAlunos);
    }
    if (state.showInativos) {
      const filteredAlunos = inativos.filter(entry => compareStrings(entry, value));
      setInativosItems(filteredAlunos);
    }
    if (state.showNaoIniciados) {
      const filteredAlunos = naoIniciados.filter(entry => compareStrings(entry, value));
      setNaoIniciadosItems(filteredAlunos);
    }
    if (state.showResolvidos) {
      const filteredAlunos = resolvidos.filter(entry => compareStrings(entry, value));
      setResolvidosItems(filteredAlunos);
    }
  }

  const onFilterSelectChange = value => {
    dispatch({type: value})
  }

  const initialState = {
    showAbertos: false,
    showEnviados: false,
    showInativos: false,
    showNaoIniciados: false,
    showResolvidos: false,
    showVencidos: false
  };

  const init = {
      showAbertos: true,
      showEnviados: true,
      showInativos: true,
      showNaoIniciados: true,
      showResolvidos: true,
      showVencidos: true
  }
  
  const [filter, setFilter] = useState('Todos');
  const [state, dispatch] = useReducer(reducer, init);

  function reducer(state, action) {
    switch (action.type) {
      case 'vencidos':
        console.log("state ", state);
        setFilter('Vencido');
        return {
          showAbertos: false,
          showEnviados: false,
          showInativos: false,
          showNaoIniciados: false,
          showResolvidos: false,
          showVencidos: true,
        };
      case 'abertos':
        return {
          showAbertos: true,
          showEnviados: false,
          showInativos: false,
          showNaoIniciados: false,
          showResolvidos: false,
          showVencidos: false,
        };
      case 'enviados':
        return {
          showAbertos: false,
          showEnviados: true,
          showInativos: false,
          showNaoIniciados: false,
          showResolvidos: false,
          showVencidos: false,
        };
      case 'inativos':
        return {
          showAbertos: false,
          showEnviados: false,
          showInativos: true,
          showNaoIniciados: false,
          showResolvidos: false,
          showVencidos: false,
        };
      case 'naoInciados':
        return {
          showAbertos: false,
          showEnviados: false,
          showInativos: false,
          showNaoIniciados: true,
          showResolvidos: false,
          showVencidos: false,
        };
      case 'resolvidos':
        return {
          showAbertos: false,
          showEnviados: false,
          showInativos: false,
          showNaoIniciados: false,
          showResolvidos: true,
          showVencidos: false,
        };
      default:
        return {
          showAbertos: true,
          showEnviados: true,
          showInativos: true,
          showNaoIniciados: true,
          showResolvidos: true,
          showVencidos: true,
        };
    }
  }

  const header = <>
    <Row>
      <Col span={24}>
        <InputSearch placeholder={"Buscar"} onSearch={onSearch} />
      </Col>
    </Row>
  </>
  
  const getStatusType = status => {
    switch (status) {
      case "Vencido":
        return "danger";
      case "Em Aberto":
        return "warning";
      case "Enviado":
        return "warning";
      case "Inativo":
        return "secondary";
      case "Não Iniciado":
        return "secondary";
      case "Resolvido":
        return "success";
      default:
        break;
    }
  }

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'nomeCompleto',
      key: 'nomeCompleto',
      render: (_, {aluno}) => (
        <>{aluno.nomeCompleto}</>
      ),
      sorter: (a, b) => a.aluno.nomeCompleto.localeCompare(b.aluno.nomeCompleto),
      defaultSortOrder: 'ascend'
    },
    // {
    //   title: 'Matrícula',
    //   dataIndex: 'aluno.matricula',
    //   key: 'aluno.matricula',
    //   render: (_, {aluno}) => (
    //     <>{aluno.matricula}</>
    //   ),
    // },
    {
      title: 'Ingresso',
      dataIndex: 'ingresso',
      key: 'ingresso',
      render: (_, {aluno}) => (
        <>{dataFormater(aluno.dataIngresso)}</>
      ),
    },
    {
      title: 'E-mail Inst.',
      dataIndex: 'emailInstitucional',
      key: 'emailInstitucional',
      render: (_, {aluno}) => (
        <>{aluno.emailInstitucional}</>
      ),
    },
    {
      title: 'Abertura',
      dataIndex: 'aberto',
      key: 'aberto',
      render: (_, item) => (
        <>{dataFormater(af.getInicioAlerta(item.aluno.dataLimite, item.alerta.diasIntervalo))}</>
      )
    },
    {
      title: 'Vencimento',
      dataIndex: 'vencimento',
      key: 'vencimento',
      render: (_, item) => (
        <>{getDifferenceInMonths( currentDate ,dataFormater(af.getVencimentoAlerta(item.aluno.dataLimite, item.alerta.diasIntervalo)))}</>
      ),
      sorter: (a, b) => af.getVencimentoAlerta(a.aluno.dataLimite, a.alerta.diasIntervalo)
                          .isAfter(af.getVencimentoAlerta(b.aluno.dataLimite, b.alerta.diasIntervalo)),
      defaultSortOrder: 'ascend'
    },
    {
      title: 'Orientador',
      dataIndex: 'orientador',
      key: 'orientador',
      render: (_, {aluno}) => (
        <>{aluno.orientador.nomeCompleto}</>
      )
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (_, {status}) => (
        <Text type={getStatusType(status)}>{status}</Text>
      ),
      filters: [
        {
          text: 'Vencidos',
          value: 'Vencido',
        },
        {
          text: 'Enviados',
          value: 'Enviado',
        },
        {
          text: 'Abertos',
          value: 'Em Aberto',
        },
        {
          text: 'Não Iniciados',
          value: 'Não Iniciado',
        },
        {
          text: 'Resolvidos',
          value: 'Resolvido',
        },
        {
          text: 'Inativos',
          value: 'Inativo',
        },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: 'Data de Envio',
      dataIndex: 'dataEnvioEmail',
      key: 'dataEnvioEmail',
      render: (_, {dataEnvioEmail}) => (
        <>{dataEnvioEmail ? dataFormater(dataEnvioEmail) : "Não enviado"}</>
      )
    },
    {
      title: 'Ações',
      key: 'action',
      render: (_, item) => (
        <>
          
          <Space size="middle">
            <a onClick={() => handleClickOpen(item)}>Alertar</a>
          </Space>
        </>
      )
    },
  ];
  const [open, setOpen] = useState(false);
  const [emailTextDefault, setEmailTextDefault] = useState();
  const [studentSelect, setStudentSelect] = useState();
  
  const handleClickOpen = (StudentLine) => {
    console.log(StudentLine)
    setOpen(true);
    const emailTextDefault = "Olá {NOME},\n\nEste é um email enviado através do sistema de Alertas de Prazos do PPGI.\nIdentificamos que você está próximo do seu prazo (cerca de 30 dias) para a atividade de {ALERTA}.\nPor favor, entre em contato com a secretaria a fim de esclarecer mais detalhes e resolver esta pendência.".replace("{NOME}", StudentLine.aluno.nomeCompleto).replace("{ALERTA}", StudentLine.alerta.nome)
    setEmailTextDefault(emailTextDefault)
    const textTitleAlert = "Tem certeza que deseja enviar alerta para {NOME} ?".replace("{NOME}", StudentLine.aluno.nomeCompleto)
    setStudentSelect(textTitleAlert)
  };
  
  console.log(studentSelect)
  const handleClose = () => {
    setOpen(false);
  };

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      {
        key: 'vencidos',
        text: 'Selecionar Vencidos',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            console.log(key)
            let vencido = vencidosItems.find(i => i.id == key);
            return vencido ? true : false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'abertos',
        text: 'Selecionar Abertos',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            console.log(key)
            let aberto = abertosItems.find(i => i.id == key);
            return aberto ? true : false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

const dataFormater = date => moment(date).format("DD/MM/YYYY");

  return <>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {studentSelect}
      </DialogTitle>
      <DialogContent>
        <DialogContentText  id="alert-dialog-description">
          Editar email:
          <TextArea rows={12} defaultValue={emailTextDefault} onChange={(e) => {setEmailTextDefault(e.currentTarget.value)}} maxLength={600} />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleSend} autoFocus>
          Enviar alerta
        </Button>
      </DialogActions>
    </Dialog>
    <Container>
      {alertSucesso}
      {header}
      <br />
      {selectedRowKeys.length ?
        <><Space>
          <Button onClick={() => handleSendMany()}>Enviar alerta para os selecionados</Button>
          <Button onClick={() => handleSolveMany()}>Marcar selecionados como resolvido</Button>
        </Space><br/><br/></>
        : <></>
      }
      <Table rowKey="id" rowSelection={rowSelection} columns={columns} pagination={false} dataSource={vencidosItems.concat(enviadosItems, abertosItems, naoIniciadosItems, resolvidosItems, inativosItems)} />
    </Container>
  </>
}

export default BaseAlert;