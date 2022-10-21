import { StyledHeader, StyledText, StyledLogo } from "./styles";
import { useNavigate } from "react-router-dom";
import { BellOutlined } from '@ant-design/icons';


const Header = () => {
    const navigate = useNavigate();
    return (
        <StyledHeader >
            <StyledLogo onClick={() => navigate('/dashboard')}>
                <BellOutlined style={{ fontSize: '40px', color: "#F3F3F3", marginLeft:'25px', marginRight: "10px "}} />
                <StyledText >
                    Alertas PPGI
                </StyledText>
            </StyledLogo>  
        </StyledHeader>
    );
}

export default Header;