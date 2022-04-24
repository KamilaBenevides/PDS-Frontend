import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Layout from '../components/Layout/Layout';
import * as path from './paths'



const tst = () => {
    return (
        <Router>
            <Routes>
                <Route path={path.LOGIN} element={<Login/>}/>
                <Route path={path.REGISTER} element={<Register/>}/>
                <Route path={path.DASHBOARD} element={<Layout/>}/>
            </Routes>
        </Router>
    );
}

export default tst;