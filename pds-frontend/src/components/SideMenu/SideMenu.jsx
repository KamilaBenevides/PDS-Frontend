import React from 'react';
import {StyledSideMenu, StyledMenu, StyledMenuLeave, LeaveIcon} from './styles';
import { useNavigate } from "react-router-dom";
import * as path from '../../routes/paths'
import { useAuth } from '../../pages/Login/AuthProvider';

const SideMenu = () => {
    const auth = useAuth();
    let navigate = useNavigate();

    const handleNavigation = (item) => {
        let key = item.key;
        menuItens.forEach(obj => {
            if(obj.key && obj.key === key) {
                navigate(obj.path);
                return;
            }
            if(obj.children) {
                obj.children.forEach(el => {
                    if(el.key && el.key === key) {
                        navigate(el.path)
                        return;
                    }
                })
            } 
        })
    }

    const handleLogout = () => {
        auth.signOut();
    }

    const menuItens = [
        {
            key: '0',
            label: 'Painel de Controle',
            path: path.DASHBOARD
        },
        {
            key: '1',
            label: 'Cadastros',
            children: [
                {
                    key: '2',
                    label: 'Discentes',
                    path: path.REGISTER,
                },
                {
                    key: '3',
                    label: 'Docentes',
                    path: path.PROFESSOR
                },
                {
                    key: '4',
                    label: 'Ver todos',
                    path: path.LIST_REGISTER
                },
            ]
        },
        {
            key: '5',
            label: 'Alertas',
            children: [
                {
                    key: '6',
                    label: 'Proficiência',
                    path: path.PROFICIENCY_ALERTS
                },
                {
                    key: '7',
                    label: 'Qualificação',
                    path: path.QUALIFICATION_ALERTS
                },
                {
                    key: '8',
                    label: 'Submissão de artigo',
                    path: path.SUBMISSAO_ARTIGO
                },
                {
                    key: '11',
                    label: 'Estágio docência',
                    path: path.ESTAGIO_DOCENCIA
                },
                {
                    key: '12',
                    label: 'Defesa dissertação',
                    path: path.DEFENSE_ALERTS
                },
                {
                    key: '13',
                    label: 'Homologação do diploma',
                    path: path.HOMOLOGACAO_DIPLOMA
                }
            ]
        },
        {
            key: '9',
            label: 'Documentos',
            children: [
                {
                    key: '14',
                    label: 'Documentos de Defesa',
                    path: path.DOCUMENTS
                },
                {
                    key: '15',
                    label: 'Documentos de Proposta',
                    path: path.DOCUMENTS_DISSERTATION_PROPOSTAL
                }
            ]
        },

    ];

    const menuLeave = [
        {
            key: '10',
            label: 'Sair',
            path: '',
            icon: <LeaveIcon/>
        },
    ]

    return (
        <StyledSideMenu width={250}>
            <StyledMenu mode="inline" items={menuItens} onClick={item => handleNavigation(item)}/>
            <StyledMenuLeave mode="inline" items={menuLeave} onClick={handleLogout}/>
        </StyledSideMenu>
    );
}

export default SideMenu;