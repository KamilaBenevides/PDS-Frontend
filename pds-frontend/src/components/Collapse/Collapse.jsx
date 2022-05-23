import { StyledCollapse, StyledPanel } from './styles';


const Collapse = ({ items, header, content }) => {

    // const Content = item => {
    //     return (<StyledContent>
    //         <Row gutter={16}>
    //             <Col span={24}>
    //                 <StyledText><strong>E-mail:</strong> {item.emailInstitucional}</StyledText>
    //             </Col>
    //             <Col span={24}>
    //                 <StyledText><strong>Prazo máximo para agendamento:</strong> {item.dataLimite}</StyledText>
    //             </Col>
    //             <Col span={24}>
    //                 <StyledText><strong>Status:</strong> em aberto</StyledText>
    //             </Col>
    //             <Col span={3}>
    //             <StyledButton type="primary" danger 
    //             style={{
    //                 color: '#FFFFFF'
    //               }}>
    //             ALERTAR
    //             </StyledButton>
    //             </Col>
    //             <Col span={4}>
    //             <StyledButton type="primary" 
    //             style={{
    //                 background: '#2EC615',
    //                 color: '#FFFFFF'
    //               }}>
    //             AGENDAMENTO FEITO
    //             </StyledButton>
    //             </Col>
    //         </Row>
    //     </StyledContent>)
    // }
    
    // const header = item => {
    //     return <>
    //     <Col span={!item.matricula ? 24: 20}>
    //         <StyledNameText>{item.nomeCompleto}</StyledNameText>
    //     </Col>
    //     {!item.matricula ? null: <Col span={4}>
    //         <StyledStatusName>STATUS: em aberto</StyledStatusName>
    //     </Col>}
    // </>
    // }
    
    return <StyledCollapse >
        {items.map((element, idx) => {
            return <StyledPanel
             header={header ? header(element) : ""} 
             key={idx}
             collapsible={!content ? "disabled": undefined}
             >
                {content ? content(element) : null}
            </StyledPanel>
        })}
    </StyledCollapse>
}

export default Collapse;