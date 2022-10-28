import { Card, Checkbox, Col, Divider, Row, Timeline } from "antd";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { ClockCircleOutlined } from '@ant-design/icons';
import { StyledText, Subtext } from "./styles";
import { useQuery } from "@apollo/client";
import * as af from "../Alerts/AlertFilters";
import { StyledNameText, TitleStatus } from "../../components/Collapse/styles";

const DetailsDiscente = ({ studentSelect }) => {

  const data = useQuery(af.AlertsInStudent, {
    variables: {
      "where": {
        "alunoId": {
          "equals": studentSelect.id
        },
        "alertaId": {
          "in": [1,2,3,4,5,6,7,8]
        }
      }
    }
  });

  const [status, setStatus] = useState([
    {
      check: false,
      tipo: 'DEFESA',
      alertaId: 1,
      name: 'Defesa de dissertação'
    },
    {
      check: false,
      tipo: 'AGENDAMENTO_DEFESA',
      alertaId: 2,
      name: 'Agendamento de defesa'
    },
    {
      check:false,
      tipo: 'QUALIFICACAO',
      alertaId: 3,
      name: 'Qualificação'
    },
    {
      check: false,
      tipo: 'AGENDAMENTO_QUALIFICACAO',
      alertaId: 4,
      name: 'Agendamento de qualificação'
    },
    {
      check: false,
      tipo: 'PROFICIENCIA',
      alertaId: 5,
      name:  'Proficiência de idiomas'
    },
    {
      check: false,
      tipo: 'HOMOLOGACAO_DIPLOMA',
      alertaId: 6,
      name: 'Homologação de diploma'
    },
    {
      check: false,
      tipo: 'ESTAGIO_DOCENCIA',
      alertaId: 7,
      name: 'Estágio Docência'
    },
    {
      check:false,
      tipo: 'SUBMISSAO_ARTIGO',
      alertaId: 8,
      name: 'Submissão de artigo'
    }
  ])

  let listAlerts = []
  useEffect(() => {
    if(data.data) {
      listAlerts = JSON.parse(JSON.stringify(status))
      for(let i = 0 ; i < 8 ; i++) {
        data.data?.alertaAlunos.forEach(el => {
          if (listAlerts[i].alertaId === el.alertaId) {
            listAlerts[i].check = el.resolvido
          }
        });
      }
    setStatus(listAlerts)
    }
  }, [data.data])

  return (
    <>
      <Card title={<StyledText>{studentSelect.nomeCompleto}</StyledText>} size='small'>
        <Row style={{justifyContent: 'space-around'}}>
        <Col>
        <Row>
          <Card type="inner" title="CPF">
            {studentSelect.cpf}
          </Card>
          <Card
            style={{
              marginLeft: 16,
            }}
            type="inner"
            title="Matrícula"
          >
            {studentSelect.matricula}
          </Card>
        </Row>
        <Row>
          <Card
            style={{
              marginTop: 16,
            }}
            type="inner"
            title="Data de Ingresso"
          >
            {moment(studentSelect.dataIngresso).format("DD/MM/YYYY")}
          </Card>
          <Card
            style={{
              marginLeft: 16,
              marginTop: 16,
            }}
            type="inner"
            title="Data Limite"
          >
            {moment(studentSelect.dataLimite).format("DD/MM/YYYY")}
          </Card>
          
        </Row>
        <Card
          style={{
            marginTop: 16,
          }}
          type="inner"
          title="Email Institucional"
        >
          {studentSelect.emailInstitucional}
        </Card>
        <Card
          style={{
            marginTop: 16,
          }}
          type="inner"
          title="Email Pessoal"
        >
          {studentSelect.emailPessoal}
        </Card>
        <Card
          style={{
            marginTop: 16,
          }}
          type="inner"
          title="Orientador"
        >
          {studentSelect.orientador.nomeCompleto}
        </Card>
        <Card
          style={{
            marginTop: 16,
          }}
          type="inner"
          title="Co-orientador"
        >
          Inner Card content
        </Card>
        </Col>
        <Col>
        <StyledNameText >{studentSelect.ativo ? 'Aluno Ativo' : 'Aluno Inativo'}</StyledNameText>
        <Divider />
        <Row>
        <Timeline >
          <Subtext>Progresso:</Subtext>
          <Timeline.Item color={status[0].check ? "green" : "red"}>{status[0].name}</Timeline.Item>
          <Timeline.Item color={status[1].check ? "green" : "red"}>{status[1].name}</Timeline.Item>
          <Timeline.Item color={status[2].check ? "green" : "red"}>{status[2].name}</Timeline.Item>
          <Timeline.Item color={status[3].check ? "green" : "red"}>{status[3].name}</Timeline.Item>
          <Timeline.Item color={status[4].check ? "green" : "red"}>{status[4].name}</Timeline.Item>
          <Timeline.Item color={status[5].check ? "green" : "red"}>{status[5].name}</Timeline.Item>
          <Timeline.Item color={status[6].check ? "green" : "red"}>{status[6].name}</Timeline.Item>
          <Timeline.Item color={status[7].check ? "green" : "red"}>{status[7].name}</Timeline.Item>
        </Timeline>
        </Row>
        <Row>
          <Checkbox defaultChecked={true} disabled >Prorrogou o curso</Checkbox>
        </Row>
        </Col>
        </Row>
      </Card>
    </>
  );
};
export default DetailsDiscente;
