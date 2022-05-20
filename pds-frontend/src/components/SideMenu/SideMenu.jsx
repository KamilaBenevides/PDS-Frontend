import React from 'react';
import {StyledSideMenu, StyledMenu} from './styles';
import { useNavigate } from "react-router-dom";
import * as path from '../../routes/paths'
const SideMenu = () => {

    let navigate = useNavigate();

    const handleNavigation = (item) => {
        let key = item.key;
        if (key == 9) {
            // provisório até integrar documentos ao app principal
            window.open('https://documentos-ppgi.vercel.app/', '_blank');
            return;
        }
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

    
    
    const menuItens = [
        // removendo provisoriamente para professores nao reclamarem de tela "vazia"
        // {
        //     key: '0',
        //     label: 'Meu Perfil',
        //     path: path.DASHBOARD
        // },
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
                    label: 'Defesa dissertação',
                    path: path.DEFENSE_ALERTS
                },
            ]
        },
        {
            key: '9',
            label: 'Documentos'
        },
    ];

    console.log("sidemenu");
    return (
        <StyledSideMenu width={250}>
            <StyledMenu mode="inline" items={menuItens} onClick={item => handleNavigation(item)}/>
        </StyledSideMenu>
    );
}

export default SideMenu;