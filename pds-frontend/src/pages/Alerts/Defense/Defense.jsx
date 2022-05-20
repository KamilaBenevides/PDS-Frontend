import BaseAlert from "../BaseAlert";
import { useState } from 'react';
import { Radio, Row } from 'antd';

const DefenseAlerts = () => {
    const [selected, setSelected] = useState("AGENDAMENTO_DEFESA");

    const handleChange = (e) => {
        setSelected(e.target.value);
    }

    return <>
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