import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Layout from '../components/Layout/Layout';
import * as path from './paths'



const MainRoutes = () => {
    return (
            <Routes>
                <Route path={path.LOGIN} exact element={<Login/>}/>
                <Route path={path.DASHBOARD} exact element={<Layout/>}>
                    <Route path={path.REGISTER} element={<Register/>}/>
                </Route>
            </Routes>
    );
}

export default MainRoutes;