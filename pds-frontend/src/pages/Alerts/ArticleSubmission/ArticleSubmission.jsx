import BaseAlert from "../BaseAlert";
import SubHeader from '../../../components/SubHeader/SubHeader.jsx';

const ArticleSubmission = () => {
    return <>
        <SubHeader title={'Alertas para submissão de artigos'} textBottom={'Não existe prazo máximo para submissão de aritgos, mas é um pré requisito para defesa de dissertação'}/>
        <BaseAlert alertType="SUBMISSAO_ARTIGO" />
    </>
}

export default ArticleSubmission;