import InputSearch from '../../../components/InputSearch/InputSearch';
import Collapse from '../../../components/Collapse/Collapse';
import client from '../../../api/apollo';
import { Container } from './styles';
import { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import moment from 'moment';

const ProficiencyAlerts = () => {

  const queryAlertaAlunos = useQuery(gql
    `query AlertaAlunos($where: AlertaAlunoWhereInput) {
        alertaAlunos(where: $where) {
          id
          ativo
          enviado
          resolvido
          dataEnvioEmail
          aluno {
            id
            nomeCompleto
            dataLimite
            emailInstitucional
            emailPessoal
            orientador {
              id
              nomeCompleto
              email
            }
          }
          alerta {
            id
            diasIntervalo
            corpoEmail
            nome
            tipo
          }
        }
    }`, {
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
              equals: "PROFICIENCIA"
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
    
    let vencidos = aa.filter(a => {
      let limiteFinal = moment(a.aluno.dataLimite);
      let inicioAlerta = limiteFinal.subtract(a.alerta.diasIntervalo, 'days');
      let hoje = moment();
      return (inicioAlerta <= hoje) && (inicioAlerta.add(30) <= hoje)
    });
    setVencidos(vencidos);

    let enviados = aa.filter(a => {
      let limiteFinal = moment(a.aluno.dataLimite);
      let inicioAlerta = limiteFinal.subtract(a.alerta.diasIntervalo, 'days');
      let hoje = moment();
      return a.enviado && !(inicioAlerta.add(30) <= hoje);
    });
    setEnviados(enviados);

    let abertos = aa.filter(a => {
      let limiteFinal = moment(a.aluno.dataLimite);
      let inicioAlerta = limiteFinal.subtract(a.alerta.diasIntervalo, 'days');
      let hoje = moment();
      return (inicioAlerta <= hoje) && !(inicioAlerta.add(30) <= hoje) && !a.enviado;
    });
    setAbertos(abertos);

    let naoIniciados = aa.filter(a => {
      let limiteFinal = moment(a.aluno.dataLimite);
      let inicioAlerta = limiteFinal.subtract(a.alerta.diasIntervalo, 'days');
      let hoje = moment();
      return !(inicioAlerta <= hoje) && !a.enviado;
    });
    setNaoIniciados(naoIniciados);

    setAlertas(aa);
  }, [queryAlertaAlunos.data]);

  const onSearch = value => console.log(value);
  const header = <InputSearch placeholder={"Buscar"} onSearch={onSearch} />

  return <>
    <Container>
      {header}
      <h4>Todos</h4>
      <ul>
        {
          alertas.map((alerta) =>
            <li key={alerta.id + 't'}>{alerta.aluno.nomeCompleto}</li>
          )
        }
      </ul>
      <h4>Vencidos</h4>
      <ul>
        {
          vencidos.map((alerta) =>
            <li key={alerta.id}>{alerta.aluno.nomeCompleto}</li>
          )
        }
      </ul>
      <h4>Enviados</h4>
      <ul>
        {
          enviados.map((alerta) =>
            <li key={alerta.id}>{alerta.aluno.nomeCompleto}</li>
          )
        }
      </ul>
      <h4>Abertos</h4>
      <ul>
        {
          abertos.map((alerta) =>
            <li key={alerta.id}>{alerta.aluno.nomeCompleto}</li>
          )
        }
      </ul>
      <h4>Nao Iniciados</h4>
      <ul>
        {
          naoIniciados.map((alerta) =>
            <li key={alerta.id}>{alerta.aluno.nomeCompleto}</li>
          )
        }
      </ul>
      <h4>Resolvidos</h4>
      <ul>
        {
          resolvidos.map((alerta) =>
            <li key={alerta.id}>{alerta.aluno.nomeCompleto}</li>
          )
        }
      </ul>
      <h4>Inativos</h4>
      <ul>
        {
          inativos.map((alerta) =>
            <li key={alerta.id}>{alerta.aluno.nomeCompleto}</li>
          )
        }
      </ul>
    </Container>
  </>
}

export default ProficiencyAlerts;