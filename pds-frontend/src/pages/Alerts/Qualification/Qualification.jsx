import BaseAlert from "../BaseAlert";
import { useState } from 'react';
import { Tabs } from 'antd';
import { useSearchParams } from 'react-router-dom';
import SubHeader from "../../../components/SubHeader/SubHeader";
import { TabsAlign } from "../styles";

const QualificationAlerts = () => {
    
    const [selected, setSelected] = useState("1");

    const handleChange = (e) => {
        setSelected(e);
    }
    const SubHeaderDescription = selected === '1' ? 'A qualificação tem um prazo de 12 meses para ser realizada' : 'O agendamento da defesa da Qualificação precisa ser realizada com com x meses de antecedência'

    return <>
        <SubHeader title={'Qualificação'} textBottom={SubHeaderDescription}/>
        <TabsAlign defaultActiveKey="1" onChange={handleChange}>
            <Tabs.TabPane tab="Qualificação" key="1" value="AGENDAMENTO_QUALIFICACAO">
                <BaseAlert alertType="AGENDAMENTO_QUALIFICACAO" />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Agendamento de Qualificação" key="2" value="QUALIFICACAO">
                <BaseAlert alertType="QUALIFICACAO" />
            </Tabs.TabPane>
        </TabsAlign>
    </>
}

export default QualificationAlerts;