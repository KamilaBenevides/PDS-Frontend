import { gql } from "@apollo/client";
import moment from 'moment';


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

export function filterVencidos(aa) {
    return aa.filter(a => {
        let limiteFinal = moment(a.aluno.dataLimite);
        let inicioAlerta = limiteFinal.subtract(a.alerta.diasIntervalo, 'days');
        let hoje = moment();
        return (inicioAlerta <= hoje) && (inicioAlerta.add(30, 'days') <= hoje)
    });
}

export function filterEnviados(aa) {
    return aa.filter(a => {
        let limiteFinal = moment(a.aluno.dataLimite);
        let inicioAlerta = limiteFinal.subtract(a.alerta.diasIntervalo, 'days');
        let hoje = moment();
        return a.enviado && !(inicioAlerta.add(30, 'days') <= hoje);
    });
}

export function filterAbertos(aa) {
    return aa.filter(a => {
        let limiteFinal = moment(a.aluno.dataLimite);
        let inicioAlerta = limiteFinal.subtract(a.alerta.diasIntervalo, 'days');
        let hoje = moment();
        return (inicioAlerta <= hoje) && !(inicioAlerta.add(30, 'days') <= hoje) && !a.enviado;
    });
}

export function filterNaoIniciados(aa) {
    return aa.filter(a => {
        let limiteFinal = moment(a.aluno.dataLimite);
        let inicioAlerta = limiteFinal.subtract(a.alerta.diasIntervalo, 'days');
        let hoje = moment();
        return !(inicioAlerta <= hoje) && !a.enviado;
    });
}

