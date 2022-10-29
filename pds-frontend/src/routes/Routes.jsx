import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import RegisterStudent from '../pages/Register/Register';
import Layout from '../components/Layout/Layout';
import DocumentProduction from '../pages/DocProduction/DocumentProduction'
import ListRegister from '../pages/ListRegister/ListRegister';
import * as path from './paths'
import ProfessorList from '../pages/ListRegister/ListRegisterProf';
import ProfessorRegister from '../pages/DocProfessor/ProfessorForms'
import EditProfessor from '../pages/DocProfessor/EditProfessor';
import EditRegister from '../pages/Register/Edit';
import ProficiencyAlerts from '../pages/Alerts/Proficiency/Proficiency';
import QualificationAlerts from '../pages/Alerts/Qualification/Qualification';
import DefenseAlerts from '../pages/Alerts/Defense/Defense';
import Dashboard from '../pages/Dashboard/Dashboard';
import Docs from '../documents/Docs';
import AuthProvider from '../pages/Login/AuthProvider';
import RequireAuth from "../pages/Login/RequireAuth";
import Internship from '../pages/Alerts/Internship/Internship';
import DiplomaApproval from '../pages/Alerts/DiplomaApproval/DiplomaApproval';
import ArticleSubmission from '../pages/Alerts/ArticleSubmission/ArticleSubmission'
import DocsDissertationPropostal from '../documents/DocsDissertationProposal';

const MainRoutes = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path={path.LOGIN} exact element={<Login/>}/>
                <Route path={path.DASHBOARD} exact 
                element={
                    <RequireAuth>
                        <Layout/>
                    </RequireAuth>
                }>
                    <Route path="" element={<Dashboard/>}/>
                    <Route path={path.REGISTER_STUDENT} element={<RegisterStudent/>}/>
                    <Route path={path.DOCUMENT_PRODUCTION} element={<DocumentProduction/>}/>
                    <Route path={path.DOCUMENTS} element={<Docs/>}/>
                    <Route path={path.LIST_REGISTER} element={<ListRegister/>}/>
                    <Route path={path.PROFESSOR} element={<ProfessorList />}/>
                    <Route path={path.REGISTER_PROFESSOR} element={<ProfessorRegister />}/>
                    <Route path={path.EDIT_PROFESSOR} element={<EditProfessor />}/>
                    <Route path={path.EDIT_REGISTER} element={<EditRegister/>}/>
                    <Route path={path.PROFICIENCY_ALERTS} element={<ProficiencyAlerts/>}/>
                    <Route path={path.QUALIFICATION_ALERTS} element={<QualificationAlerts/>}/>
                    <Route path={path.DEFENSE_ALERTS} element={<DefenseAlerts/>}/>
                    <Route path={path.ESTAGIO_DOCENCIA} element={<Internship/>}/>
                    <Route path={path.HOMOLOGACAO_DIPLOMA} element={<DiplomaApproval/>}/>
                    <Route path={path.SUBMISSAO_ARTIGO} element={<ArticleSubmission/>}/>
                    <Route path={path.DOCUMENTS_DISSERTATION_PROPOSTAL} element={<DocsDissertationPropostal/>}/>
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default MainRoutes;