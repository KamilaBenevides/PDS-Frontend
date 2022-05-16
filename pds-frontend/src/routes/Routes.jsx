import { Route, Routes } from 'react-router-dom';
// import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Layout from '../components/Layout/Layout';
import DocumentProduction from '../pages/DocProduction/DocumentProduction'
import ListRegister from '../pages/ListRegister/ListRegister';
import * as path from './paths'
import ProfessorForms from '../pages/DocProfessor/ProfessorForms';
import EditProfessor from '../pages/DocProfessor/EditProfessor';
import EditRegister from '../pages/Register/Edit';
import ProficiencyAlerts from '../pages/Alerts/Proficiency/Proficiency';


const MainRoutes = () => {
    return (
            <Routes>
                {/* <Route path={path.LOGIN} exact element={<Login/>}/> */}
                <Route path={path.LOGIN} exact element={<Layout/>}/>
                <Route path={path.DASHBOARD} exact element={<Layout/>}>
                    <Route path={path.REGISTER} element={<Register/>}/>
                    <Route path={path.DOCUMENT_PRODUCTION} element={<DocumentProduction/>}/>
                    <Route path={path.LIST_REGISTER} element={<ListRegister/>}/>
                    <Route path={path.PROFESSOR} element={<ProfessorForms />}/>
                    <Route path={path.EDIT_PROFESSOR} element={<EditProfessor />}/>
                    <Route path={path.EDIT_REGISTER} element={<EditRegister/>}/>
                    <Route path={path.PROFICIENCY_ALERTS} element={<ProficiencyAlerts/>}/>
                </Route>
            </Routes>
    );
}

export default MainRoutes;