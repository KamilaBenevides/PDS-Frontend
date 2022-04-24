import Header from '../Header/Header';
import SideMenu from '../SideMenu/SideMenu';
import { StyledLayout } from './styles';


const Layout = () => {
    return (<>
        <StyledLayout>
            <Header ></Header>
                <StyledLayout>
                    <SideMenu></SideMenu>
                </StyledLayout>
        </StyledLayout>
    </>)
}

export default Layout;