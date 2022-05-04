import InputSearch from '../../components/InputSearch/InputSearch';
import Collapse from '../../components/Collapse/Collapse';
import { Container } from './styles';

const ListRegister = () => {


    const items = [
        {          //aqui aluno1
            ativo: 'ativo',
            coorientadorId: 'coorientadorId',
            cpf: 'cpf',
            dataIngresso: 'dataIngresso',
            dataLimite: 'dataLimite',
            emailInstitucional: 'emailInstitucional',
            emailPessoal: 'emailPessoal',
            id: 'id',
            matricula: 'matricula',
            nomeCompleto: 'nomeCompleto',
            orientadorId: 'orientadorId'
        },
        {          //aqui aluno1
            ativo: 'ativo',
            coorientadorId: 'coorientadorId',
            cpf: 'cpf',
            dataIngresso: 'dataIngresso',
            dataLimite: 'dataLimite',
            emailInstitucional: 'emailInstitucional',
            emailPessoal: 'emailPessoal',
            id: 'id',
            matricula: 'matricula',
            nomeCompleto: 'nomeCompleto',
            orientadorId: 'orientadorId'
        },
        {          //aqui aluno1
            ativo: 'ativo',
            coorientadorId: 'coorientadorId',
            cpf: 'cpf',
            dataIngresso: 'dataIngresso',
            dataLimite: 'dataLimite',
            emailInstitucional: 'emailInstitucional',
            emailPessoal: 'emailPessoal',
            id: 'id',
            matricula: 'matricula',
            nomeCompleto: 'nomeCompleto',
            orientadorId: 'orientadorId'
        }
    ]
    

    const onSearch = value => console.log(value); 
    const header = <InputSearch placeholder={"Buscar"} onSearch={onSearch}/>
    
    return <>
        <Container>
            {header}
            <Collapse items={items}/>
        </Container>
    </> 
}

export default ListRegister;