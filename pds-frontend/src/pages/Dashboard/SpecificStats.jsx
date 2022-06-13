import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Statistic, Card, Row, Col, Button } from 'antd';
import { useMutation, gql } from '@apollo/client';

const SpecificStats = ({ title, vencidos, enviados, abertos, detalhes }) => {
    
    const mutation = gql`
    mutation Mutation {
        sendAlertasDashboard
      }
    `;
    const [sendAlertasDashboard] = useMutation(mutation);
    const onSend = (e) => {
        sendAlertasDashboard()
        .then(() => {
            window.location.reload();
        });
    }

    const navigate = useNavigate();
    
    return (
    <Card title={title}>
        <Row gutter={12} justify="space-between" align="middle">
            <Col>
                <Statistic
                    title="Vencidos"
                    value={vencidos}
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
                    title="Abertos"
                    value={abertos}
                    valueStyle={{
                        color: '#faad14',
                    }}
                />
            </Col>
            {detalhes.length ?
                <Col>
                    <Button onClick={() => navigate(detalhes)} style={{float: 'right'}}>Ver Detalhes</Button>
                </Col>
            :   <Col><Button onClick={() => onSend()}>Enviar E-mails</Button></Col>}
        </Row>
    </Card>
    )};

export default SpecificStats;
