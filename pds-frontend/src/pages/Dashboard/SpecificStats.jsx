import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Statistic, Card, Row, Col, Button } from 'antd';
import { useMutation, gql } from '@apollo/client';
import { EyeOutlined } from '@ant-design/icons';

const SpecificStats = ({ title, Atrasados, enviados, Pendentes, detalhes, setErro, setSucesso }) => {
    
    const mutation = gql`
    mutation Mutation {
        sendAlertasDashboard
      }
    `;
    const [sendAlertasDashboard] = useMutation(mutation);
    const onSend = (e) => {
        sendAlertasDashboard()
        .then(({data}) => {
            setSucesso(data.sendAlertasDashboard);
            setErro(!data.sendAlertasDashboard);
            setTimeout(() => window.location.reload(), 5000);
        }).catch(() => setErro(true));
    }

    const navigate = useNavigate();
    
    return (
    <Card title={title} extra={<Button onClick={() => navigate(detalhes)} icon={<EyeOutlined />}>Ir para página</Button>} >
        
        <Row gutter={12} justify="space-between" align="middle">
            
            <Col>
                <Statistic
                    title="Alertas enviados"
                    value={enviados}
                    valueStyle={{
                        color: '#127D00',
                        fontWeight: '600',
                        textAlign: 'center'
                    }}
                />
            </Col>
            <Col>
                <Statistic
                    title="Pendentes"
                    value={Pendentes}
                    valueStyle={{
                        color: '#030083',
                        fontWeight: '600',
                        textAlign: 'center'
                    }}
                />
            </Col>
            <Col>
                <Statistic
                    title="Alunos atrasados"
                    value={Atrasados}
                    valueStyle={{
                        color: '#cf1322',
                        fontWeight: '600',
                        textAlign: 'center'
                    }}
                />
            </Col>
            {/* <Col>
                <Button onClick={() => navigate(detalhes)} style={{float: 'right'}}>Ver Detalhes</Button>
            </Col> */}
            
        </Row>
    </Card>
    )};

export default SpecificStats;
