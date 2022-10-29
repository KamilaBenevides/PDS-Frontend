import React, { useState, useEffect, useMemo } from 'react';
import { Container, StyledTimePicker, StyledButton, Text } from './styles';
import { useFieldArray, useForm } from 'react-hook-form';
import generateDocumentsDissertationPropostal from './generateDocumentsDissertationPropostal';
import DatePicker from '../components/DatePicker/DatePicker';
import FormGroupContainer from '../components/FormGroupContainer/FormGroupContainer';
import Select from '../components/Select/Select';
import FormList from '../components/FormList/FormList';
import { useMutation, gql, useQuery } from '@apollo/client';
import { Form, Radio, Divider } from 'antd';
import moment from 'moment';
import SubHeader from '../components/SubHeader/SubHeader';
import Card from '../components/Card/Card';

const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

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
      label: "Título do Trabalho",
      name: "tituloTrabalho",
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
      label: "Data de Proposta",
      name: "dataProposta",
      col: 8,
      required: true,
      formComponent: <DatePicker/>
    },
    {
      label: "Hora de Proposta",
      name: "horaProposta",
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
      <Radio value="false">Não</Radio>
    </Radio.Group>
    },
  ];

  const examinadorInternoFormList = [
    {
      id: "0",
      name: ["nome"],
      label: "Examinador Interno",
      colSpan: 24,
    },
  ];

  const examinadorExternoProgFormList = [
    {
      id: "0",
      name: ["nome"],
      label: "Examinador Externo ao Programa",
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
      label: "Examinador Externo à Instituição",
      colSpan: 12,
    },
    {
      id: "1",
      name: ["instituicao"],
      label: "Instituição",
      colSpan: 12,
    }
  ];

  const onSubmit = (data) => {
    data.videoconferencia = data.videoconferencia === 'true' ? true : false;
    data.anoProposta = data.dataProposta.year();
    data.diaProposta = data.dataProposta.date();
    data.mesProposta = meses[data.dataProposta.month()];
    data.anoIngresso = data.dataIngresso.year();
    data.diaIngresso = data.dataIngresso.date();
    data.mesIngresso = meses[data.dataIngresso.month()];
    data.horaProposta = data.horaProposta.format("HH:mm");
    data.orientador = docentes.find(d => d.value == data.orientador).label;
    if (data.coorientador) data.coorientador = docentes.find(d => d.value == data.coorientador).label;
    else data.coorientador = "";
    data.examinadoresInternos = data.examinadoresInternos.filter(e => e.nome != undefined && e.nome != "");
    data.examinadoresExternosProg = data.examinadoresExternosProg.filter(e => e.nome != undefined && e.nome != "" && e.unidade != undefined && e.unidade != "");
    data.examinadoresExternosInst = data.examinadoresExternosInst.filter(e => e.nome != undefined && e.nome != "");
    console.log(data);
    generateDocumentsDissertationPropostal(data);
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
        onClick={() => {form.submit()}}
        >
          Gerar documento
        </StyledButton>
    </Form.Item>
  return <>
    <SubHeader title={'Geração de Documentos'} textBottom={'Adicione os dados para gerar os documentos proposta de dissertação'}/>
    <Card >
      <Container className="container">
        <Text>Aluno</Text>
        <Select 
        placeholder={'Selecione'} 
        options={discentesOptions} 
        style={{ width: '100%' }} 
        onChange={onDiscenteChange}
        />
        <Divider />
        
        <Form form={form} onFinish={e => onFinish(e)}>
            <FormGroupContainer items={formItems}/>
            <FormList 
              listItems={examinadorInternoFormList}
              addText={"Adicionar examinador interno"}
              name={"examinadoresInternos"}
            />
            <br />
            <br />
            <FormList 
              listItems={examinadorExternoProgFormList}
              addText={"Adicionar examinador externo"}
              name={"examinadoresExternosProg"}
            />
            <br />
            <br />
            <FormList 
              listItems={examinadorExternoInstFormList}
              addText={"Adicionar examinador externo"}
              name={"examinadoresExternosInst"}
            />
            <br />
            {submitButton}
        </Form>
      </Container>
    </Card>
  </>
}
