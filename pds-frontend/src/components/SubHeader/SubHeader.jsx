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
            <StyledSubHeaderText>
                {titleComp(title)}
            </StyledSubHeaderText>
        </StyledHeader>
        <StyledHeader>
            <StyledSubHeaderText>
                {textComp(textBottom)}
            </StyledSubHeaderText>
        </StyledHeader>
    </>
}

export default SubHeader;

