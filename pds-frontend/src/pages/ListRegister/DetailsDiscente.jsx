import { Card, Checkbox, Col, Row, Timeline } from "antd";
import React from "react";
import moment from "moment";
import { ClockCircleOutlined } from '@ant-design/icons';
import { StyledText, Subtext } from "./styles";

const DetailsDiscente = ({ studentSelect }) => {
  

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
        <Row>
        <Timeline >
          <Subtext>Progresso:</Subtext>
          <Timeline.Item>Proficiência de idiomas</Timeline.Item>
          <Timeline.Item>Estágio Docência</Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />} color="red">
          Submissão de artigos
          </Timeline.Item>
          <Timeline.Item>Agendamento de Qualificação</Timeline.Item>
          <Timeline.Item>Qualificação</Timeline.Item>
          <Timeline.Item>Agendamento da Desefa de Dissertação</Timeline.Item>
          <Timeline.Item>Defesa de Dissertação</Timeline.Item>
          <Timeline.Item>Homologação de diploma</Timeline.Item>
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
