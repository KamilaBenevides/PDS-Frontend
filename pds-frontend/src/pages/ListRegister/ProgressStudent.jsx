import React from "react";

import { useEffect, useState } from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";
import * as af from "../Alerts/AlertFilters";

const ProgressStudent = ({ studentSelect }) => {
  

  const [proficienciaCheck, setProficienciaCheck] = useState(true);
  const [estagioCheck, setEstagioCheck] = useState(true);
  const [submissaoCheck, setSubmissaoCheck] = useState(true);
  const [qualificacaoCheck, setQualificacaoCheck] = useState(true);
  const [agendamentoQualificacaoCheck, setAgendamentoQualificacaoCheck] =
    useState(true);
  const [agendamentoDefesaCheck, setAgendamentoDefesaCheck] = useState(true);
  const [defesaCheck, setDefesaCheck] = useState(true);
  const [homologacaoCheck, setHomologacaoCheck] = useState(true);

  const handleProficienciaCheck = (e) => {
    console.log(studentSelect);
    console.log(e);

    setProficienciaCheck(e.target.checked);
  };
  const handleEstagioCheck = (e) => {
    setEstagioCheck(e.target.checked);
  };
  const handleSubmissaoCheck = (e) => {
    setSubmissaoCheck(e.target.checked);
  };
  const handleQualificacaoCheck = (e) => {
    setQualificacaoCheck(e.target.checked);
  };
  const handleAgendamentoQualificacaoCheck = (e) => {
    setAgendamentoQualificacaoCheck(e.target.checked);
  };
  const handleAgendamentoDefesaCheck = (e) => {
    setAgendamentoDefesaCheck(e.target.checked);
  };
  const handleDefesaCheck = (e) => {
    setDefesaCheck(e.target.checked);
  };
  const handleHomologacaoCheck = (e) => {
    setHomologacaoCheck(e.target.checked);
  };
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={proficienciaCheck}
              onChange={handleProficienciaCheck}
            />
          }
          label="Proficiência de idiomas"
        />
        <FormControlLabel
          control={
            <Checkbox checked={estagioCheck} onChange={handleEstagioCheck} />
          }
          label="Estágio Docência"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={submissaoCheck}
              onChange={handleSubmissaoCheck}
            />
          }
          label="Submissão de artigos"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={agendamentoQualificacaoCheck}
              onChange={handleAgendamentoQualificacaoCheck}
            />
          }
          label="Agendamento de Qualificação"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={qualificacaoCheck}
              onChange={handleQualificacaoCheck}
            />
          }
          label="Qualificação"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={agendamentoDefesaCheck}
              onChange={handleAgendamentoDefesaCheck}
            />
          }
          label="Agendamento da Desefa de Dissertação"
        />
        <FormControlLabel
          control={
            <Checkbox checked={defesaCheck} onChange={handleDefesaCheck} />
          }
          label="Defesa de Dissertação"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={homologacaoCheck}
              onChange={handleHomologacaoCheck}
            />
          }
          label="Homologação de diploma"
        />
      </FormGroup>
    </>
  );
};
export default ProgressStudent;
