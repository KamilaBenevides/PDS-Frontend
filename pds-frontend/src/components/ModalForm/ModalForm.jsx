import { useEffect } from 'react';
import { StyledModal } from './styles'
import { Form } from "antd";
import FormGroupContainer from "../FormGroupContainer/FormGroupContainer";

const ModalForm = ({
  visible,
  onCancel,
  okText,
  cancelText,
  title,
  onFinish,
  items,
  form,
  initialValues,
  modalWidth,
}) => {
    useEffect(() => {
        if (initialValues) {
          form.setFieldsValue(initialValues);
        } 
      }, [form, initialValues])

    const onSubmit = (editedValues) => {
        if (onFinish) {
            onFinish(editedValues);
          }
    }

    const cleanValuesCancel = () => {
        form?.resetFields();
        if (onCancel)
          onCancel();
      }

    const modalWidthValue = () => {
        if (modalWidth){
          return modalWidth
        } else {
          return 570
        }
      }
    const onOk = () => {
      form.submit()
    }

    return <StyledModal
            title={title}
            visible={visible}
            centered
            okText={okText}
            cancelText={cancelText}
            onOk={onOk}
            onCancel={cleanValuesCancel}
            width={modalWidthValue()}>
              <Form
              form={form}
              onFinish={onSubmit}>
                  <FormGroupContainer items={items || []}/>
              </Form>
          </StyledModal>;
}

export default ModalForm;