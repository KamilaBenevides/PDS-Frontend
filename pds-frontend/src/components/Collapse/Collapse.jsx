import { StyledCollapse, StyledPanel, StyledNameText, StyledStatusName, 
    StyledContent, StyledButton, StyledText } from './styles';
import { Col, Row } from 'antd';


const Collapse = ({ items }) => {

    const Content = item => <StyledContent>
        <Row gutter={16}>
            <Col span={24}>
                <StyledText><strong>E-mail:</strong> {item.emailInstitucional}</StyledText>
            </Col>
            <Col span={24}>
                <StyledText><strong>Prazo máximo para agendamento:</strong> {item.dataLimite}</StyledText>
            </Col>
            <Col span={24}>
                <StyledText><strong>Status:</strong> {item.ativo}</StyledText>
            </Col>
            <Col span={3}>
            <StyledButton type="primary" danger 
            style={{
                color: '#FFFFFF'
              }}>
            ALERTAR
            </StyledButton>
            </Col>
            <Col span={4}>
            <StyledButton type="primary" 
            style={{
                background: '#2EC615',
                color: '#FFFFFF'
              }}>
            AGENDAMENTO FEITO
            </StyledButton>
            </Col>
        </Row>
    </StyledContent>
    
    const header = item => {
        return <>
        <Col span={20}>
            <StyledNameText>{item.nomeCompleto}</StyledNameText>
        </Col>
        <Col span={4}>
            <StyledStatusName>STATUS: {item.ativo}</StyledStatusName>
        </Col>
    </>
    }
    
    return <StyledCollapse >
        {items.map((element, idx) => {
            return <StyledPanel header={header(element)} key={idx}>
                {Content(element)}
            </StyledPanel>
        })}
    </StyledCollapse>
}

export default Collapse;