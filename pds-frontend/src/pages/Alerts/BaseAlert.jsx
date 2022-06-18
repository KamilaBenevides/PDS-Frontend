import InputSearch from '../../components/InputSearch/InputSearch';
import Collapse from '../../components/Collapse/Collapse';
import client from '../../api/apollo';
import { Alert } from 'antd';
import { Container, StyledNameText, StyledText, StyledButton, 
  StyledContent,
  StyledStatusName,
  StyledSelect} from './styles';
import { useEffect, useState, useReducer } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import moment from 'moment';
import * as af from './AlertFilters.js';
import { Col, Row, Typography, Table, Space } from 'antd';
const {Text, Title} = Typography;

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
          window.location.reload();
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

  const onSearch = value => {
    console.log("filter value ", value);
    if (state.showVencidos) {
      console.log("vencidos", vencidos);
      const filteredAlunos = vencidos.filter(entry =>
        entry?.aluno?.nomeCompleto.toLowerCase().includes(value.toLowerCase())
      );
      setVencidosItems(filteredAlunos);
    }
    if (state.showAbertos) {
      const filteredAlunos = abertos.filter(entry =>
        entry?.aluno?.nomeCompleto.toLowerCase().includes(value.toLowerCase())
      );
      setAbertosItems(filteredAlunos);
    }
    if(state.showEnviados) {
      const filteredAlunos = enviados.filter(entry =>
        entry?.aluno?.nomeCompleto.toLowerCase().includes(value.toLowerCase())
      );
      setEnviadosItems(filteredAlunos);
    }
    if (state.showInativos) {
      const filteredAlunos = inativos.filter(entry =>
        entry?.aluno?.nomeCompleto.toLowerCase().includes(value.toLowerCase())
      );
      setInativosItems(filteredAlunos);
    }
    if (state.showNaoIniciados) {
      const filteredAlunos = naoIniciados.filter(entry =>
        entry?.aluno?.nomeCompleto.toLowerCase().includes(value.toLowerCase())
      );
      setNaoIniciadosItems(filteredAlunos);
    }
    if (state.showResolvidos) {
      const filteredAlunos = resolvidos.filter(entry =>
        entry?.aluno?.nomeCompleto.toLowerCase().includes(value.toLowerCase())
      );
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
        <>{dataFormater(af.getVencimentoAlerta(item.aluno.dataLimite, item.alerta.diasIntervalo))}</>
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
              <StyledText><strong>Alerta aberto em:</strong> {dataFormater(moment(item.aluno.dataLimite).subtract(item.alerta.diasIntervalo, 'days'))}</StyledText>
          </Col>
          <Col span={24}>
              <StyledText><strong>Alerta vencido em:</strong> {dataFormater(moment(item.aluno.dataLimite).subtract(item.alerta.diasIntervalo, 'days').add(30, 'days'))}</StyledText>
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
      <Table columns={columns} pagination={false} dataSource={vencidosItems.concat(enviadosItems, abertosItems, naoIniciadosItems, resolvidosItems, inativosItems)} />
    </Container>
  </>
}

export default BaseAlert;