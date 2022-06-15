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
    totalVencidos: 0,
    totalEnviados: 0,
    totalAbertos: 0,
    profVencidos: 0,
    profEnviados: 0,
    profAbertos: 0,
    agQualiVencidos: 0,
    agQualiEnviados: 0,
    agQualiAbertos: 0,
    qualiVencidos: 0,
    qualiEnviados: 0,
    qualiAbertos: 0,
    agDefesaVencidos: 0,
    agDefesaEnviados: 0,
    agDefesaAbertos: 0,
    defesaVencidos: 0,
    defesaEnviados: 0,
    defesaAbertos: 0,
  });

  const totals = (aa) => {
    let vencidos = af.filterVencidos(aa);
    let enviados = af.filterEnviados(aa);
    let abertos = af.filterAbertos(aa);
    return { vencidos: vencidos.length, enviados: enviados.length, abertos: abertos.length };
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
      totalVencidos: total.vencidos,
      totalEnviados: total.enviados,
      totalAbertos: total.abertos,
      profVencidos: prof.vencidos,
      profEnviados: prof.enviados,
      profAbertos: prof.abertos,
      agQualiVencidos: agQuali.vencidos,
      agQualiEnviados: agQuali.enviados,
      agQualiAbertos: agQuali.abertos,
      qualiVencidos: quali.vencidos,
      qualiEnviados: quali.enviados,
      qualiAbertos: quali.abertos,
      agDefesaVencidos: agDefesa.vencidos,
      agDefesaEnviados: agDefesa.enviados,
      agDefesaAbertos: agDefesa.abertos,
      defesaVencidos: defesa.vencidos,
      defesaEnviados: defesa.enviados,
      defesaAbertos: defesa.abertos,
    });
  }, [data]);

  return (
    <>
      <SubHeader title={'Painel de Controle'}/>
      <div style={{ padding: '10px' }}>
        {alertSucesso}
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <SpecificStats title={"Total"} vencidos={stats.totalVencidos} enviados={stats.totalEnviados} abertos={stats.totalAbertos} detalhes={''} setSucesso={setSucesso} setErro={setErro} />
          </Col>
          <Col span={8}>
            <SpecificStats title={"Proficiência"} vencidos={stats.profVencidos} enviados={stats.profEnviados} abertos={stats.profAbertos} detalhes={path.PROFICIENCY_ALERTS} />
          </Col>
          <Col span={8}>
            <SpecificStats title={"Agendamento de Qualificação"} vencidos={stats.agQualiVencidos} enviados={stats.agQualiEnviados} abertos={stats.agQualiAbertos} detalhes={path.QUALIFICATION_ALERTS}  />
          </Col>
          <Col span={8}>
            <SpecificStats title={"Qualificação"} vencidos={stats.qualiVencidos} enviados={stats.qualiEnviados} abertos={stats.qualiAbertos} detalhes={path.QUALIFICATION_ALERTS + '?alert=QUALIFICACAO'} />
          </Col>
          <Col span={8}>
            <SpecificStats title={"Agendamento de Defesa"} vencidos={stats.agDefesaVencidos} enviados={stats.agDefesaEnviados} abertos={stats.agDefesaAbertos} detalhes={path.DEFENSE_ALERTS} />
          </Col>
          <Col span={8}>
            <SpecificStats title={"Defesa"} vencidos={stats.defesaVencidos} enviados={stats.defesaEnviados} abertos={stats.defesaAbertos} detalhes={path.DEFENSE_ALERTS + '?alert=DEFESA'} />
          </Col>
        </Row>
      </div>
    </>
  )};

export default Dashboard;
