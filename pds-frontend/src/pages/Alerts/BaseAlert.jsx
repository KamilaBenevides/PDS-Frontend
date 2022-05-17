import InputSearch from '../../components/InputSearch/InputSearch';
import Collapse from '../../components/Collapse/Collapse';
import client from '../../api/apollo';
import { Container } from './styles';
import { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import moment from 'moment';
import * as af from './AlertFilters.js';

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

  return <>
    <Container>
      {header}
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

export default BaseAlert;