import createReport from 'docx-templates';
import templateDefesaDePropostaDeDissertação from './templates/templateDefesaDePropostaDeDissertação.docx';

export default async function generateDocumentsDissertationPropostal(dados) {
  generateDissertationPropostal(dados);
}

async function generateDissertationPropostal(dados) {
  const template = await fetch(templateDefesaDePropostaDeDissertação).then(res => res.arrayBuffer());
  const report = await createReport({
      template: template,
      data: dados
  });

  saveDataToFile(
      report,
      `Proposta de dissertação - ${dados.nomeAluno}.docx`,
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  );
}

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