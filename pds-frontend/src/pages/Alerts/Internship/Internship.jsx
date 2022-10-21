import SubHeader from "../../../components/SubHeader/SubHeader";
import BaseAlert from "../BaseAlert";

const InternshipAlerts = () => {
    return <>
        <SubHeader title={'Estágio docencia'} textBottom={'Não existe prazo para realização do estágio docência'}/>
        <BaseAlert alertType="ESTAGIO_DOCENCIA" />
    </>
}

export default InternshipAlerts;