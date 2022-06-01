import React from 'react';
import { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Row, Col, Button } from 'antd';
import MainStats from './MainStats';
import SpecificStats from './SpecificStats';
import moment from 'moment';
import * as path from '../../routes/paths';

const Dashboard = () => {
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
    let vencidos = aa.filter(a => {
      let limiteFinal = moment(a.aluno.dataLimite);
      let inicioAlerta = limiteFinal.subtract(a.alerta.diasIntervalo, 'days');
      let hoje = moment();
      return (inicioAlerta <= hoje) && (inicioAlerta.add(30, 'days') <= hoje);
    });
    let enviados = aa.filter(a => {
        let limiteFinal = moment(a.aluno.dataLimite);
        let inicioAlerta = limiteFinal.subtract(a.alerta.diasIntervalo, 'days');
        let hoje = moment();
        return a.enviado && !(inicioAlerta.add(30, 'days') <= hoje);
    });
    let abertos = aa.filter(a => {
        let limiteFinal = moment(a.aluno.dataLimite);
        let inicioAlerta = limiteFinal.subtract(a.alerta.diasIntervalo, 'days');
        let hoje = moment();
        return (inicioAlerta <= hoje) && !a.enviado && !(inicioAlerta.add(30, 'days') <= hoje);
    });
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
    <div style={{ padding: '10px' }}>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <SpecificStats title={"Total"} vencidos={stats.totalVencidos} enviados={stats.totalEnviados} abertos={stats.totalAbertos} detalhes={''} />
        </Col>
        <Col span={8}>
          <SpecificStats title={"Proficiencia"} vencidos={stats.profVencidos} enviados={stats.profEnviados} abertos={stats.profAbertos} detalhes={path.PROFICIENCY_ALERTS} />
        </Col>
        <Col span={8}>
          <SpecificStats title={"Agendamento de Qualificacao"} vencidos={stats.agQualiVencidos} enviados={stats.agQualiEnviados} abertos={stats.agQualiAbertos} detalhes={path.QUALIFICATION_ALERTS}  />
        </Col>
        <Col span={8}>
          <SpecificStats title={"Qualificacao"} vencidos={stats.qualiVencidos} enviados={stats.qualiEnviados} abertos={stats.qualiAbertos} detalhes={path.QUALIFICATION_ALERTS} />
        </Col>
        <Col span={8}>
          <SpecificStats title={"Agendamento de Defesa"} vencidos={stats.agDefesaVencidos} enviados={stats.agDefesaEnviados} abertos={stats.agDefesaAbertos} detalhes={path.DEFENSE_ALERTS} />
        </Col>
        <Col span={8}>
          <SpecificStats title={"Defesa"} vencidos={stats.defesaVencidos} enviados={stats.defesaEnviados} abertos={stats.defesaAbertos} detalhes={path.DEFENSE_ALERTS} />
        </Col>
      </Row>
    </div>
  )};

export default Dashboard;
