import { StyledSearch } from './styles';


const InputSearch = ({
    placeholder,
    onSearch
}) => {

    return <StyledSearch placeholder={placeholder} onSearch={onSearch} allowClear />
}

export default InputSearch;