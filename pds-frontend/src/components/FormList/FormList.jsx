import { Form, Col, Row } from 'antd';
import {
   StyledFormItem, 
   StyledAddButton,
   RemoveIcon } from './styles';
import Input from '../Input/Input';

const FormList = ({
    listItems,
    initialValue,
    addText,
    removeText,
    name,
    }) => {

        const listField = (field, index) => 
            <Row gutter={16}>
              {listItems.map(item => {
                return <Col span={item.colSpan} key={item.id}>
                    <StyledFormItem
                        {...field}
                        required={item.required}
                        name={[index, ...item.name]}
                        label={item.label}
                        labelCol={item.labelCol ?? { span: 24 }}
                        labelAlign={item.labelAlign ?? "right"}
                        rules={item.rules ?  item.rules : [
                        {
                            required: item?.required,
                            message: item.label
                            ? `${item.label} é obrigatório`
                            : "Campo obrigatório",
                        },
                        ]}
                    >
                        {item.formComponent ? item.formComponent : <Input />}
                    </StyledFormItem>
                </Col>
            })}
            </Row>

    return (
    <Form.List 
    name={name}
    >
        {(fields, { add, remove }) => {
          if (fields.length === 0) {
            add();
          }

          return (<>
            {fields.map((field, index) => {
              return <>
                <Row>
                  <Col span={22}>
                    {listField(field, index)}
                  </Col>
                  <Col span={2}>
                    <RemoveIcon 
                    onClick={() => remove(field.name)}
                    style={{float: 'right'}}/>
                  </Col>
                </Row>
              </>
            }
            )}
            <StyledAddButton
              type="link"
              onClick={() => add()}
            >
                + {addText}
              </StyledAddButton>
          </>)
        }
        }
      </Form.List>)
}

export default FormList;