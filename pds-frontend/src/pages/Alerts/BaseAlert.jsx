import InputSearch from '../../components/InputSearch/InputSearch';
import Collapse from '../../components/Collapse/Collapse';
import client from '../../api/apollo';
import { Alert, Button } from 'antd';
import { Container, StyledNameText, StyledText, StyledButton, 
  StyledContent,
  StyledStatusName,
  StyledSelect} from './styles';
import { useEffect, useState, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import moment from 'moment';
import * as af from './AlertFilters.js';
import { Col, Row, Typography, Table, Space } from 'antd';
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
      return "Atrasado a " + (-1*diffInMs) +" meses"
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
        alertaAlunoId: aaId
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

  const queryAlertaAlunos = useQuery(af.baseQuery, {
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
  const [Atrasados, setAtrasados] = useState([]);
  const [enviados, setEnviados] = useState([]);
  const [Pendentes, setPendentes] = useState([]);
  const [resolvidos, setResolvidos] = useState([]);
  const [inativos, setInativos] = useState([]);

  const [AtrasadosItems, setAtrasadosItems] = useState([])
  const [enviadosItems, setEnviadosItems] = useState([])
  const [PendentesItems, setPendentesItems] = useState([])
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
    
    let Atrasados = af.filterAtrasados(aa);
    setAtrasados(Atrasados);
    setAtrasadosItems(Atrasados);

    let enviados = af.filterEnviados(aa);
    setEnviados(enviados);
    setEnviadosItems(enviados);

    let Pendentes = af.filterPendentes(aa);
    setPendentes(Pendentes);
    setPendentesItems(Pendentes);

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

  const compareStrings = (entry, value) => {
    // coloca strings em caixa baixa e remove acentos
    let record = entry?.aluno?.nomeCompleto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    let term = value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    return record.includes(term);
  } 

  const onSearch = value => {
    console.log("filter value ", value);
    if (state.showAtrasados) {
      console.log("Atrasados", Atrasados);
      const filteredAlunos = Atrasados.filter(entry => compareStrings(entry, value));
      setAtrasadosItems(filteredAlunos);
    }
    if (state.showPendentes) {
      const filteredAlunos = Pendentes.filter(entry => compareStrings(entry, value));
      setPendentesItems(filteredAlunos);
    }
    if(state.showEnviados) {
      const filteredAlunos = enviados.filter(entry => compareStrings(entry, value));
      setEnviadosItems(filteredAlunos);
    }
    if (state.showInativos) {
      const filteredAlunos = inativos.filter(entry => compareStrings(entry, value));
      setInativosItems(filteredAlunos);
    }
    if (state.showResolvidos) {
      const filteredAlunos = resolvidos.filter(entry => compareStrings(entry, value));
      setResolvidosItems(filteredAlunos);
    }
  }


  const init = {
      showPendentes: true,
      showEnviados: true,
      showInativos: true,
      showResolvidos: true,
      showAtrasados: true
  }
  
  const [filter, setFilter] = useState('Todos');
  const [state, dispatch] = useReducer(reducer, init);

  function reducer(state, action) {
    switch (action.type) {
      case 'Atrasados':
        console.log("state ", state);
        setFilter('Atrasado');
        return {
          showPendentes: false,
          showEnviados: false,
          showInativos: false,
          showResolvidos: false,
          showAtrasados: true,
        };
      case 'Pendentes':
        return {
          showPendentes: true,
          showEnviados: false,
          showInativos: false,
          showResolvidos: false,
          showAtrasados: false,
        };
      case 'enviados':
        return {
          showPendentes: false,
          showEnviados: true,
          showInativos: false,
          showResolvidos: false,
          showAtrasados: false,
        };
      case 'inativos':
        return {
          showPendentes: false,
          showEnviados: false,
          showInativos: true,
          showResolvidos: false,
          showAtrasados: false,
        };
      case 'naoInciados':
        return {
          showPendentes: false,
          showEnviados: false,
          showInativos: false,
          showResolvidos: false,
          showAtrasados: false,
        };
      case 'resolvidos':
        return {
          showPendentes: false,
          showEnviados: false,
          showInativos: false,
          showResolvidos: true,
          showAtrasados: false,
        };
      default:
        return {
          showPendentes: true,
          showEnviados: true,
          showInativos: true,
          showResolvidos: true,
          showAtrasados: true,
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
      case "Atrasado":
        return "danger";
      case "Pendente":
        return "warning";
      case "Enviado":
        return "warning";
      case "Inativo":
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
      dataIndex: 'Pendente',
      key: 'Pendente',
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
    // {
    //   title: 'Coorientador',
    //   dataIndex: 'coorientador',
    //   key: 'coorientador',
    //   render: (_, {coorientador}) => (
    //     <>{coorientador?.nomeCompleto}</>
    //   )
    // },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (_, {status}) => (
        <Text type={getStatusType(status)}>{status}</Text>
      ),
      filters: [
        {
          text: 'Atrasados',
          value: 'Atrasado',
        },
        {
          text: 'Enviados',
          value: 'Enviado',
        },
        {
          text: 'Pendentes',
          value: 'Pendente',
        },
        {
          text: 'Resolvidos',
          value: 'Resolvido',
        },
        {
          text: 'Inativos',
          value: 'Inativo',
        },
        {
          text: 'Homologado',
          value: 'Homologado',
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
        <Space size="middle">
          <a onClick={() => handleSend(item.id)}>Alertar</a>
          {!item.resolvido ?
            <a style={{color: '#2EC615'}} onClick={() => handleSolve(item.id, true)}>Marcar como Resolvido</a>
            :
            <a style={{color: '#AAAAAA'}} onClick={() => handleSolve(item.id, false)}>Desfazer Resolvido</a>
          }
        </Space>
      )
    },
  ];

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
        key: 'Atrasados',
        text: 'Selecionar Atrasados',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            console.log(key)
            let Atrasado = AtrasadosItems.find(i => i.id == key);
            return Atrasado ? true : false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'Pendentes',
        text: 'Selecionar Pendentes',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            console.log(key)
            let Pendente = PendentesItems.find(i => i.id == key);
            return Pendente ? true : false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  const collapseHeader = (item, status) => 
    <>
      <Col span={20}>
          <StyledNameText>{item.aluno.nomeCompleto}</StyledNameText>
      </Col>
      <Col span={4}>
          <Text type={getStatusType(item.status)}>STATUS: {item.status}</Text>
      </Col>
    </>
  
const dataFormater = date => moment(date).format("DD/MM/YYYY");

const collapseContent = item =>
  (<StyledContent>
      <Row gutter={16}>
          <Col span={24}>
              <StyledText><strong>E-mail:</strong> {item.aluno?.emailInstitucional}</StyledText>
          </Col>
          <Col span={24}>
              <StyledText><strong>Ingresso do aluno:</strong> {dataFormater(item.aluno.dataIngresso)}</StyledText>
          </Col>
          <Col span={24}>
              <StyledText><strong>Alerta Pendente em:</strong> {dataFormater(moment(item.aluno.dataLimite).subtract(item.alerta.diasIntervalo, 'days'))}</StyledText>
          </Col>
          <Col span={24}>
              <StyledText><strong>Alerta Atrasado em:</strong> {dataFormater(moment(item.aluno.dataLimite).subtract(item.alerta.diasIntervalo, 'days').add(30, 'days'))}</StyledText>
          </Col>
          {item.dataEnvioEmail ?
            <Col span={24}>
                <StyledText><strong>Data de envio do Email:</strong> {dataFormater(item.dataEnvioEmail)}</StyledText>
            </Col> : null}
          <Col span={3}>
            <StyledButton onClick={() => handleSend(item.id)} type="primary" danger 
              style={{
                  color: '#FFFFFF'
                }}>
              ALERTAR
            </StyledButton>
          </Col>
          {!item.resolvido ?
            <>
              <Col span={4}>
                <StyledButton onClick={() => handleSolve(item.id, true)}
                  style={{
                      background: '#2EC615',
                      color: '#FFFFFF'
                    }}>
                  MARCAR COMO RESOLVIDO
                </StyledButton>
              </Col>
              <Col span={4}>
                <StyledButton type="text" onClick={() => {}}
                  style={{
                      width: "150px",
                      color: '#071D41'
                    }}>
                  Mais opções
                </StyledButton>
              </Col>
            </>
            :
            <Col span={4}>
              <StyledButton onClick={() => handleSolve(item.id, false)}
                style={{
                    background: '#AAAAAA',
                    color: '#FFFFFF'
                  }}>
                DESFAZER RESOLVIDO
              </StyledButton>
            </Col>}
      </Row>
  </StyledContent>)

  return <>
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
      <Table rowKey="id" rowSelection={rowSelection} columns={columns} pagination={false} dataSource={AtrasadosItems.concat(enviadosItems, PendentesItems, resolvidosItems, inativosItems)} />
    </Container>
  </>
}

export default BaseAlert;