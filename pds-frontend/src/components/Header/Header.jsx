import { StyledHeader, StyledText, StyledLogo } from "./styles";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();
    return (
        <StyledHeader >
            <StyledLogo onClick={() => navigate('/dashboard')}>
                <StyledText >
                    Alertas
                </StyledText>
                <StyledText >
                    PPGI
                </StyledText>
            </StyledLogo>
            
        </StyledHeader>
    );
}

export default Header;