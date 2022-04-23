import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import * as path from './paths'



const tst = () => {
    console.log("chama routes?");
    return (
        <Router>
            <Routes>
                <Route path={path.LOGIN} element={<Login/>}></Route>
                <Route path={path.REGISTER} element={<Register/>}></Route>
            </Routes>
        </Router>
    );
}

export default tst;