import InputSearch from '../../components/InputSearch/InputSearch';
import Collapse from '../../components/Collapse/Collapse';
import client from '../../api/apollo';
import { Container, StyledNameText, StyledText, StyledButton, StyledContent , StyledStatusName} from './styles';
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    let aa = queryAlertaAlunos.data?.alertaAlunos ? queryAlertaAlunos.data.alertaAlunos : [];
    
    let vencidos = af.filterVencidos(aa);
    setVencidos(vencidos);

    let enviados = af.filterEnviados(aa);
    setEnviados(enviados);

    let abertos = af.filterAbertos(aa);
    setAbertos(abertos);

    let naoIniciados = af.filterNaoIniciados(aa);
    setNaoIniciados(naoIniciados);

    setAlertas(aa);
  }, [queryAlertaAlunos.data]);

  useEffect(() => {
    let aa = queryResolvidos.data?.alertaAlunos ? queryResolvidos.data.alertaAlunos : [];
    let aa_status = aa.map(e => ({...e, status: "Resolvido"}));
    setResolvidos(aa_status);
  }, [queryResolvidos.data]);
  
  useEffect(() => {
    let aa = queryInativos.data?.alertaAlunos ? queryInativos.data.alertaAlunos : [];
    let aa_status = aa.map(e => ({...e, status: "Inativo"}));
    setInativos(aa_status);
  }, [queryInativos.data]);

  const onSearch = value => console.log(value);
  const header = <InputSearch placeholder={"Buscar"} onSearch={onSearch} />
  
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
          {/* <Col span={24}>
              <StyledText><strong>Status:</strong> {item.ativo ? "Ativo" : "Inativo"}</StyledText>
          </Col> */}
          <Col span={3}>
            <StyledButton type="primary" danger 
              style={{
                  color: '#FFFFFF'
                }}>
              ALERTAR
            </StyledButton>
          </Col>
          {!item.resolvido ?
            <Col span={4}>
              <StyledButton onClick={() => handleSolve(item.id, true)}
                style={{
                    background: '#2EC615',
                    color: '#FFFFFF'
                  }}>
                REALIZADO
              </StyledButton>
            </Col>
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
      {header}
      {!vencidos.length ? null : 
      <>
        <h4>Vencidos</h4>
        <Collapse items={vencidos} header={collapseHeader} content={collapseContent}/>
      </>}
      {!enviados.length ? null : 
      <>
        <h4>Enviados</h4>
        <Collapse items={enviados} header={collapseHeader} content={collapseContent}/>
      </>}
      {!abertos.length ? null : 
      <>
        <h4>Abertos</h4>
        <Collapse items={abertos} header={collapseHeader} content={collapseContent}/>
      </>}
      {!naoIniciados.length ? null : 
      <>
        <h4>Não Iniciados</h4>
        <Collapse items={naoIniciados} header={collapseHeader} content={collapseContent}/>
      </>}
      {!resolvidos.length ? null : 
      <>
        <h4>Resolvidos</h4>
        <Collapse items={resolvidos} header={collapseHeader} content={collapseContent}/>
      </>}
      {!inativos.length ? null : 
      <>
        <h4>Inativos</h4>
        <Collapse items={inativos} header={collapseHeader} content={collapseContent}/>
      </>}
    </Container>
  </>
}

export default BaseAlert;