import { StyledSelect } from './styles';

const Select = (props) => {

    return <StyledSelect {...props}
        showSearch
        filterOption={(input, option) => 
        option.label.toLowerCase().includes(input.toLowerCase())}
    />
}

export default Select;