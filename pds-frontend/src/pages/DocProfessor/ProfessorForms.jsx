import FormGroupContainer from '../../components/FormGroupContainer/FormGroupContainer';
import { StyledForm, StyledButton } from '../Register/styles';
import { Form } from 'antd';

const ProfessorForms = () => {

    const formItems = [
        {
            label: "Name completo",
            name: "name",
            col: 24,
            required: true
        },
        {
            label: "E-mail",
            name: "email",
            col: 24,
            required: true
        },
   ];

    const submitButton = <Form.Item >
        <StyledButton type="primary" htmlType="submit">
          Cadastrar
        </StyledButton>
    </Form.Item>


    return (
        <>
            <StyledForm layout="vertical">
                <FormGroupContainer items={formItems}/>
                {submitButton}
            </StyledForm>
        </>
    )
}

export default ProfessorForms;