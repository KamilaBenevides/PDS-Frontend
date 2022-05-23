import BaseAlert from "../BaseAlert";
import { useState } from 'react';
import { Radio, Row } from 'antd';

const QualificationAlerts = () => {
    
    const [selected, setSelected] = useState("AGENDAMENTO_QUALIFICACAO");

    const handleChange = (e) => {
        setSelected(e.target.value);
    }

    return <>
        <Row justify="center">
            <Radio.Group value={selected} onChange={handleChange} style={{ marginTop: 8, marginBottom: -10 }}>
                <Radio.Button value="AGENDAMENTO_QUALIFICACAO">AGENDAMENTO</Radio.Button>
                <Radio.Button value="QUALIFICACAO">QUALIFICAÇÃO</Radio.Button>
            </Radio.Group>
        </Row>
        <BaseAlert alertType={selected} />
    </>
}

export default QualificationAlerts;