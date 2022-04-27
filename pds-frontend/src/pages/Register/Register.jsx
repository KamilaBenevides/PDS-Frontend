import FormGroupContainer from '../../components/FormGroupContainer/FormGroupContainer';
import DatePicker from '../../components/DatePicker/DatePicker';
import { StyledForm } from './styles';

const Register = () => {

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
            required: true,
            formComponent: <DatePicker/>
        },
    ];


    return (
        <>
            <StyledForm layout="vertical">
                <FormGroupContainer items={formItems}/>
            </StyledForm>
        </>
    )
}

export default Register;