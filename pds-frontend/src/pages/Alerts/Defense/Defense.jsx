import BaseAlert from "../BaseAlert";
import { useState } from 'react';
import { Radio, Row } from 'antd';
import { useSearchParams } from 'react-router-dom';
import SubHeader from '../../../components/SubHeader/SubHeader.jsx';

const DefenseAlerts = () => {
    
    let initialSelected = "AGENDAMENTO_DEFESA";
    const [params, setParams] = useSearchParams();
    console.log(params.get('alert'));

    if (params.has('alert') && params.get('alert') === 'DEFESA') {
        initialSelected = "DEFESA";
    }
    const [selected, setSelected] = useState(initialSelected);

    const handleChange = (e) => {
        setSelected(e.target.value);
        setParams({'alert': e.target.value});
    }
    const SubHeaderDescription = selected === 'DEFESA' ? 'Todos os alunos tem 24 meses para realizar a defesa da dissertação.' : 'O agendamento da defesa da dissertação precisa ser realizada com com x meses de antecedência'
    return <>
        <SubHeader title={'Alertas de Defesa de dissertação'} textBottom={SubHeaderDescription}/>
        <Row justify="center">
            <Radio.Group value={selected} onChange={handleChange} style={{ marginTop: 8, marginBottom: -10 }}>
                <Radio.Button value="AGENDAMENTO_DEFESA">AGENDAMENTO</Radio.Button>
                <Radio.Button value="DEFESA">DEFESA DISSERTAÇÃO</Radio.Button>
            </Radio.Group>
        </Row>
        <BaseAlert alertType={selected} />
    </>
}

export default DefenseAlerts;