import Header from '../Header/Header';
import SideMenu from '../SideMenu/SideMenu';
import { StyledLayout, StyledContent, StyledCard } from './styles';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../pages/Login/AuthProvider';


const Layout = () => {

    let auth = useAuth();
    let navigate = useNavigate();

    if (!auth.token) {
        navigate("/");
    }

    return (<>
        <StyledLayout>
            <Header ></Header>
                <StyledLayout>
                    <SideMenu></SideMenu>
                    <StyledContent>
                        <Outlet/>
                    </StyledContent>
                </StyledLayout>
        </StyledLayout>
    </>)
}

export default Layout;