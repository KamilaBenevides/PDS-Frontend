import FormGroupContainer from '../../components/FormGroupContainer/FormGroupContainer';
import { StyledForm, StyledButton } from '../Register/styles';
import { Form } from 'antd';
import { useMutation, gql } from '@apollo/client';


const ProfessorForms = () => {

    const CD = gql`
    mutation CreateDocente($data: DocenteCreateInput!) {
        createDocente(data: $data) {
            nomeCompleto
            email
        }
      }
    `;

    const [createDocente] = useMutation(CD);
    const [form] = Form.useForm();

    const formItems = [
        {
            label: "Nome completo",
            name: "nomeCompleto",
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
        <StyledButton type="primary" onClick={() => {form.submit()}}>
          Cadastrar
        </StyledButton>
    </Form.Item>

    const onFinish = (e) => {
        console.log("e -> ", e);
        createDocente({
            variables: {
                data: e
            }
        });
    }

    return (
        <>
            <StyledForm form={form} layout="vertical" onFinish={e => onFinish(e)}>
                <FormGroupContainer items={formItems}/>
                {submitButton}
            </StyledForm>
        </>
    )
}

export default ProfessorForms;