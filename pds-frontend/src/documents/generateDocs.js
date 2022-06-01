import createReport from 'docx-templates';
import templateAtaDefesa from './templates/templateAtaDefesa.docx';
import templateFolhaAprovacao from './templates/templateFolhaAprovacao.docx';
import templateDeclaracaoAprovacao from './templates/templateDeclaracaoAprovacao.docx';


export default async function generateDocuments(dados) {
    gerarAta(dados);
    gerarFolha(dados);
    gerarDeclaracao(dados);
}

async function gerarAta(dados) {
    const template = await fetch(templateAtaDefesa).then(res => res.arrayBuffer());
    const report = await createReport({
        template: template,
        data: dados
    });

    saveDataToFile(
        report,
        `Ata Defesa - ${dados.nomeAluno}.docx`,
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    );
}

async function gerarFolha(dados) {
    const template = await fetch(templateFolhaAprovacao).then(res => res.arrayBuffer());
    const report = await createReport({
        template: template,
        data: dados
    });

    saveDataToFile(
        report,
        `Folha de Aprovação - ${dados.nomeAluno}.docx`,
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    );
}

async function gerarDeclaracao(dados) {
    const template = await fetch(templateDeclaracaoAprovacao).then(res => res.arrayBuffer());
    const report = await createReport({
        template: template,
        data: dados
    });

    saveDataToFile(
        report,
        `Declaração de Aprovação - ${dados.nomeAluno}.docx`,
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    );
}

// ==============================================
// Helpers
// ==============================================

const saveDataToFile = (data, fileName, mimeType) => {
    const blob = new Blob([data], { type: mimeType });
    const url = window.URL.createObjectURL(blob);
    downloadURL(url, fileName, mimeType);
    setTimeout(() => {
        window.URL.revokeObjectURL(url);
    }, 1000);
};

const downloadURL = (data, fileName, mimeType) => {
    const a = document.createElement('a');
    a.href = data;
    a.download = fileName;
    document.body.appendChild(a);
    a.style = 'display: none';
    a.click();
    a.remove();
};