import React, { useState, useEffect, useMemo } from 'react';
import { Container, StyledTimePicker, StyledButton } from './styles';
import { useFieldArray, useForm } from 'react-hook-form';
import generateDocuments from './generateDocs';
import DatePicker from '../components/DatePicker/DatePicker';
import FormGroupContainer from '../components/FormGroupContainer/FormGroupContainer';
import Select from '../components/Select/Select';
import FormList from '../components/FormList/FormList';
import { useMutation, gql, useQuery } from '@apollo/client';
import { Form, Radio } from 'antd';
import moment from 'moment';
// import moment from 'moment';

const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'outubro', 'novembro', 'dezembro'];

export default function Docs() {
  // const { register, control, handleSubmit, formState: { errors } } = useForm();
  // const { fields, append, remove } = useFieldArray({
  //   control,
  //   name: 'examinadoresInternos',
  // });
  
  // const examinadoresExternosInst = useFieldArray({
  //   control,
  //   name: 'examinadoresExternosInst',
  // });

  // const examinadoresExternosProg = useFieldArray({
  //   control,
  //   name: 'examinadoresExternosProg',
  // });

  const [discentes, setDiscentes] = useState([]);

  const queryAlunos = useQuery(gql`
  query GetAlunos {
      alunos {
          id
          nomeCompleto
          matricula
          dataIngresso
          dataLimite
          cpf
          emailInstitucional
          emailPessoal
          ativo
          orientadorId
          coorientadorId
          orientador {
            email
            id
            nomeCompleto
          }
        }
  }
`);

  useEffect(() => {
    let items = queryAlunos.data?.alunos ? queryAlunos.data.alunos : [];
    setDiscentes(items);
}, [queryAlunos.data])



  const [docentes, setDocentes] = useState([]);

  const docqueryResult =  useQuery(gql`
  query ExampleQuery{
      docentes {
        nomeCompleto
        email
        id
      }
    }
  `)

  useEffect(() => {
      let docs = docqueryResult.data?.docentes ? docqueryResult.data.docentes : [];
      setDocentes(docs.map(e => {
          return {
              value: e.id,
              label: e.nomeCompleto
          }
      }))
  }, [docqueryResult])

  const [form] = Form.useForm();

  const formItems = [
    {
      label: "Nome do Aluno",
      name: "nomeAluno",
      col: 24,
      required: true
    },
    {
      label: "Matrícula",
      name: "matricula",
      col: 12,
      required: true
    },
    {
      label: "CPF",
      name: "cpf",
      col: 12,
      required: true
    },
    {
      label: "Título do Trabalho",
      name: "tituloTrabalho",
      col: 24,
      required: true
    },
    {
      label: "Linha de Pesquisa",
      name: "linhaPesquisa",
      col: 24,
      required: true
    },
    {
      label: "Data de Ingresso",
      name: "dataIngresso",
      col: 8,
      required: true,
      formComponent: <DatePicker/>
    },
    {
      label: "Data de Defesa",
      name: "dataDefesa",
      col: 8,
      required: true,
      formComponent: <DatePicker/>
    },
    {
      label: "Hora de Defesa",
      name: "horaDefesa",
      col: 8,
      required: true,
      formComponent: <StyledTimePicker format={'HH:mm'}/>
    },
    {
      label: "Número da Ata",
      name: "nAta",
      col: 24,
      required: true
    },
    {
      label: "Orientador",
      name: "orientador",
      col: 24,
      required: true,
      formComponent: <Select options={docentes}/>
    },
    {
      label: "Coorientador",
      name: "coorientador",
      col: 24,
      required: false,
      formComponent: <Select options={docentes}/>
    },
    {
      label: "Sistema de Videoconferência",
      name: "videoconferencia",
      col: 24,
      required: true,
      formComponent: <Radio.Group>
      <Radio value="true">Sim</Radio>
      <Radio value="false">Nao</Radio>
    </Radio.Group>
    },
  ];

  const examinadorInternoFormList = [
    {
      id: "0",
      name: ["nome"],
      label: "Examinador interno",
      colSpan: 12,
    },
  ];

  const examinadorExternoProgFormList = [
    {
      id: "0",
      name: ["nome"],
      label: "Examinador externo ao programa",
      colSpan: 12,
    },
    {
      id: "1",
      name: ["unidade"],
      label: "Unidade",
      colSpan: 12,
    }
  ];

  const examinadorExternoInstFormList = [
    {
      id: "0",
      name: ["nome"],
      label: "Examinador externo a instituicao",
      colSpan: 12,
    },
    {
      id: "1",
      name: ["instituicao"],
      label: "Instituicao",
      colSpan: 12,
    }
  ];

  const onSubmit = (data) => {
    data.videoconferencia = data.videoconferencia === 'true' ? true : false;
    data.anoDefesa = data.dataDefesa.year();
    data.diaDefesa = data.dataDefesa.date();
    data.mesDefesa = meses[data.dataDefesa.month()];
    data.anoIngresso = data.dataIngresso.year();
    data.diaIngresso = data.dataIngresso.date();
    data.mesIngresso = meses[data.dataIngresso.month()];
    let hoje = new Date();
    data.diaDeclaracao = hoje.getUTCDate();
    data.mesDeclaracao = meses[hoje.getUTCMonth()];
    data.anoDeclaracao = hoje.getUTCFullYear();
    data.horaDefesa = data.horaDefesa.format("HH:mm");
    data.orientador = docentes.find(d => d.value == data.orientador).label;
    if (data.coorientador) data.coorientador = docentes.find(d => d.value == data.coorientador).label;
    else data.coorientador = "";
    console.log(data);
    generateDocuments(data);
  };

  console.log(docentes)

  const onFinish = (e) => {
    onSubmit(e);
  }

  const [discentesOptions, setDiscentesOptions] = useState([]);

  const selectDiscentes = useMemo(() => {
    setDiscentesOptions(discentes.map(obj => {
      return {
        value: obj.id,
        label: obj.nomeCompleto
      }
    }));
  }, [discentes]);

  const onDiscenteChange = (discenteId) => {
    const aluno = discentes.find(e => e.id === discenteId);
    if (aluno) {
      form.setFieldsValue({
        nomeAluno: aluno.nomeCompleto,
        matricula: aluno.matricula,
        cpf: aluno.cpf,
        dataIngresso: moment(aluno.dataIngresso),
        orientador: aluno.orientadorId
      });
    }
  }

  const submitButton = <Form.Item >
        <StyledButton 
        type="primary" 
        onClick={() => {form.submit()}}
        style={{ float: 'right' }}>
          Gerar documentos
        </StyledButton>
    </Form.Item>
  
  return (
    <Container className="container">
      <h2 style={{ textAlign: 'center' }}>Selecione o aluno</h2>
      <Select options={discentesOptions} style={{ width: '100%' }} onChange={onDiscenteChange}/>
      <br />
      <br />
      <br />
      <Form form={form} onFinish={e => onFinish(e)}>
          <FormGroupContainer items={formItems}/>
          <FormList 
            listItems={examinadorInternoFormList}
            addText={"adicionar"}
            name={"examinadoresInternos"}
          />
          <br />
          <br />
          <FormList 
            listItems={examinadorExternoProgFormList}
            addText={"adicionar"}
            name={"examinadoresExternosProg"}
          />
          <br />
          <br />
          <FormList 
            listItems={examinadorExternoInstFormList}
            addText={"adicionar"}
            name={"examinadoresExternosInst"}
          />
          <br />
          {submitButton}
      </Form>
    </Container>
  );
}