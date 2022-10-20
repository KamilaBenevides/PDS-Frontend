import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Statistic, Card, Row, Col, Button } from 'antd';
import { useMutation, gql } from '@apollo/client';
import { RightOutlined } from '@ant-design/icons';

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
    <Card title={title} extra={<Button onClick={() => navigate(detalhes)} icon={<RightOutlined />}>Ir para página</Button>} >
        
        <Row gutter={12} justify="space-between" align="middle">
            <Col>
                <Statistic
                    title="Atrasados"
                    value={Atrasados}
                    valueStyle={{
                        color: '#cf1322',
                    }}
                />
            </Col>
            <Col>
                <Statistic
                    title="Enviados"
                    value={enviados}
                    valueStyle={{
                        color: '#faad14',
                    }}
                />
            </Col>
            <Col>
                <Statistic
                    title="Pendentes"
                    value={Pendentes}
                    valueStyle={{
                        color: '#faad14',
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
