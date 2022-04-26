import Header from '../Header/Header';
import SideMenu from '../SideMenu/SideMenu';
import { StyledLayout, StyledContent } from './styles';
import { Outlet } from 'react-router-dom';


const Layout = () => {
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