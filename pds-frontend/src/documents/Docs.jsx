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
  const { register, control, handleSubmit, formState: { errors } } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'examinadoresInternos',
  });
  
  const examinadoresExternosInst = useFieldArray({
    control,
    name: 'examinadoresExternosInst',
  });

  const examinadoresExternosProg = useFieldArray({
    control,
    name: 'examinadoresExternosProg',
  });

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
      required: true,
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

  const examinadorFormList = [
    {
      id: "0",
      name: ["nome"],
      label: "Examinador interno",
      colSpan: 12,
    },
    {
      id: "1",
      name: ["unidade"],
      label: "Unidade",
      colSpan: 12,
    }
  ];

  const onSubmit = (data) => {
    data.videoconferencia = data.videoconferencia === 'true' ? true : false;
    data.anoDefesa = new Date(data.dataDefesa).getUTCFullYear();
    data.diaDefesa = new Date(data.dataDefesa).getUTCDate();
    data.mesDefesa = meses[new Date(data.dataDefesa).getUTCMonth()];
    data.anoIngresso = new Date(data.dataIngresso).getUTCFullYear();
    data.diaIngresso = new Date(data.dataIngresso).getUTCDate();
    data.mesIngresso = meses[new Date(data.dataIngresso).getUTCMonth()];
    let hoje = new Date();
    data.diaDeclaracao = hoje.getUTCDate();
    data.mesDeclaracao = meses[hoje.getUTCMonth()];
    data.anoDeclaracao = hoje.getUTCFullYear();
    console.log(data);
    generateDocuments(data);
  };

  console.log(errors);

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
            listItems={examinadorFormList}
            addText={"adicionar"}
            name={"examinadoresInternos"}
          />
          <br />
          <br />
          <FormList 
            listItems={examinadorFormList}
            addText={"adicionar"}
            name={"examinadoresExternosInst"}
          />
          <br />
          <br />
          {submitButton}
      </Form>


      {/* <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
        
        <div className="form-group">
          <label className="form-label">Nome do Aluno</label>
          <input className='form-control mb-2' type="text" placeholder="Nome do Aluno" {...register("nomeAluno", {required: true, maxLength: 80})} />
        </div>
        
        <div className="row">
          <div className="form-group col">
            <label className="form-label">Matrícula</label>
            <input className='form-control mb-2' type="text" placeholder="Matrícula" {...register("matricula", {required: true, maxLength: 20})} />
          </div>
          <div className="form-group col">
            <label className="form-label">CPF</label>
            <input className='form-control mb-2' type="text" placeholder="CPF" {...register("cpf", {required: true})} />
          </div>
        </div>
        
        <label className="form-label">Trabalho</label>
        <input className='form-control mb-2' type="text" placeholder="Título do Trabalho" {...register("tituloTrabalho", {required: true, maxLength: 150})} />
        <label className="form-label">Linha de Pesquisa</label>
        <input className='form-control mb-2' type="text" placeholder="Linha de Pesquisa" {...register("linhaPesquisa", {required: true})} />
        
        <div className="row">
          <div className="form-group col">
            <label className="form-label">Data de Ingresso</label>
            <input className='form-control mb-2' type="date" placeholder="Data de Ingresso" {...register("dataIngresso", {required: true})} />
          </div>
          <div className="form-group col">
            <label className="form-label">Data de Defesa</label>
            <input className='form-control mb-2' type="date" placeholder="Data de Defesa" {...register("dataDefesa", {required: true})} />
          </div>
          <div className="form-group col">
            <label className="form-label">Hora da Defesa</label>
            <input className='form-control mb-2' type="time" placeholder="Hora de Defesa" {...register("horaDefesa", {required: true})} />
          </div>
          <div className="form-group col">
            <label className="form-label">Número da Ata</label>
            <input className='form-control mb-2' type="text" placeholder="Número da Ata" {...register("nAta", {required: true, min: 2, maxLength: 3})} />
          </div>
        </div>
        
        <div className="row">
          <div className="form-group col">
            <label className="form-label">Orientador</label>
            <input className='form-control mb-2' type="text" placeholder="Orientador" {...register("orientador", {required: true, maxLength: 100})} />
          </div>
          <div className="form-group col">
            <label className="form-label">Coorientador</label>
            <input className='form-control mb-2' type="text" placeholder="Coorientador" {...register("coorientador", {})} />
          </div>
        </div>
        
        <div className="form-group">
          <label className="form-label">Sistema de Videoconferência</label>
          <div className="form-check">
            <label className="form-check-label" htmlFor="">Sim</label>
            <input className="form-check-input" {...register("videoconferencia", { required: true })} type="radio" value="true" />
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="">Não</label>
            <input className="form-check-input" {...register("videoconferencia", { required: true })} type="radio" value="false" />
          </div>
        </div>

        <label className="form-label">Examinadores Internos</label>
        {fields.map((item, index) => (
          <div className="row mt-2" key={item.id}>
            <div className='form-group col-6'>
              <label className="form-label">Nome</label>
              <input
                className='form-control'
                {...register(`examinadoresInternos.${index}.nome`)}
              />
            </div>
            <button className='btn btn-sm btn-danger col-2' onClick={() => remove(index)}>Remover</button>
          </div>
        ))}
        <div className="my-2">
          <button className='btn btn-secondary mb-3' type="button" onClick={() => append({ nome: "" })}>Adicionar</button>
        </div>

        <label className="form-label">Examinadores Externos ao Programa</label>
        {examinadoresExternosProg.fields.map((item, index) => (
          <div className="row mt-2" key={item.id}>
            <div className='form-group col-6'>
              <label className="form-label">Nome</label>
              <input
                className='form-control'
                {...register(`examinadoresExternosProg.${index}.nome`)}
              />
            </div>
            <div className='form-group col-4'>
              <label className="form-label">Unidade</label>
              <input
                className='form-control'
                {...register(`examinadoresExternosProg.${index}.unidade`)}
              />
            </div>
            <button className='btn btn-sm btn-danger col-2' onClick={() => examinadoresExternosProg.remove(index)}>Remover</button>
          </div>
        ))}
        <div className="my-2">
          <button className='btn btn-secondary mb-3' type="button" onClick={() => examinadoresExternosProg.append({ nome: "" })}>Adicionar</button>
        </div>

        <label className="form-label">Examinadores Externos à Instituição</label>
        {examinadoresExternosInst.fields.map((item, index) => (
          <div className="row mt-2" key={item.id}>
            <div className='form-group col-6'>
              <label className="form-label">Nome</label>
              <input
                className='form-control'
                {...register(`examinadoresExternosInst.${index}.nome`)}
              />
            </div>
            <div className='form-group col-4'>
              <label className="form-label">Instituição</label>
              <input
                className='form-control'
                {...register(`examinadoresExternosInst.${index}.instituicao`)}
              />
            </div>
            <button className='btn btn-sm btn-danger col-2' onClick={() => examinadoresExternosInst.remove(index)}>Remover</button>
          </div>
        ))}
        <div className="my-2">
          <button className='btn btn-secondary mb-3' type="button" onClick={() => examinadoresExternosInst.append({ nome: "" })}>Adicionar</button>
        </div>

        <button className='btn btn-primary mt-3' type="submit">Gerar Documentos</button>
      </form> */}
    </Container>
  );
}
