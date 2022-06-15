import { StyledHeader, StyledTitle, StyledSubHeaderText } from './styles';


const SubHeader = ({title}) => {
    const titleComp = (text) => (<StyledTitle >
        {text}
      </StyledTitle>)

    return <>
        <StyledHeader>
            <StyledSubHeaderText>
                {titleComp(title)}
            </StyledSubHeaderText>
            
        </StyledHeader>
    </>
}

export default SubHeader;

