
import { useMutation, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import * as af from '../Alerts/AlertFilters';

const SetAlert = (alert) => {
  console.log('aqui estamos', alert)
  // handleSolve(student.id, resolv)
 

  // const [solveAlert] = useMutation(af.solveAlertMutation);
  
  const 
  queryAlertaAlunos = useQuery(af.baseQuery, {
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
              equals: alert
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
              equals: alert
            }
          }
        }
      }
    }
  });
  
  // useEffect(() => {
  //   handleSolve(student, resolv)
  // },[ student, resolv ])

  // const handleSolve = (student, resolv) => {
    // solveAlert({
    //   variables: {
    //       data: {
    //         resolvido: {
    //           set: resolv
    //         }
    //       },
    //       updateAlertaAlunoWhere2: {
    //         id: student.id
    //       }
    //   }}).then(() => {
    //     console.log('teste')
    //       queryAlertaAlunos.refetch();
    //       queryResolvidos.refetch();
    //   });
  // }
}
export default SetAlert;