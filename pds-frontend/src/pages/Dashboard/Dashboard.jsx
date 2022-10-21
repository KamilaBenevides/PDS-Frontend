import React from 'react';
import { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Row, Col, Button, Alert } from 'antd';
import MainStats from './MainStats';
import SpecificStats from './SpecificStats';
import moment from 'moment';
import * as path from '../../routes/paths';
import * as af from '../Alerts/AlertFilters';

import { StyleContainer } from '../../components/Layout/styles';
import SubHeader from '../../components/SubHeader/SubHeader';
import { TitleHeader } from '../../components/SubHeader/styles';

const Dashboard = () => {

  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState(false);

  let alertSucesso = <></>;
  if (sucesso) {
      alertSucesso = <Alert
          message="Sucesso"
          description="E-mails enviados com sucesso!"
          type="success"
          showIcon
          closable
      />
  } else if (erro) {
      alertSucesso = <Alert
          message="Erro!"
          description="Ocorreu um erro ao enviar os e-mails."
          type="error"
          showIcon
          closable
      />
  }

  const query = gql`
  query AlertaAlunos($where: AlertaAlunoWhereInput) {
    alertaAlunos(where: $where) {
      enviado
      aluno {
        dataLimite
      }
      alerta {
        diasIntervalo
        tipo
      }
    }
  }`;

  const { data, loading, error } = useQuery(query, {
    variables: {
      "where": {
        "AND": [
          {
            "resolvido": {
              "equals": false
            }
          },
          {
            "ativo": {
              "equals": true
            }
          }
        ]
      }
    }
  });

  const [stats, setStats] = useState({
    totalAtrasados: 0,
    totalEnviados: 0,
    totalPendentes: 0,
    profAtrasados: 0,
    profEnviados: 0,
    profPendentes: 0,
    agQualiAtrasados: 0,
    agQualiEnviados: 0,
    agQualiPendentes: 0,
    qualiAtrasados: 0,
    qualiEnviados: 0,
    qualiPendentes: 0,
    agDefesaAtrasados: 0,
    agDefesaEnviados: 0,
    agDefesaPendentes: 0,
    defesaAtrasados: 0,
    defesaEnviados: 0,
    defesaPendentes: 0,
  });

  const totals = (aa) => {
    let Atrasados = af.filterAtrasados(aa);
    let enviados = af.filterEnviados(aa);
    let Pendentes = af.filterPendentes(aa);
    return { Atrasados: Atrasados.length, enviados: enviados.length, Pendentes: Pendentes.length };
  }

  useEffect(() => {
    let aa = data ? data.alertaAlunos : [];
    const total = totals(aa);
    const prof = totals(aa.filter(a => a.alerta.tipo === 'PROFICIENCIA'));
    const agQuali = totals(aa.filter(a => a.alerta.tipo === 'AGENDAMENTO_QUALIFICACAO'));
    const quali = totals(aa.filter(a => a.alerta.tipo === 'QUALIFICACAO'));
    const agDefesa = totals(aa.filter(a => a.alerta.tipo === 'AGENDAMENTO_DEFESA'));
    const defesa = totals(aa.filter(a => a.alerta.tipo === 'DEFESA'));
    const articleSubmission = totals(aa.filter(a => a.alerta.tipo === 'SUBMISSAO_ARTIGO'))
    const internship = totals(aa.filter(a => a.alerta.tipo === 'ESTAGIO_DOCENCIA'))
    const diplomaApproval = totals(aa.filter(a => a.alerta.tipo === 'HOMOLOGACAO_DIPLOMA'))
    setStats({
      totalAtrasados: total.Atrasados,
      totalEnviados: total.enviados,
      totalPendentes: total.Pendentes,
      profAtrasados: prof.Atrasados,
      profEnviados: prof.enviados,
      profPendentes: prof.Pendentes,
      agQualiAtrasados: agQuali.Atrasados,
      agQualiEnviados: agQuali.enviados,
      agQualiPendentes: agQuali.Pendentes,
      qualiAtrasados: quali.Atrasados,
      qualiEnviados: quali.enviados,
      qualiPendentes: quali.Pendentes,
      agDefesaAtrasados: agDefesa.Atrasados,
      agDefesaEnviados: agDefesa.enviados,
      agDefesaPendentes: agDefesa.Pendentes,
      defesaAtrasados: defesa.Atrasados,
      defesaEnviados: defesa.enviados,
      defesaPendentes: defesa.Pendentes,
      articleSubmissionAtrasados: articleSubmission.Atrasados,
      articleSubmissionEnviados: articleSubmission.enviados,
      articleSubmissionPendentes: articleSubmission.Pendentes,
      internshipAtrasados: internship.Atrasados,
      internshipEnviados: internship.enviados,
      internshipPendentes: internship.Pendentes,
      diplomaApprovalAtrasados: diplomaApproval.Atrasados,
      diplomaApprovalEnviados: diplomaApproval.enviados,
      diplomaApprovalPendentes: diplomaApproval.Pendentes
    });
  }, [data]);

  return (
    <StyleContainer>
      {/* <SubHeader style={{padding: '0px'}} title='Painel de Controle'/> */}
      <TitleHeader>Painel de Controle</TitleHeader>
      {/* <div style={{ padding: '30px' }}> */}
        {alertSucesso}
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <SpecificStats title={"Proficiência de idiomas"} Atrasados={stats.profAtrasados} enviados={stats.profEnviados} Pendentes={stats.profPendentes} detalhes={path.PROFICIENCY_ALERTS} />
          </Col>
          <Col span={8}>
            <SpecificStats title={"Agendamento de Qualificação"} Atrasados={stats.agQualiAtrasados} enviados={stats.agQualiEnviados} Pendentes={stats.agQualiPendentes} detalhes={path.QUALIFICATION_ALERTS}  />
          </Col>
          <Col span={8}>
            <SpecificStats title={"Qualificação"} Atrasados={stats.qualiAtrasados} enviados={stats.qualiEnviados} Pendentes={stats.qualiPendentes} detalhes={path.QUALIFICATION_ALERTS + '?alert=QUALIFICACAO'} />
          </Col>
          <Col span={8}>
            <SpecificStats title={"Agendamento de Defesa de dissertação"} Atrasados={stats.agDefesaAtrasados} enviados={stats.agDefesaEnviados} Pendentes={stats.agDefesaPendentes} detalhes={path.DEFENSE_ALERTS} />
          </Col>
          <Col span={8}>
            <SpecificStats title={"Defesa da dissertação"} Atrasados={stats.defesaAtrasados} enviados={stats.defesaEnviados} Pendentes={stats.defesaPendentes} detalhes={path.DEFENSE_ALERTS + '?alert=DEFESA'} />
          </Col>
          <Col span={8}>
            <SpecificStats title={"Submissão de artigos"} Atrasados={stats.articleSubmissionAtrasados} enviados={stats.articleSubmissionEnviados} Pendentes={stats.articleSubmissionPendentes} detalhes={path.SUBMISSAO_ARTIGO + '?alert=SUBMISSAO_ARTIGO'} />
          </Col>
          <Col span={8}>
            <SpecificStats title={"Estágio Docência"} Atrasados={stats.internshipAtrasados} enviados={stats.internshipEnviados} Pendentes={stats.internshipPendentes} detalhes={path.ESTAGIO_DOCENCIA + '?alert=ESTAGIO_DOCENCIA'} />
          </Col>
          <Col span={8}>
            <SpecificStats title={"Homologação de diploma"} Atrasados={stats.diplomaApprovalAtrasados} enviados={stats.diplomaApprovalEnviados} Pendentes={stats.diplomaApprovalPendentes} detalhes={path.HOMOLOGACAO_DIPLOMA + '?alert=HOMOLOGACAO_DIPLOMA'} />
          </Col>
        </Row>
      {/* </div> */}
    </StyleContainer>
  )};

export default Dashboard;
