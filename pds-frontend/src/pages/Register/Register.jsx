import {Form, Row, Col, Input} from 'antd';

const Register = () => {
    console.log("register?")
    return (
        <>
            <Form>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                        label="Nome" >
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default Register;