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

export function filterVencidos(aa) {
    let filtered = aa.filter(a => {
        let limiteFinal = moment(a.aluno.dataLimite);
        let inicioAlerta = limiteFinal.subtract(a.alerta.diasIntervalo, 'days');
        let hoje = moment();
        return (inicioAlerta <= hoje) && (inicioAlerta.add(30, 'days') <= hoje)
    });
    let result = filtered.map(e => ({...e, status: "Vencido"}));
    return result;
}

export function filterEnviados(aa) {
    let filtered = aa.filter(a => {
        let limiteFinal = moment(a.aluno.dataLimite);
        let inicioAlerta = limiteFinal.subtract(a.alerta.diasIntervalo, 'days');
        let hoje = moment();
        return a.enviado && !(inicioAlerta.add(30, 'days') <= hoje);
    });
    let result = filtered.map(e => ({...e, status: "Enviado"}));
    return result;
}

export function filterAbertos(aa) {
    let filtered = aa.filter(a => {
        let limiteFinal = moment(a.aluno.dataLimite);
        let inicioAlerta = limiteFinal.subtract(a.alerta.diasIntervalo, 'days');
        let hoje = moment();
        return (inicioAlerta <= hoje) && !(inicioAlerta.add(30, 'days') <= hoje) && !a.enviado;
    });
    let result = filtered.map(e => ({...e, status: "Em Aberto"}));
    return result;
}

export function filterNaoIniciados(aa) {
    let filtered = aa.filter(a => {
        let limiteFinal = moment(a.aluno.dataLimite);
        let inicioAlerta = limiteFinal.subtract(a.alerta.diasIntervalo, 'days');
        let hoje = moment();
        return !(inicioAlerta <= hoje) && !a.enviado;
    });
    let result = filtered.map(e => ({...e, status: "Não Iniciado"}));
    return result;
}

