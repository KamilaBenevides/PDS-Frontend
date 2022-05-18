import InputSearch from '../../components/InputSearch/InputSearch';
import Collapse from '../../components/Collapse/Collapse';
import client from '../../api/apollo';
import { Container, StyledNameText, StyledText, StyledButton, StyledContent } from './styles';
import { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import moment from 'moment';
import * as af from './AlertFilters.js';
import { Col, Row } from 'antd';

const BaseAlert = ({alertType}) => {

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
    setResolvidos(aa);
  }, [queryResolvidos.data]);
  
  useEffect(() => {
    let aa = queryInativos.data?.alertaAlunos ? queryInativos.data.alertaAlunos : [];
    setInativos(aa);
  }, [queryInativos.data]);

  const onSearch = value => console.log(value);
  const header = <InputSearch placeholder={"Buscar"} onSearch={onSearch} />

  const collapseHeader = item => 
  <Col span={24}>
      <StyledNameText>{item.aluno.nomeCompleto}</StyledNameText>
  </Col>
  
const dataFormater = date => moment(date).format("DD/MM/YYYY");

const collapseVencidosContent = item =>
(<StyledContent>
    <Row gutter={16}>
        <Col span={24}>
            <StyledText><strong>E-mail:</strong> {item.aluno?.emailPessoal}</StyledText>
        </Col>
        <Col span={24}>
            <StyledText><strong>Prazo máximo:</strong> {dataFormater(item.aluno.dataLimite)}</StyledText>
            {/* <StyledText><strong>Prazo máximo:</strong> {item.dataLimite}</StyledText> */}
        </Col>
        <Col span={24}>
            <StyledText><strong>Status:</strong> {item.ativo ? "Ativo" : "Inativo"}</StyledText>
        </Col>
        <Col span={3}>
        <StyledButton type="primary" danger 
        style={{
          background: '#838EA0',
            color: '#FFFFFF'
          }}>
        INATIVAR
        </StyledButton>
        </Col>
        {/* <Col span={3}>
        <StyledButton type="primary" danger 
        style={{
            color: '#FFFFFF'
          }}>
        ALERTAR
        </StyledButton>
        </Col>
        <Col span={4}>
        <StyledButton type="primary" 
        style={{
            background: '#2EC615',
            color: '#FFFFFF'
          }}>
        AGENDAMENTO FEITO
        </StyledButton>
        </Col> */}
    </Row>
</StyledContent>)

const collapseContent = item =>
  (<StyledContent>
      <Row gutter={16}>
          <Col span={24}>
              <StyledText><strong>E-mail:</strong> {item.aluno?.emailPessoal}</StyledText>
          </Col>
          <Col span={24}>
              <StyledText><strong>Prazo máximo:</strong> {dataFormater(item.aluno.dataLimite)}</StyledText>
          </Col>
          <Col span={24}>
              <StyledText><strong>Status:</strong> {item.ativo ? "Ativo" : "Inativo"}</StyledText>
          </Col>
          <Col span={3}>
          <StyledButton type="primary" danger 
          style={{
              color: '#FFFFFF'
            }}>
          ALERTAR
          </StyledButton>
          </Col>
          <Col span={4}>
          <StyledButton type="primary" 
          style={{
              background: '#2EC615',
              color: '#FFFFFF'
            }}>
          AGENDAMENTO FEITO
          </StyledButton>
          </Col>
      </Row>
  </StyledContent>)

  return <>
    <Container>
      {header}
      {!vencidos.length ? null : 
      <>
        <h4>Vencidos</h4>
        <Collapse items={vencidos} header={collapseHeader} content={collapseVencidosContent}/>
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
        <Collapse items={inativos} header={collapseHeader} content={collapseVencidosContent}/>
      </>}
      {/* <h4>Vencidos</h4> */}
      {/* <ul>
        {
          
          vencidos.map((alerta) =>
            <li key={alerta.id}>{alerta.aluno.nomeCompleto}</li>
          )
        }
      </ul> */}
      {/* <h4>Enviados</h4>
      <ul>
        {
          enviados.map((alerta) =>
            <li key={alerta.id}>{alerta.aluno.nomeCompleto}</li>
          )
        }
      </ul> */}
      {/* <h4>Abertos</h4>
      <ul>
        {
          abertos.map((alerta) =>
            <li key={alerta.id}>{alerta.aluno.nomeCompleto}</li>
          )
        }
      </ul> */}
      {/* <h4>Nao Iniciados</h4>
      <ul>
        {
          naoIniciados.map((alerta) =>
            <li key={alerta.id}>{alerta.aluno.nomeCompleto}</li>
          )
        }
      </ul> */}
      {/* <h4>Resolvidos</h4>
      <ul>
        {
          resolvidos.map((alerta) =>
            <li key={alerta.id}>{alerta.aluno.nomeCompleto}</li>
          )
        }
      </ul> */}
      {/* <h4>Inativos</h4>
      <ul>
        {
          inativos.map((alerta) =>
            <li key={alerta.id}>{alerta.aluno.nomeCompleto}</li>
          )
        }
      </ul> */}
    </Container>
  </>
}

export default BaseAlert;