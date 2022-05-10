import FormGroupContainer from '../../components/FormGroupContainer/FormGroupContainer';
import DatePicker from '../../components/DatePicker/DatePicker';
import { StyledForm, StyledButton } from './styles';
import { Form } from 'antd';
import { useMutation, gql } from '@apollo/client';

const Register = () => {

    const CA = gql`
    mutation CreateAluno($data: AlunoCreateInput!) {
        createAluno(data: $data) {
            emailInstitucional
            nomeCompleto
            matricula
        }
      }
    `;

    const [createAluno] = useMutation(CA);
    const [form] = Form.useForm();


    const formItems = [
        {
            label: "Name completo",
            name: "name",
            col: 24,
            required: true
        },
        {
            label: "Matrícula",
            name: "mat",
            col: 12,
            required: true
        },
        {
            label: "CPF",
            name: "cpf",
            col: 12,
            required: true
        },
        {
            label: "Orientador",
            name: "ori",
            col: 24,
            required: true
        },
        {
            label: "Co-orientador",
            name: "coori",
            col: 24,
            required: false
        },
        {
            label: "Data de ingresso",
            name: "date",
            col: 12,
            required: false,
            formComponent: <DatePicker/>
        }
    ];

    const submitButton = <Form.Item >
        <StyledButton type="primary" onClick={() => {form.submit()}}>
          Cadastrar
        </StyledButton>
    </Form.Item>

    const onFinish = (e) => {
        console.log("e -> ", e);
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

export default Register;