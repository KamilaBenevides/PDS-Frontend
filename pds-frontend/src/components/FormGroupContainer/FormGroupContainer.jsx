import { Col, Row } from "antd";
import Input from "../Input/Input";
import { StyledFormItem } from './styles';


const FormGroupContainer = ({ items, children }) => {
    return (<Row gutter={[16, 0]}>
      {items.map((item, key) => (
          <Col span={item.col} key={key}>
              <StyledFormItem 
              labelCol={{ span: 24 }}
              label={item.label}
              required={item.required}
              rules={item.rules ?  item.rules : [
                {
                  required: item?.required,
                  message: item.label
                    ? `${item.label} é obrigatório`
                    : "Campo obrigatório",
                },
              ]}>
                  {item.formComponent ?? <Input />}
              </StyledFormItem>
          </Col>
      ))}
    </Row>);
  }
  
  export default FormGroupContainer;