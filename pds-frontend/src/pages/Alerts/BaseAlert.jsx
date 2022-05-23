import InputSearch from '../../components/InputSearch/InputSearch';
import Collapse from '../../components/Collapse/Collapse';
import client from '../../api/apollo';
import { Container, StyledNameText, StyledText, StyledButton, 
  StyledContent,
  StyledStatusName,
  StyledSelect} from './styles';
import { useEffect, useState, useReducer } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import moment from 'moment';
import * as af from './AlertFilters.js';
import { Col, Row, Typography } from 'antd';
const {Text} = Typography;

const BaseAlert = ({alertType}) => {

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
        entry?.aluno?.nomeCompleto.includes(value)
      );
      setVencidosItems(filteredAlunos);
    }
    if (state.showAbertos) {
      const filteredAlunos = abertos.filter(entry =>
        entry?.aluno?.nomeCompleto.includes(value)
      );
      setAbertosItems(filteredAlunos);
    }
    if(state.showEnviados) {
      const filteredAlunos = enviados.filter(entry =>
        entry?.aluno?.nomeCompleto.includes(value)
      );
      setEnviadosItems(filteredAlunos);
    }
    if (state.showInativos) {
      const filteredAlunos = inativos.filter(entry =>
        entry?.aluno?.nomeCompleto.includes(value)
      );
      setInativosItems(filteredAlunos);
    }
    if (state.showNaoIniciados) {
      const filteredAlunos = naoIniciados.filter(entry =>
        entry?.aluno?.nomeCompleto.includes(value)
      );
      setNaoIniciadosItems(filteredAlunos);
    }
    if (state.showResolvidos) {
      const filteredAlunos = resolvidos.filter(entry =>
        entry?.aluno?.nomeCompleto.includes(value)
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
  
  const [state, dispatch] = useReducer(reducer, init);

  function reducer(state, action) {
    switch (action.type) {
      case 'vencidos':
        console.log("state ", state);
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
      <Col span={18}>
        <InputSearch placeholder={"Buscar"} onSearch={onSearch} />
      </Col>
      <Col span={6}>
        <StyledSelect 
          options={filterOptions} 
          onChange={onFilterSelectChange}
          defaultValue="todos"/>
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
            <StyledButton type="primary" danger 
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
                  REALIZADO
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
  
  // const resultadosPesquisa = (<>
  //     <h4>Resultados</h4>
  //     <Collapse items={searchResults} header={collapseHeader} content={collapseContent}/>
  //   </>)

  // const listaPadrao = (<>
  //   {!vencidos.length ? null : 
  //   <>
  //     <h4>Vencidos</h4>
  //     <Collapse items={vencidos} header={collapseHeader} content={collapseContent}/>
  //   </>}
  //   {!enviados.length ? null : 
  //   <>
  //     <h4>Enviados</h4>
  //     <Collapse items={enviados} header={collapseHeader} content={collapseContent}/>
  //   </>}
  //   {!abertos.length ? null : 
  //   <>
  //     <h4>Abertos</h4>
  //     <Collapse items={abertos} header={collapseHeader} content={collapseContent}/>
  //   </>}
  //   {!naoIniciados.length ? null : 
  //   <>
  //     <h4>Não Iniciados</h4>
  //     <Collapse items={naoIniciados} header={collapseHeader} content={collapseContent}/>
  //   </>}
  //   {!resolvidos.length ? null : 
  //   <>
  //     <h4>Resolvidos</h4>
  //     <Collapse items={resolvidos} header={collapseHeader} content={collapseContent}/>
  //   </>}
  //   {!inativos.length ? null : 
  //   <>
  //     <h4>Inativos</h4>
  //     <Collapse items={inativos} header={collapseHeader} content={collapseContent}/>
  //   </>}</>)
  
  return <>
    <Container>
      {header}
      {state.showVencidos && vencidosItems.length ? 
      <>
      <br />
        <Collapse items={vencidosItems} header={collapseHeader} content={collapseContent}/>
      </>: null}
      {state.showEnviados && enviadosItems.length ? 
      <>
      <br />
        <Collapse items={enviadosItems} header={collapseHeader} content={collapseContent}/>
      </>: null}
      {state.showAbertos && naoIniciadosItems.length ? 
      <>
      <br />
        <Collapse items={abertosItems} header={collapseHeader} content={collapseContent}/>
      </>: null}
      {state.showNaoIniciados && naoIniciadosItems.length ? 
      <>
      <br />
        <Collapse items={naoIniciadosItems} header={collapseHeader} content={collapseContent}/>
      </> : null}
      {state.showResolvidos && resolvidosItems.length ? 
      <>
      <br />
        <Collapse items={resolvidosItems} header={collapseHeader} content={collapseContent}/>
      </> : null}
      {state.showInativos && inativosItems.length ? 
      <>
      <br />
        <Collapse items={inativosItems} header={collapseHeader} content={collapseContent}/>
      </>: null}
    </Container>
  </>
}

export default BaseAlert;