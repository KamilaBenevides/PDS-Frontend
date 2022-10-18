import React from 'react';
import { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Row, Col, Button, Alert } from 'antd';
import MainStats from './MainStats';
import SpecificStats from './SpecificStats';
import moment from 'moment';
import * as path from '../../routes/paths';
import * as af from '../Alerts/AlertFilters';

import SubHeader from '../../components/SubHeader/SubHeader';

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
    });
  }, [data]);

  return (
    <>
      <SubHeader title={'Painel de Controle'}/>
      <div style={{ padding: '10px' }}>
        {alertSucesso}
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <SpecificStats title={"Proficiência"} Atrasados={stats.profAtrasados} enviados={stats.profEnviados} Pendentes={stats.profPendentes} detalhes={path.PROFICIENCY_ALERTS} />
          </Col>
          <Col span={8}>
            <SpecificStats title={"Agendamento de Qualificação"} Atrasados={stats.agQualiAtrasados} enviados={stats.agQualiEnviados} Pendentes={stats.agQualiPendentes} detalhes={path.QUALIFICATION_ALERTS}  />
          </Col>
          <Col span={8}>
            <SpecificStats title={"Qualificação"} Atrasados={stats.qualiAtrasados} enviados={stats.qualiEnviados} Pendentes={stats.qualiPendentes} detalhes={path.QUALIFICATION_ALERTS + '?alert=QUALIFICACAO'} />
          </Col>
          <Col span={8}>
            <SpecificStats title={"Agendamento de Defesa"} Atrasados={stats.agDefesaAtrasados} enviados={stats.agDefesaEnviados} Pendentes={stats.agDefesaPendentes} detalhes={path.DEFENSE_ALERTS} />
          </Col>
          <Col span={8}>
            <SpecificStats title={"Defesa"} Atrasados={stats.defesaAtrasados} enviados={stats.defesaEnviados} Pendentes={stats.defesaPendentes} detalhes={path.DEFENSE_ALERTS + '?alert=DEFESA'} />
          </Col>
        </Row>
      </div>
    </>
  )};

export default Dashboard;
