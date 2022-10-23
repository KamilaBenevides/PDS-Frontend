import BaseAlert from "../BaseAlert";
import { useState } from 'react';
import { Radio, Row, Tabs } from 'antd';
import { useSearchParams } from 'react-router-dom';
import SubHeader from '../../../components/SubHeader/SubHeader.jsx';
import { TabsAlign } from "../styles";

const DefenseAlerts = () => {
    
    const [selected, setSelected] = useState('1');

    const handleChange = (e) => {
        setSelected(e);
    }
    const SubHeaderDescription = selected === '1' ? 'Todos os alunos tem 24 meses para realizar a defesa da dissertação.' : 'O agendamento da defesa da dissertação precisa ser realizada com com x meses de antecedência'
    return <>
        <SubHeader title={'Alertas de Defesa de dissertação'} textBottom={SubHeaderDescription}/>
        <TabsAlign defaultActiveKey="1" onChange={handleChange}>
            <Tabs.TabPane tab="Defesa" key="1" value="AGENDAMENTO_DEFESA">
                <BaseAlert alertType="AGENDAMENTO_DEFESA" />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Agendamento de defesa" key="2" value="DEFESA">
                <BaseAlert alertType="DEFESA" />
            </Tabs.TabPane>
        </TabsAlign>
    </>
}

export default DefenseAlerts;