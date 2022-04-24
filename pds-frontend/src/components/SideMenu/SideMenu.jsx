import React from 'react';
import {StyledSideMenu, StyledMenu} from './styles';

const SideMenu = () => {

    const handleNavigation = () => {}


    const menuItens = [
        {
            key: '0',
            label: 'Meu Perfil'
        },
        {
            key: '1',
            label: 'Cadastros',
            children: [
                {
                    key: '2',
                    label: 'Discentes'
                },
                {
                    key: '3',
                    label: 'Doscentes'
                },
                {
                    key: '4',
                    label: 'Ver todos'
                },
            ]
        },
        {
            key: '5',
            label: 'Alertas',
            children: [
                {
                    key: '6',
                    label: 'Proficiência'
                },
                {
                    key: '7',
                    label: 'Qualificação'
                },
                {
                    key: '8',
                    label: 'Defesa dissertação'
                },
            ]
        },
        {
            key: '9',
            label: 'Documentos'
        },
    ]

    console.log("sidemenu");
    return (
        <StyledSideMenu width={250}>
            <StyledMenu mode="inline" items={menuItens}/>
        </StyledSideMenu>
    );
}

export default SideMenu;