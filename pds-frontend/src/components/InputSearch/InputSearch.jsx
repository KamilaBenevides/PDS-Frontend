import { StyledSearch } from './styles';


const InputSearch = ({
    placeholder,
    onSearch
}) => {

    return <StyledSearch placeholder={placeholder} onSearch={onSearch}/>
}

export default InputSearch;