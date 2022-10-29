import SubHeader from "../../../components/SubHeader/SubHeader";
import BaseAlert from "../BaseAlert";

const DiplomaApproval = () => {
    return <>
        <SubHeader title={'Homologação de diploma'} textBottom={'O prazo para homologação de diplma é 60 dias depois da defesa'}/>
        <BaseAlert alertType="HOMOLOGACAO_DIPLOMA" />
    </>
}

export default DiplomaApproval;