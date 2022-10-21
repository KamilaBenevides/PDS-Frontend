import SubHeader from "../../../components/SubHeader/SubHeader";
import BaseAlert from "../BaseAlert";

const ProficiencyAlerts = () => {
    return <>
        <SubHeader title={'Proficiência de idiomas'} textBottom={'Não existe prazo máximo para realizar a proficiência de idiomas'}/>
        <BaseAlert alertType="PROFICIENCIA" />
    </>
}

export default ProficiencyAlerts;