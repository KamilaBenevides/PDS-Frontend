import { StyledHeader, StyledTitle, StyledSubHeaderText, StyledText } from './styles';


const SubHeader = ({title, textBottom}) => {
    const titleComp = (text) => (<StyledTitle >
        {text}
      </StyledTitle>)
    const textComp = (text) => (<StyledText >
        {text}
      </StyledText>)
    return <>
        <StyledHeader>
            {titleComp(title)}
        </StyledHeader>
        <StyledHeader>
            {textComp(textBottom)}
        </StyledHeader>
    </>
}

export default SubHeader;

