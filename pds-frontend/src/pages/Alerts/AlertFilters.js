import { gql } from "@apollo/client";
import moment from 'moment';

export const solveAlertMutation = gql`
    mutation UpdateAlertaAluno($data: AlertaAlunoUpdateInput!,
        $updateAlertaAlunoWhere2: AlertaAlunoWhereUniqueInput!) {
        updateAlertaAluno(data: $data, where: $updateAlertaAlunoWhere2) {
        id
        aluno {
            nomeCompleto
        }
        alerta {
            tipo
        }
    }
  }`

export const solveManyAlertsMutation = gql`
  mutation UpdateManyAlertaAluno($data: AlertaAlunoUpdateManyMutationInput!, $where: AlertaAlunoWhereInput) {
    updateManyAlertaAluno(data: $data, where: $where) {
      count
    }
}`

export const sendManyAlertaAluno = gql`
mutation SendManyAlertaAluno($alertaAlunoIds: [Int!]!) {
    sendManyAlertaAluno(alertaAlunoIds: $alertaAlunoIds)
}`

export const baseQuery = gql`
    query AlertaAlunos($where: AlertaAlunoWhereInput) {
        alertaAlunos(where: $where) {
        id
        ativo
        enviado
        resolvido
        dataEnvioEmail
        aluno {
            id
            matricula
            nomeCompleto
            dataIngresso
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
    }`

export const sendAlertaAlunoMutation = gql`
    mutation SendAlertaAluno($alertaAlunoId: Int!) {
        sendAlertaAluno(alertaAlunoId: $alertaAlunoId) {
            id
            enviado
            dataEnvioEmail
            aluno {
                emailInstitucional
            }
        }
    }`

export function getInicioAlerta(dataLimiteAluno, diasIntervalo) {
    let limiteFinal = moment(dataLimiteAluno);
    let mesesIntervalo = diasIntervalo / 30.0;
    let inicioAlerta = limiteFinal.subtract(mesesIntervalo, 'months');
    return inicioAlerta;
}

export function getVencimentoAlerta(dataLimiteAluno, diasIntervalo) {
    let inicioAlerta = getInicioAlerta(dataLimiteAluno, diasIntervalo);
    return inicioAlerta.add(1, 'month');
}

export function checkAlertaPendente(dataLimiteAluno, diasIntervalo) {
    let inicioAlerta = getInicioAlerta(dataLimiteAluno, diasIntervalo);
    let hoje = moment();
    return inicioAlerta <= hoje;
}

export function checkAlertaAtrasado(dataLimiteAluno, diasIntervalo) {
    let vencimentoAlerta = getVencimentoAlerta(dataLimiteAluno, diasIntervalo);
    let hoje = moment();
    return vencimentoAlerta <= hoje;
}

export function filterAtrasados(aa) {
    let filtered = aa.filter(a => {
        return (checkAlertaPendente(a.aluno.dataLimite, a.alerta.diasIntervalo)
                && checkAlertaAtrasado(a.aluno.dataLimite, a.alerta.diasIntervalo));
    });
    let result = filtered.map(e => ({...e, status: "Atrasado"}));
    return result;
}

export function filterEnviados(aa) {
    let filtered = aa.filter(a => {
        return (a.enviado
                && !checkAlertaAtrasado(a.aluno.dataLimite, a.alerta.diasIntervalo));
    });
    let result = filtered.map(e => ({...e, status: "Enviado"}));
    return result;
}

export function filterPendentes(aa) {
    let filtered = aa.filter(a => {
        return (!a.enviado
                && checkAlertaPendente(a.aluno.dataLimite, a.alerta.diasIntervalo)
                && !checkAlertaAtrasado(a.aluno.dataLimite, a.alerta.diasIntervalo));
    });
    let result = filtered.map(e => ({...e, status: "Pendente"}));
    return result;
}
