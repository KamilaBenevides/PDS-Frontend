import React from "react";

import { useEffect, useState } from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";
import * as af from "../Alerts/AlertFilters";
import { Button, Form } from "antd";
import { ButtonSave } from "./styles";

const ProgressStudent = ({ studentSelect }) => {

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
        // eslint-disable-next-line no-loop-func
        data.data?.alertaAlunos.forEach(el => {
          if(listAlerts[i].alertaId === el.alertaId) {
            listAlerts[i].check = el.resolvido
          }
        });
      }
      setStatus(listAlerts)
    }
  }, [data.data], status)
  
  const handleChange = (event) => {
    let listAlerts = []
    listAlerts = JSON.parse(JSON.stringify(status))
    const list = {
      'Defesa de dissertação': 0,
      'Agendamento de defesa': 1,
      'Qualificação': 2,
      'Agendamento de qualificação': 3,
      'Proficiência de idiomas': 4,
      'Homologação de diploma': 5, 
      'Estágio Docência': 6, 
      'Submissão de artigo': 7
    }
      listAlerts[list[event.target.name]].check = event.target.checked
      setStatus(listAlerts)
    
  };
  const [solveManyAlerts] = useMutation(af.solveManyAlertsMutation);
  const handleSolve = () => {
    let idsSolve = []
    let idsNotSolve = []
    for(let i = 0 ; i < 8 ; i++) {
      if(status[i].check) {
        idsSolve.push(status[i].alertaId)
      } else {
        idsNotSolve.push(status[i].alertaId)
      }
    }
    console.log('true ', idsSolve)
    console.log('false', idsNotSolve)
    solveManyAlerts({
      variables: {
        data: {
          resolvido: {
            set: true
          }
        },
        where: {
          alunoId: {
            equals: studentSelect.id
          },
          alertaId: {
            in: idsSolve
          }
        }
      }
    }).then(() => {
      data.refetch();
    })
    solveManyAlerts({
      variables: {
        data: {
          resolvido: {
            set: false
          }
        },
        where: {
          alunoId: {
            equals: studentSelect.id
          },
          alertaId: {
            in: idsNotSolve
          }
        }
      }
    }).then(() => {
      data.refetch();
    })
  }

  return (
    <Form>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={status[0].check}
              onChange={handleChange}
              name={status[0].name}
            />
          }
          label={status[0].name}
        />
        <FormControlLabel
          control={
            <Checkbox checked={status[1].check}
            onChange={handleChange}
            name={status[1].name} />
          }
          label={status[1].name}
        />
        <FormControlLabel
          control={
            <Checkbox
            checked={status[2].check}
            onChange={handleChange}
            name={status[2].name}
            />
          }
          label={status[2].name}
        />
        <FormControlLabel
          control={
            <Checkbox
            checked={status[3].check}
            onChange={handleChange}
            name={status[3].name}
            />
          }
          label={status[3].name}
        />
        <FormControlLabel
          control={
            <Checkbox
            checked={status[4].check}
            onChange={handleChange}
            name={status[4].name}
            />
          }
          label={status[4].name}
        />
        <FormControlLabel
          control={
            <Checkbox
            checked={status[5].check}
            onChange={handleChange}
            name={status[5].name}
            />
          }
          label={status[5].name}
        />
        <FormControlLabel
          control={
            <Checkbox
            checked={status[6].check}
            onChange={handleChange}
            name={status[6].name}
            />
          }
          label={status[6].name}
        />
        <FormControlLabel
          control={
            <Checkbox checked={status[7].check}
            onChange={handleChange}
            name={status[7].name}/>
          }
          label={status[7].name}
        />
      </FormGroup>
      <ButtonSave  onClick={handleSolve} block>Salvar Progresso</ButtonSave>
    </Form>
  );
};
export default ProgressStudent;
