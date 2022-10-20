export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateAlerta = {
  __typename?: 'AggregateAlerta';
  _avg?: Maybe<AlertaAvgAggregate>;
  _count?: Maybe<AlertaCountAggregate>;
  _max?: Maybe<AlertaMaxAggregate>;
  _min?: Maybe<AlertaMinAggregate>;
  _sum?: Maybe<AlertaSumAggregate>;
};

export type AggregateAlertaAluno = {
  __typename?: 'AggregateAlertaAluno';
  _avg?: Maybe<AlertaAlunoAvgAggregate>;
  _count?: Maybe<AlertaAlunoCountAggregate>;
  _max?: Maybe<AlertaAlunoMaxAggregate>;
  _min?: Maybe<AlertaAlunoMinAggregate>;
  _sum?: Maybe<AlertaAlunoSumAggregate>;
};

export type AggregateAluno = {
  __typename?: 'AggregateAluno';
  _avg?: Maybe<AlunoAvgAggregate>;
  _count?: Maybe<AlunoCountAggregate>;
  _max?: Maybe<AlunoMaxAggregate>;
  _min?: Maybe<AlunoMinAggregate>;
  _sum?: Maybe<AlunoSumAggregate>;
};

export type AggregateDocente = {
  __typename?: 'AggregateDocente';
  _avg?: Maybe<DocenteAvgAggregate>;
  _count?: Maybe<DocenteCountAggregate>;
  _max?: Maybe<DocenteMaxAggregate>;
  _min?: Maybe<DocenteMinAggregate>;
  _sum?: Maybe<DocenteSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type Alerta = {
  __typename?: 'Alerta';
  AlertaAluno: Array<AlertaAluno>;
  _count?: Maybe<AlertaCount>;
  corpoEmail?: Maybe<Scalars['String']>;
  diasIntervalo: Scalars['Int'];
  id: Scalars['Int'];
  nome: Scalars['String'];
  tipo: AlertaType;
};


export type AlertaAlertaAlunoArgs = {
  cursor?: InputMaybe<AlertaAlunoWhereUniqueInput>;
  distinct?: InputMaybe<Array<AlertaAlunoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AlertaAlunoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AlertaAlunoWhereInput>;
};

export type AlertaAluno = {
  __typename?: 'AlertaAluno';
  alerta: Alerta;
  alertaId: Scalars['Int'];
  aluno: Aluno;
  alunoId: Scalars['Int'];
  ativo: Scalars['Boolean'];
  dataEnvioEmail?: Maybe<Scalars['DateTime']>;
  enviado: Scalars['Boolean'];
  id: Scalars['Int'];
  resolvido: Scalars['Boolean'];
};

export type AlertaAlunoAvgAggregate = {
  __typename?: 'AlertaAlunoAvgAggregate';
  alertaId?: Maybe<Scalars['Float']>;
  alunoId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type AlertaAlunoAvgOrderByAggregateInput = {
  alertaId?: InputMaybe<SortOrder>;
  alunoId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type AlertaAlunoCountAggregate = {
  __typename?: 'AlertaAlunoCountAggregate';
  _all: Scalars['Int'];
  alertaId: Scalars['Int'];
  alunoId: Scalars['Int'];
  ativo: Scalars['Int'];
  dataEnvioEmail: Scalars['Int'];
  enviado: Scalars['Int'];
  id: Scalars['Int'];
  resolvido: Scalars['Int'];
};

export type AlertaAlunoCountOrderByAggregateInput = {
  alertaId?: InputMaybe<SortOrder>;
  alunoId?: InputMaybe<SortOrder>;
  ativo?: InputMaybe<SortOrder>;
  dataEnvioEmail?: InputMaybe<SortOrder>;
  enviado?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  resolvido?: InputMaybe<SortOrder>;
};

export type AlertaAlunoCreateInput = {
  alerta: AlertaCreateNestedOneWithoutAlertaAlunoInput;
  aluno: AlunoCreateNestedOneWithoutAlertaAlunoInput;
  ativo?: InputMaybe<Scalars['Boolean']>;
  dataEnvioEmail?: InputMaybe<Scalars['DateTime']>;
  enviado?: InputMaybe<Scalars['Boolean']>;
  resolvido?: InputMaybe<Scalars['Boolean']>;
};

export type AlertaAlunoCreateManyAlertaInput = {
  alunoId: Scalars['Int'];
  ativo?: InputMaybe<Scalars['Boolean']>;
  dataEnvioEmail?: InputMaybe<Scalars['DateTime']>;
  enviado?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  resolvido?: InputMaybe<Scalars['Boolean']>;
};

export type AlertaAlunoCreateManyAlertaInputEnvelope = {
  data: Array<AlertaAlunoCreateManyAlertaInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AlertaAlunoCreateManyAlunoInput = {
  alertaId: Scalars['Int'];
  ativo?: InputMaybe<Scalars['Boolean']>;
  dataEnvioEmail?: InputMaybe<Scalars['DateTime']>;
  enviado?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  resolvido?: InputMaybe<Scalars['Boolean']>;
};

export type AlertaAlunoCreateManyAlunoInputEnvelope = {
  data: Array<AlertaAlunoCreateManyAlunoInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AlertaAlunoCreateManyInput = {
  alertaId: Scalars['Int'];
  alunoId: Scalars['Int'];
  ativo?: InputMaybe<Scalars['Boolean']>;
  dataEnvioEmail?: InputMaybe<Scalars['DateTime']>;
  enviado?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  resolvido?: InputMaybe<Scalars['Boolean']>;
};

export type AlertaAlunoCreateNestedManyWithoutAlertaInput = {
  connect?: InputMaybe<Array<AlertaAlunoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AlertaAlunoCreateOrConnectWithoutAlertaInput>>;
  create?: InputMaybe<Array<AlertaAlunoCreateWithoutAlertaInput>>;
  createMany?: InputMaybe<AlertaAlunoCreateManyAlertaInputEnvelope>;
};

export type AlertaAlunoCreateNestedManyWithoutAlunoInput = {
  connect?: InputMaybe<Array<AlertaAlunoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AlertaAlunoCreateOrConnectWithoutAlunoInput>>;
  create?: InputMaybe<Array<AlertaAlunoCreateWithoutAlunoInput>>;
  createMany?: InputMaybe<AlertaAlunoCreateManyAlunoInputEnvelope>;
};

export type AlertaAlunoCreateOrConnectWithoutAlertaInput = {
  create: AlertaAlunoCreateWithoutAlertaInput;
  where: AlertaAlunoWhereUniqueInput;
};

export type AlertaAlunoCreateOrConnectWithoutAlunoInput = {
  create: AlertaAlunoCreateWithoutAlunoInput;
  where: AlertaAlunoWhereUniqueInput;
};

export type AlertaAlunoCreateWithoutAlertaInput = {
  aluno: AlunoCreateNestedOneWithoutAlertaAlunoInput;
  ativo?: InputMaybe<Scalars['Boolean']>;
  dataEnvioEmail?: InputMaybe<Scalars['DateTime']>;
  enviado?: InputMaybe<Scalars['Boolean']>;
  resolvido?: InputMaybe<Scalars['Boolean']>;
};

export type AlertaAlunoCreateWithoutAlunoInput = {
  alerta: AlertaCreateNestedOneWithoutAlertaAlunoInput;
  ativo?: InputMaybe<Scalars['Boolean']>;
  dataEnvioEmail?: InputMaybe<Scalars['DateTime']>;
  enviado?: InputMaybe<Scalars['Boolean']>;
  resolvido?: InputMaybe<Scalars['Boolean']>;
};

export type AlertaAlunoGroupBy = {
  __typename?: 'AlertaAlunoGroupBy';
  _avg?: Maybe<AlertaAlunoAvgAggregate>;
  _count?: Maybe<AlertaAlunoCountAggregate>;
  _max?: Maybe<AlertaAlunoMaxAggregate>;
  _min?: Maybe<AlertaAlunoMinAggregate>;
  _sum?: Maybe<AlertaAlunoSumAggregate>;
  alertaId: Scalars['Int'];
  alunoId: Scalars['Int'];
  ativo: Scalars['Boolean'];
  dataEnvioEmail?: Maybe<Scalars['DateTime']>;
  enviado: Scalars['Boolean'];
  id: Scalars['Int'];
  resolvido: Scalars['Boolean'];
};

export type AlertaAlunoListRelationFilter = {
  every?: InputMaybe<AlertaAlunoWhereInput>;
  none?: InputMaybe<AlertaAlunoWhereInput>;
  some?: InputMaybe<AlertaAlunoWhereInput>;
};

export type AlertaAlunoMaxAggregate = {
  __typename?: 'AlertaAlunoMaxAggregate';
  alertaId?: Maybe<Scalars['Int']>;
  alunoId?: Maybe<Scalars['Int']>;
  ativo?: Maybe<Scalars['Boolean']>;
  dataEnvioEmail?: Maybe<Scalars['DateTime']>;
  enviado?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  resolvido?: Maybe<Scalars['Boolean']>;
};

export type AlertaAlunoMaxOrderByAggregateInput = {
  alertaId?: InputMaybe<SortOrder>;
  alunoId?: InputMaybe<SortOrder>;
  ativo?: InputMaybe<SortOrder>;
  dataEnvioEmail?: InputMaybe<SortOrder>;
  enviado?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  resolvido?: InputMaybe<SortOrder>;
};

export type AlertaAlunoMinAggregate = {
  __typename?: 'AlertaAlunoMinAggregate';
  alertaId?: Maybe<Scalars['Int']>;
  alunoId?: Maybe<Scalars['Int']>;
  ativo?: Maybe<Scalars['Boolean']>;
  dataEnvioEmail?: Maybe<Scalars['DateTime']>;
  enviado?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  resolvido?: Maybe<Scalars['Boolean']>;
};

export type AlertaAlunoMinOrderByAggregateInput = {
  alertaId?: InputMaybe<SortOrder>;
  alunoId?: InputMaybe<SortOrder>;
  ativo?: InputMaybe<SortOrder>;
  dataEnvioEmail?: InputMaybe<SortOrder>;
  enviado?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  resolvido?: InputMaybe<SortOrder>;
};

export type AlertaAlunoOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AlertaAlunoOrderByWithAggregationInput = {
  _avg?: InputMaybe<AlertaAlunoAvgOrderByAggregateInput>;
  _count?: InputMaybe<AlertaAlunoCountOrderByAggregateInput>;
  _max?: InputMaybe<AlertaAlunoMaxOrderByAggregateInput>;
  _min?: InputMaybe<AlertaAlunoMinOrderByAggregateInput>;
  _sum?: InputMaybe<AlertaAlunoSumOrderByAggregateInput>;
  alertaId?: InputMaybe<SortOrder>;
  alunoId?: InputMaybe<SortOrder>;
  ativo?: InputMaybe<SortOrder>;
  dataEnvioEmail?: InputMaybe<SortOrder>;
  enviado?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  resolvido?: InputMaybe<SortOrder>;
};

export type AlertaAlunoOrderByWithRelationInput = {
  alerta?: InputMaybe<AlertaOrderByWithRelationInput>;
  alertaId?: InputMaybe<SortOrder>;
  aluno?: InputMaybe<AlunoOrderByWithRelationInput>;
  alunoId?: InputMaybe<SortOrder>;
  ativo?: InputMaybe<SortOrder>;
  dataEnvioEmail?: InputMaybe<SortOrder>;
  enviado?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  resolvido?: InputMaybe<SortOrder>;
};

export enum AlertaAlunoScalarFieldEnum {
  AlertaId = 'alertaId',
  AlunoId = 'alunoId',
  Ativo = 'ativo',
  DataEnvioEmail = 'dataEnvioEmail',
  Enviado = 'enviado',
  Id = 'id',
  Resolvido = 'resolvido'
}

export type AlertaAlunoScalarWhereInput = {
  AND?: InputMaybe<Array<AlertaAlunoScalarWhereInput>>;
  NOT?: InputMaybe<Array<AlertaAlunoScalarWhereInput>>;
  OR?: InputMaybe<Array<AlertaAlunoScalarWhereInput>>;
  alertaId?: InputMaybe<IntFilter>;
  alunoId?: InputMaybe<IntFilter>;
  ativo?: InputMaybe<BoolFilter>;
  dataEnvioEmail?: InputMaybe<DateTimeNullableFilter>;
  enviado?: InputMaybe<BoolFilter>;
  id?: InputMaybe<IntFilter>;
  resolvido?: InputMaybe<BoolFilter>;
};

export type AlertaAlunoScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AlertaAlunoScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AlertaAlunoScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AlertaAlunoScalarWhereWithAggregatesInput>>;
  alertaId?: InputMaybe<IntWithAggregatesFilter>;
  alunoId?: InputMaybe<IntWithAggregatesFilter>;
  ativo?: InputMaybe<BoolWithAggregatesFilter>;
  dataEnvioEmail?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  enviado?: InputMaybe<BoolWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  resolvido?: InputMaybe<BoolWithAggregatesFilter>;
};

export type AlertaAlunoSumAggregate = {
  __typename?: 'AlertaAlunoSumAggregate';
  alertaId?: Maybe<Scalars['Int']>;
  alunoId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type AlertaAlunoSumOrderByAggregateInput = {
  alertaId?: InputMaybe<SortOrder>;
  alunoId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type AlertaAlunoUpdateInput = {
  alerta?: InputMaybe<AlertaUpdateOneRequiredWithoutAlertaAlunoInput>;
  aluno?: InputMaybe<AlunoUpdateOneRequiredWithoutAlertaAlunoInput>;
  ativo?: InputMaybe<BoolFieldUpdateOperationsInput>;
  dataEnvioEmail?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  enviado?: InputMaybe<BoolFieldUpdateOperationsInput>;
  resolvido?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type AlertaAlunoUpdateManyMutationInput = {
  ativo?: InputMaybe<BoolFieldUpdateOperationsInput>;
  dataEnvioEmail?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  enviado?: InputMaybe<BoolFieldUpdateOperationsInput>;
  resolvido?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type AlertaAlunoUpdateManyWithWhereWithoutAlertaInput = {
  data: AlertaAlunoUpdateManyMutationInput;
  where: AlertaAlunoScalarWhereInput;
};

export type AlertaAlunoUpdateManyWithWhereWithoutAlunoInput = {
  data: AlertaAlunoUpdateManyMutationInput;
  where: AlertaAlunoScalarWhereInput;
};

export type AlertaAlunoUpdateManyWithoutAlertaInput = {
  connect?: InputMaybe<Array<AlertaAlunoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AlertaAlunoCreateOrConnectWithoutAlertaInput>>;
  create?: InputMaybe<Array<AlertaAlunoCreateWithoutAlertaInput>>;
  createMany?: InputMaybe<AlertaAlunoCreateManyAlertaInputEnvelope>;
  delete?: InputMaybe<Array<AlertaAlunoWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AlertaAlunoScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AlertaAlunoWhereUniqueInput>>;
  set?: InputMaybe<Array<AlertaAlunoWhereUniqueInput>>;
  update?: InputMaybe<Array<AlertaAlunoUpdateWithWhereUniqueWithoutAlertaInput>>;
  updateMany?: InputMaybe<Array<AlertaAlunoUpdateManyWithWhereWithoutAlertaInput>>;
  upsert?: InputMaybe<Array<AlertaAlunoUpsertWithWhereUniqueWithoutAlertaInput>>;
};

export type AlertaAlunoUpdateManyWithoutAlunoInput = {
  connect?: InputMaybe<Array<AlertaAlunoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AlertaAlunoCreateOrConnectWithoutAlunoInput>>;
  create?: InputMaybe<Array<AlertaAlunoCreateWithoutAlunoInput>>;
  createMany?: InputMaybe<AlertaAlunoCreateManyAlunoInputEnvelope>;
  delete?: InputMaybe<Array<AlertaAlunoWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AlertaAlunoScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AlertaAlunoWhereUniqueInput>>;
  set?: InputMaybe<Array<AlertaAlunoWhereUniqueInput>>;
  update?: InputMaybe<Array<AlertaAlunoUpdateWithWhereUniqueWithoutAlunoInput>>;
  updateMany?: InputMaybe<Array<AlertaAlunoUpdateManyWithWhereWithoutAlunoInput>>;
  upsert?: InputMaybe<Array<AlertaAlunoUpsertWithWhereUniqueWithoutAlunoInput>>;
};

export type AlertaAlunoUpdateWithWhereUniqueWithoutAlertaInput = {
  data: AlertaAlunoUpdateWithoutAlertaInput;
  where: AlertaAlunoWhereUniqueInput;
};

export type AlertaAlunoUpdateWithWhereUniqueWithoutAlunoInput = {
  data: AlertaAlunoUpdateWithoutAlunoInput;
  where: AlertaAlunoWhereUniqueInput;
};

export type AlertaAlunoUpdateWithoutAlertaInput = {
  aluno?: InputMaybe<AlunoUpdateOneRequiredWithoutAlertaAlunoInput>;
  ativo?: InputMaybe<BoolFieldUpdateOperationsInput>;
  dataEnvioEmail?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  enviado?: InputMaybe<BoolFieldUpdateOperationsInput>;
  resolvido?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type AlertaAlunoUpdateWithoutAlunoInput = {
  alerta?: InputMaybe<AlertaUpdateOneRequiredWithoutAlertaAlunoInput>;
  ativo?: InputMaybe<BoolFieldUpdateOperationsInput>;
  dataEnvioEmail?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  enviado?: InputMaybe<BoolFieldUpdateOperationsInput>;
  resolvido?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type AlertaAlunoUpsertWithWhereUniqueWithoutAlertaInput = {
  create: AlertaAlunoCreateWithoutAlertaInput;
  update: AlertaAlunoUpdateWithoutAlertaInput;
  where: AlertaAlunoWhereUniqueInput;
};

export type AlertaAlunoUpsertWithWhereUniqueWithoutAlunoInput = {
  create: AlertaAlunoCreateWithoutAlunoInput;
  update: AlertaAlunoUpdateWithoutAlunoInput;
  where: AlertaAlunoWhereUniqueInput;
};

export type AlertaAlunoWhereInput = {
  AND?: InputMaybe<Array<AlertaAlunoWhereInput>>;
  NOT?: InputMaybe<Array<AlertaAlunoWhereInput>>;
  OR?: InputMaybe<Array<AlertaAlunoWhereInput>>;
  alerta?: InputMaybe<AlertaRelationFilter>;
  alertaId?: InputMaybe<IntFilter>;
  aluno?: InputMaybe<AlunoRelationFilter>;
  alunoId?: InputMaybe<IntFilter>;
  ativo?: InputMaybe<BoolFilter>;
  dataEnvioEmail?: InputMaybe<DateTimeNullableFilter>;
  enviado?: InputMaybe<BoolFilter>;
  id?: InputMaybe<IntFilter>;
  resolvido?: InputMaybe<BoolFilter>;
};

export type AlertaAlunoWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type AlertaAvgAggregate = {
  __typename?: 'AlertaAvgAggregate';
  diasIntervalo?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type AlertaAvgOrderByAggregateInput = {
  diasIntervalo?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type AlertaCount = {
  __typename?: 'AlertaCount';
  AlertaAluno: Scalars['Int'];
};

export type AlertaCountAggregate = {
  __typename?: 'AlertaCountAggregate';
  _all: Scalars['Int'];
  corpoEmail: Scalars['Int'];
  diasIntervalo: Scalars['Int'];
  id: Scalars['Int'];
  nome: Scalars['Int'];
  tipo: Scalars['Int'];
};

export type AlertaCountOrderByAggregateInput = {
  corpoEmail?: InputMaybe<SortOrder>;
  diasIntervalo?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nome?: InputMaybe<SortOrder>;
  tipo?: InputMaybe<SortOrder>;
};

export type AlertaCreateInput = {
  AlertaAluno?: InputMaybe<AlertaAlunoCreateNestedManyWithoutAlertaInput>;
  corpoEmail?: InputMaybe<Scalars['String']>;
  diasIntervalo: Scalars['Int'];
  nome: Scalars['String'];
  tipo: AlertaType;
};

export type AlertaCreateManyInput = {
  corpoEmail?: InputMaybe<Scalars['String']>;
  diasIntervalo: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  nome: Scalars['String'];
  tipo: AlertaType;
};

export type AlertaCreateNestedOneWithoutAlertaAlunoInput = {
  connect?: InputMaybe<AlertaWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AlertaCreateOrConnectWithoutAlertaAlunoInput>;
  create?: InputMaybe<AlertaCreateWithoutAlertaAlunoInput>;
};

export type AlertaCreateOrConnectWithoutAlertaAlunoInput = {
  create: AlertaCreateWithoutAlertaAlunoInput;
  where: AlertaWhereUniqueInput;
};

export type AlertaCreateWithoutAlertaAlunoInput = {
  corpoEmail?: InputMaybe<Scalars['String']>;
  diasIntervalo: Scalars['Int'];
  nome: Scalars['String'];
  tipo: AlertaType;
};

export type AlertaGroupBy = {
  __typename?: 'AlertaGroupBy';
  _avg?: Maybe<AlertaAvgAggregate>;
  _count?: Maybe<AlertaCountAggregate>;
  _max?: Maybe<AlertaMaxAggregate>;
  _min?: Maybe<AlertaMinAggregate>;
  _sum?: Maybe<AlertaSumAggregate>;
  corpoEmail?: Maybe<Scalars['String']>;
  diasIntervalo: Scalars['Int'];
  id: Scalars['Int'];
  nome: Scalars['String'];
  tipo: AlertaType;
};

export type AlertaMaxAggregate = {
  __typename?: 'AlertaMaxAggregate';
  corpoEmail?: Maybe<Scalars['String']>;
  diasIntervalo?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  tipo?: Maybe<AlertaType>;
};

export type AlertaMaxOrderByAggregateInput = {
  corpoEmail?: InputMaybe<SortOrder>;
  diasIntervalo?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nome?: InputMaybe<SortOrder>;
  tipo?: InputMaybe<SortOrder>;
};

export type AlertaMinAggregate = {
  __typename?: 'AlertaMinAggregate';
  corpoEmail?: Maybe<Scalars['String']>;
  diasIntervalo?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  tipo?: Maybe<AlertaType>;
};

export type AlertaMinOrderByAggregateInput = {
  corpoEmail?: InputMaybe<SortOrder>;
  diasIntervalo?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nome?: InputMaybe<SortOrder>;
  tipo?: InputMaybe<SortOrder>;
};

export type AlertaOrderByWithAggregationInput = {
  _avg?: InputMaybe<AlertaAvgOrderByAggregateInput>;
  _count?: InputMaybe<AlertaCountOrderByAggregateInput>;
  _max?: InputMaybe<AlertaMaxOrderByAggregateInput>;
  _min?: InputMaybe<AlertaMinOrderByAggregateInput>;
  _sum?: InputMaybe<AlertaSumOrderByAggregateInput>;
  corpoEmail?: InputMaybe<SortOrder>;
  diasIntervalo?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nome?: InputMaybe<SortOrder>;
  tipo?: InputMaybe<SortOrder>;
};

export type AlertaOrderByWithRelationInput = {
  AlertaAluno?: InputMaybe<AlertaAlunoOrderByRelationAggregateInput>;
  corpoEmail?: InputMaybe<SortOrder>;
  diasIntervalo?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nome?: InputMaybe<SortOrder>;
  tipo?: InputMaybe<SortOrder>;
};

export type AlertaRelationFilter = {
  is?: InputMaybe<AlertaWhereInput>;
  isNot?: InputMaybe<AlertaWhereInput>;
};

export enum AlertaScalarFieldEnum {
  CorpoEmail = 'corpoEmail',
  DiasIntervalo = 'diasIntervalo',
  Id = 'id',
  Nome = 'nome',
  Tipo = 'tipo'
}

export type AlertaScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AlertaScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AlertaScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AlertaScalarWhereWithAggregatesInput>>;
  corpoEmail?: InputMaybe<StringNullableWithAggregatesFilter>;
  diasIntervalo?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  nome?: InputMaybe<StringWithAggregatesFilter>;
  tipo?: InputMaybe<EnumAlertaTypeWithAggregatesFilter>;
};

export type AlertaSumAggregate = {
  __typename?: 'AlertaSumAggregate';
  diasIntervalo?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type AlertaSumOrderByAggregateInput = {
  diasIntervalo?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export enum AlertaType {
  AgendamentoDefesa = 'AGENDAMENTO_DEFESA',
  AgendamentoQualificacao = 'AGENDAMENTO_QUALIFICACAO',
  Defesa = 'DEFESA',
  Proficiencia = 'PROFICIENCIA',
  Qualificacao = 'QUALIFICACAO'
}

export type AlertaUpdateInput = {
  AlertaAluno?: InputMaybe<AlertaAlunoUpdateManyWithoutAlertaInput>;
  corpoEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  diasIntervalo?: InputMaybe<IntFieldUpdateOperationsInput>;
  nome?: InputMaybe<StringFieldUpdateOperationsInput>;
  tipo?: InputMaybe<EnumAlertaTypeFieldUpdateOperationsInput>;
};

export type AlertaUpdateManyMutationInput = {
  corpoEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  diasIntervalo?: InputMaybe<IntFieldUpdateOperationsInput>;
  nome?: InputMaybe<StringFieldUpdateOperationsInput>;
  tipo?: InputMaybe<EnumAlertaTypeFieldUpdateOperationsInput>;
};

export type AlertaUpdateOneRequiredWithoutAlertaAlunoInput = {
  connect?: InputMaybe<AlertaWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AlertaCreateOrConnectWithoutAlertaAlunoInput>;
  create?: InputMaybe<AlertaCreateWithoutAlertaAlunoInput>;
  update?: InputMaybe<AlertaUpdateWithoutAlertaAlunoInput>;
  upsert?: InputMaybe<AlertaUpsertWithoutAlertaAlunoInput>;
};

export type AlertaUpdateWithoutAlertaAlunoInput = {
  corpoEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  diasIntervalo?: InputMaybe<IntFieldUpdateOperationsInput>;
  nome?: InputMaybe<StringFieldUpdateOperationsInput>;
  tipo?: InputMaybe<EnumAlertaTypeFieldUpdateOperationsInput>;
};

export type AlertaUpsertWithoutAlertaAlunoInput = {
  create: AlertaCreateWithoutAlertaAlunoInput;
  update: AlertaUpdateWithoutAlertaAlunoInput;
};

export type AlertaWhereInput = {
  AND?: InputMaybe<Array<AlertaWhereInput>>;
  AlertaAluno?: InputMaybe<AlertaAlunoListRelationFilter>;
  NOT?: InputMaybe<Array<AlertaWhereInput>>;
  OR?: InputMaybe<Array<AlertaWhereInput>>;
  corpoEmail?: InputMaybe<StringNullableFilter>;
  diasIntervalo?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  nome?: InputMaybe<StringFilter>;
  tipo?: InputMaybe<EnumAlertaTypeFilter>;
};

export type AlertaWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  tipo?: InputMaybe<AlertaType>;
};

export type Aluno = {
  __typename?: 'Aluno';
  AlertaAluno: Array<AlertaAluno>;
  _count?: Maybe<AlunoCount>;
  ativo: Scalars['Boolean'];
  coorientador?: Maybe<Docente>;
  coorientadorId?: Maybe<Scalars['Int']>;
  cpf: Scalars['String'];
  dataIngresso: Scalars['DateTime'];
  dataLimite: Scalars['DateTime'];
  emailInstitucional?: Maybe<Scalars['String']>;
  emailPessoal?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  matricula: Scalars['String'];
  nomeCompleto: Scalars['String'];
  orientador?: Maybe<Docente>;
  orientadorId?: Maybe<Scalars['Int']>;
};


export type AlunoAlertaAlunoArgs = {
  cursor?: InputMaybe<AlertaAlunoWhereUniqueInput>;
  distinct?: InputMaybe<Array<AlertaAlunoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AlertaAlunoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AlertaAlunoWhereInput>;
};

export type AlunoAvgAggregate = {
  __typename?: 'AlunoAvgAggregate';
  coorientadorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  orientadorId?: Maybe<Scalars['Float']>;
};

export type AlunoAvgOrderByAggregateInput = {
  coorientadorId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  orientadorId?: InputMaybe<SortOrder>;
};

export type AlunoCount = {
  __typename?: 'AlunoCount';
  AlertaAluno: Scalars['Int'];
};

export type AlunoCountAggregate = {
  __typename?: 'AlunoCountAggregate';
  _all: Scalars['Int'];
  ativo: Scalars['Int'];
  coorientadorId: Scalars['Int'];
  cpf: Scalars['Int'];
  dataIngresso: Scalars['Int'];
  dataLimite: Scalars['Int'];
  emailInstitucional: Scalars['Int'];
  emailPessoal: Scalars['Int'];
  id: Scalars['Int'];
  matricula: Scalars['Int'];
  nomeCompleto: Scalars['Int'];
  orientadorId: Scalars['Int'];
};

export type AlunoCountOrderByAggregateInput = {
  ativo?: InputMaybe<SortOrder>;
  coorientadorId?: InputMaybe<SortOrder>;
  cpf?: InputMaybe<SortOrder>;
  dataIngresso?: InputMaybe<SortOrder>;
  dataLimite?: InputMaybe<SortOrder>;
  emailInstitucional?: InputMaybe<SortOrder>;
  emailPessoal?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  matricula?: InputMaybe<SortOrder>;
  nomeCompleto?: InputMaybe<SortOrder>;
  orientadorId?: InputMaybe<SortOrder>;
};

export type AlunoCreateInput = {
  AlertaAluno?: InputMaybe<AlertaAlunoCreateNestedManyWithoutAlunoInput>;
  ativo?: InputMaybe<Scalars['Boolean']>;
  coorientador?: InputMaybe<DocenteCreateNestedOneWithoutAlunoCoorientadoInput>;
  cpf: Scalars['String'];
  dataIngresso: Scalars['DateTime'];
  dataLimite: Scalars['DateTime'];
  emailInstitucional?: InputMaybe<Scalars['String']>;
  emailPessoal?: InputMaybe<Scalars['String']>;
  matricula: Scalars['String'];
  nomeCompleto: Scalars['String'];
  orientador?: InputMaybe<DocenteCreateNestedOneWithoutAlunoOrientadoInput>;
};

export type AlunoCreateManyCoorientadorInput = {
  ativo?: InputMaybe<Scalars['Boolean']>;
  cpf: Scalars['String'];
  dataIngresso: Scalars['DateTime'];
  dataLimite: Scalars['DateTime'];
  emailInstitucional?: InputMaybe<Scalars['String']>;
  emailPessoal?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  matricula: Scalars['String'];
  nomeCompleto: Scalars['String'];
  orientadorId?: InputMaybe<Scalars['Int']>;
};

export type AlunoCreateManyCoorientadorInputEnvelope = {
  data: Array<AlunoCreateManyCoorientadorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AlunoCreateManyInput = {
  ativo?: InputMaybe<Scalars['Boolean']>;
  coorientadorId?: InputMaybe<Scalars['Int']>;
  cpf: Scalars['String'];
  dataIngresso: Scalars['DateTime'];
  dataLimite: Scalars['DateTime'];
  emailInstitucional?: InputMaybe<Scalars['String']>;
  emailPessoal?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  matricula: Scalars['String'];
  nomeCompleto: Scalars['String'];
  orientadorId?: InputMaybe<Scalars['Int']>;
};

export type AlunoCreateManyOrientadorInput = {
  ativo?: InputMaybe<Scalars['Boolean']>;
  coorientadorId?: InputMaybe<Scalars['Int']>;
  cpf: Scalars['String'];
  dataIngresso: Scalars['DateTime'];
  dataLimite: Scalars['DateTime'];
  emailInstitucional?: InputMaybe<Scalars['String']>;
  emailPessoal?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  matricula: Scalars['String'];
  nomeCompleto: Scalars['String'];
};

export type AlunoCreateManyOrientadorInputEnvelope = {
  data: Array<AlunoCreateManyOrientadorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AlunoCreateNestedManyWithoutCoorientadorInput = {
  connect?: InputMaybe<Array<AlunoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AlunoCreateOrConnectWithoutCoorientadorInput>>;
  create?: InputMaybe<Array<AlunoCreateWithoutCoorientadorInput>>;
  createMany?: InputMaybe<AlunoCreateManyCoorientadorInputEnvelope>;
};

export type AlunoCreateNestedManyWithoutOrientadorInput = {
  connect?: InputMaybe<Array<AlunoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AlunoCreateOrConnectWithoutOrientadorInput>>;
  create?: InputMaybe<Array<AlunoCreateWithoutOrientadorInput>>;
  createMany?: InputMaybe<AlunoCreateManyOrientadorInputEnvelope>;
};

export type AlunoCreateNestedOneWithoutAlertaAlunoInput = {
  connect?: InputMaybe<AlunoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AlunoCreateOrConnectWithoutAlertaAlunoInput>;
  create?: InputMaybe<AlunoCreateWithoutAlertaAlunoInput>;
};

export type AlunoCreateOrConnectWithoutAlertaAlunoInput = {
  create: AlunoCreateWithoutAlertaAlunoInput;
  where: AlunoWhereUniqueInput;
};

export type AlunoCreateOrConnectWithoutCoorientadorInput = {
  create: AlunoCreateWithoutCoorientadorInput;
  where: AlunoWhereUniqueInput;
};

export type AlunoCreateOrConnectWithoutOrientadorInput = {
  create: AlunoCreateWithoutOrientadorInput;
  where: AlunoWhereUniqueInput;
};

export type AlunoCreateWithoutAlertaAlunoInput = {
  ativo?: InputMaybe<Scalars['Boolean']>;
  coorientador?: InputMaybe<DocenteCreateNestedOneWithoutAlunoCoorientadoInput>;
  cpf: Scalars['String'];
  dataIngresso: Scalars['DateTime'];
  dataLimite: Scalars['DateTime'];
  emailInstitucional?: InputMaybe<Scalars['String']>;
  emailPessoal?: InputMaybe<Scalars['String']>;
  matricula: Scalars['String'];
  nomeCompleto: Scalars['String'];
  orientador?: InputMaybe<DocenteCreateNestedOneWithoutAlunoOrientadoInput>;
};

export type AlunoCreateWithoutCoorientadorInput = {
  AlertaAluno?: InputMaybe<AlertaAlunoCreateNestedManyWithoutAlunoInput>;
  ativo?: InputMaybe<Scalars['Boolean']>;
  cpf: Scalars['String'];
  dataIngresso: Scalars['DateTime'];
  dataLimite: Scalars['DateTime'];
  emailInstitucional?: InputMaybe<Scalars['String']>;
  emailPessoal?: InputMaybe<Scalars['String']>;
  matricula: Scalars['String'];
  nomeCompleto: Scalars['String'];
  orientador?: InputMaybe<DocenteCreateNestedOneWithoutAlunoOrientadoInput>;
};

export type AlunoCreateWithoutOrientadorInput = {
  AlertaAluno?: InputMaybe<AlertaAlunoCreateNestedManyWithoutAlunoInput>;
  ativo?: InputMaybe<Scalars['Boolean']>;
  coorientador?: InputMaybe<DocenteCreateNestedOneWithoutAlunoCoorientadoInput>;
  cpf: Scalars['String'];
  dataIngresso: Scalars['DateTime'];
  dataLimite: Scalars['DateTime'];
  emailInstitucional?: InputMaybe<Scalars['String']>;
  emailPessoal?: InputMaybe<Scalars['String']>;
  matricula: Scalars['String'];
  nomeCompleto: Scalars['String'];
};

export type AlunoGroupBy = {
  __typename?: 'AlunoGroupBy';
  _avg?: Maybe<AlunoAvgAggregate>;
  _count?: Maybe<AlunoCountAggregate>;
  _max?: Maybe<AlunoMaxAggregate>;
  _min?: Maybe<AlunoMinAggregate>;
  _sum?: Maybe<AlunoSumAggregate>;
  ativo: Scalars['Boolean'];
  coorientadorId?: Maybe<Scalars['Int']>;
  cpf: Scalars['String'];
  dataIngresso: Scalars['DateTime'];
  dataLimite: Scalars['DateTime'];
  emailInstitucional?: Maybe<Scalars['String']>;
  emailPessoal?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  matricula: Scalars['String'];
  nomeCompleto: Scalars['String'];
  orientadorId?: Maybe<Scalars['Int']>;
};

export type AlunoListRelationFilter = {
  every?: InputMaybe<AlunoWhereInput>;
  none?: InputMaybe<AlunoWhereInput>;
  some?: InputMaybe<AlunoWhereInput>;
};

export type AlunoMaxAggregate = {
  __typename?: 'AlunoMaxAggregate';
  ativo?: Maybe<Scalars['Boolean']>;
  coorientadorId?: Maybe<Scalars['Int']>;
  cpf?: Maybe<Scalars['String']>;
  dataIngresso?: Maybe<Scalars['DateTime']>;
  dataLimite?: Maybe<Scalars['DateTime']>;
  emailInstitucional?: Maybe<Scalars['String']>;
  emailPessoal?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  matricula?: Maybe<Scalars['String']>;
  nomeCompleto?: Maybe<Scalars['String']>;
  orientadorId?: Maybe<Scalars['Int']>;
};

export type AlunoMaxOrderByAggregateInput = {
  ativo?: InputMaybe<SortOrder>;
  coorientadorId?: InputMaybe<SortOrder>;
  cpf?: InputMaybe<SortOrder>;
  dataIngresso?: InputMaybe<SortOrder>;
  dataLimite?: InputMaybe<SortOrder>;
  emailInstitucional?: InputMaybe<SortOrder>;
  emailPessoal?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  matricula?: InputMaybe<SortOrder>;
  nomeCompleto?: InputMaybe<SortOrder>;
  orientadorId?: InputMaybe<SortOrder>;
};

export type AlunoMinAggregate = {
  __typename?: 'AlunoMinAggregate';
  ativo?: Maybe<Scalars['Boolean']>;
  coorientadorId?: Maybe<Scalars['Int']>;
  cpf?: Maybe<Scalars['String']>;
  dataIngresso?: Maybe<Scalars['DateTime']>;
  dataLimite?: Maybe<Scalars['DateTime']>;
  emailInstitucional?: Maybe<Scalars['String']>;
  emailPessoal?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  matricula?: Maybe<Scalars['String']>;
  nomeCompleto?: Maybe<Scalars['String']>;
  orientadorId?: Maybe<Scalars['Int']>;
};

export type AlunoMinOrderByAggregateInput = {
  ativo?: InputMaybe<SortOrder>;
  coorientadorId?: InputMaybe<SortOrder>;
  cpf?: InputMaybe<SortOrder>;
  dataIngresso?: InputMaybe<SortOrder>;
  dataLimite?: InputMaybe<SortOrder>;
  emailInstitucional?: InputMaybe<SortOrder>;
  emailPessoal?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  matricula?: InputMaybe<SortOrder>;
  nomeCompleto?: InputMaybe<SortOrder>;
  orientadorId?: InputMaybe<SortOrder>;
};

export type AlunoOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AlunoOrderByWithAggregationInput = {
  _avg?: InputMaybe<AlunoAvgOrderByAggregateInput>;
  _count?: InputMaybe<AlunoCountOrderByAggregateInput>;
  _max?: InputMaybe<AlunoMaxOrderByAggregateInput>;
  _min?: InputMaybe<AlunoMinOrderByAggregateInput>;
  _sum?: InputMaybe<AlunoSumOrderByAggregateInput>;
  ativo?: InputMaybe<SortOrder>;
  coorientadorId?: InputMaybe<SortOrder>;
  cpf?: InputMaybe<SortOrder>;
  dataIngresso?: InputMaybe<SortOrder>;
  dataLimite?: InputMaybe<SortOrder>;
  emailInstitucional?: InputMaybe<SortOrder>;
  emailPessoal?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  matricula?: InputMaybe<SortOrder>;
  nomeCompleto?: InputMaybe<SortOrder>;
  orientadorId?: InputMaybe<SortOrder>;
};

export type AlunoOrderByWithRelationInput = {
  AlertaAluno?: InputMaybe<AlertaAlunoOrderByRelationAggregateInput>;
  ativo?: InputMaybe<SortOrder>;
  coorientador?: InputMaybe<DocenteOrderByWithRelationInput>;
  coorientadorId?: InputMaybe<SortOrder>;
  cpf?: InputMaybe<SortOrder>;
  dataIngresso?: InputMaybe<SortOrder>;
  dataLimite?: InputMaybe<SortOrder>;
  emailInstitucional?: InputMaybe<SortOrder>;
  emailPessoal?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  matricula?: InputMaybe<SortOrder>;
  nomeCompleto?: InputMaybe<SortOrder>;
  orientador?: InputMaybe<DocenteOrderByWithRelationInput>;
  orientadorId?: InputMaybe<SortOrder>;
};

export type AlunoRelationFilter = {
  is?: InputMaybe<AlunoWhereInput>;
  isNot?: InputMaybe<AlunoWhereInput>;
};

export enum AlunoScalarFieldEnum {
  Ativo = 'ativo',
  CoorientadorId = 'coorientadorId',
  Cpf = 'cpf',
  DataIngresso = 'dataIngresso',
  DataLimite = 'dataLimite',
  EmailInstitucional = 'emailInstitucional',
  EmailPessoal = 'emailPessoal',
  Id = 'id',
  Matricula = 'matricula',
  NomeCompleto = 'nomeCompleto',
  OrientadorId = 'orientadorId'
}

export type AlunoScalarWhereInput = {
  AND?: InputMaybe<Array<AlunoScalarWhereInput>>;
  NOT?: InputMaybe<Array<AlunoScalarWhereInput>>;
  OR?: InputMaybe<Array<AlunoScalarWhereInput>>;
  ativo?: InputMaybe<BoolFilter>;
  coorientadorId?: InputMaybe<IntNullableFilter>;
  cpf?: InputMaybe<StringFilter>;
  dataIngresso?: InputMaybe<DateTimeFilter>;
  dataLimite?: InputMaybe<DateTimeFilter>;
  emailInstitucional?: InputMaybe<StringNullableFilter>;
  emailPessoal?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  matricula?: InputMaybe<StringFilter>;
  nomeCompleto?: InputMaybe<StringFilter>;
  orientadorId?: InputMaybe<IntNullableFilter>;
};

export type AlunoScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AlunoScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AlunoScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AlunoScalarWhereWithAggregatesInput>>;
  ativo?: InputMaybe<BoolWithAggregatesFilter>;
  coorientadorId?: InputMaybe<IntNullableWithAggregatesFilter>;
  cpf?: InputMaybe<StringWithAggregatesFilter>;
  dataIngresso?: InputMaybe<DateTimeWithAggregatesFilter>;
  dataLimite?: InputMaybe<DateTimeWithAggregatesFilter>;
  emailInstitucional?: InputMaybe<StringNullableWithAggregatesFilter>;
  emailPessoal?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  matricula?: InputMaybe<StringWithAggregatesFilter>;
  nomeCompleto?: InputMaybe<StringWithAggregatesFilter>;
  orientadorId?: InputMaybe<IntNullableWithAggregatesFilter>;
};

export type AlunoSumAggregate = {
  __typename?: 'AlunoSumAggregate';
  coorientadorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  orientadorId?: Maybe<Scalars['Int']>;
};

export type AlunoSumOrderByAggregateInput = {
  coorientadorId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  orientadorId?: InputMaybe<SortOrder>;
};

export type AlunoUpdateInput = {
  AlertaAluno?: InputMaybe<AlertaAlunoUpdateManyWithoutAlunoInput>;
  ativo?: InputMaybe<BoolFieldUpdateOperationsInput>;
  coorientador?: InputMaybe<DocenteUpdateOneWithoutAlunoCoorientadoInput>;
  cpf?: InputMaybe<StringFieldUpdateOperationsInput>;
  dataIngresso?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dataLimite?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  emailInstitucional?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailPessoal?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  matricula?: InputMaybe<StringFieldUpdateOperationsInput>;
  nomeCompleto?: InputMaybe<StringFieldUpdateOperationsInput>;
  orientador?: InputMaybe<DocenteUpdateOneWithoutAlunoOrientadoInput>;
};

export type AlunoUpdateManyMutationInput = {
  ativo?: InputMaybe<BoolFieldUpdateOperationsInput>;
  cpf?: InputMaybe<StringFieldUpdateOperationsInput>;
  dataIngresso?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dataLimite?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  emailInstitucional?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailPessoal?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  matricula?: InputMaybe<StringFieldUpdateOperationsInput>;
  nomeCompleto?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AlunoUpdateManyWithWhereWithoutCoorientadorInput = {
  data: AlunoUpdateManyMutationInput;
  where: AlunoScalarWhereInput;
};

export type AlunoUpdateManyWithWhereWithoutOrientadorInput = {
  data: AlunoUpdateManyMutationInput;
  where: AlunoScalarWhereInput;
};

export type AlunoUpdateManyWithoutCoorientadorInput = {
  connect?: InputMaybe<Array<AlunoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AlunoCreateOrConnectWithoutCoorientadorInput>>;
  create?: InputMaybe<Array<AlunoCreateWithoutCoorientadorInput>>;
  createMany?: InputMaybe<AlunoCreateManyCoorientadorInputEnvelope>;
  delete?: InputMaybe<Array<AlunoWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AlunoScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AlunoWhereUniqueInput>>;
  set?: InputMaybe<Array<AlunoWhereUniqueInput>>;
  update?: InputMaybe<Array<AlunoUpdateWithWhereUniqueWithoutCoorientadorInput>>;
  updateMany?: InputMaybe<Array<AlunoUpdateManyWithWhereWithoutCoorientadorInput>>;
  upsert?: InputMaybe<Array<AlunoUpsertWithWhereUniqueWithoutCoorientadorInput>>;
};

export type AlunoUpdateManyWithoutOrientadorInput = {
  connect?: InputMaybe<Array<AlunoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AlunoCreateOrConnectWithoutOrientadorInput>>;
  create?: InputMaybe<Array<AlunoCreateWithoutOrientadorInput>>;
  createMany?: InputMaybe<AlunoCreateManyOrientadorInputEnvelope>;
  delete?: InputMaybe<Array<AlunoWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AlunoScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AlunoWhereUniqueInput>>;
  set?: InputMaybe<Array<AlunoWhereUniqueInput>>;
  update?: InputMaybe<Array<AlunoUpdateWithWhereUniqueWithoutOrientadorInput>>;
  updateMany?: InputMaybe<Array<AlunoUpdateManyWithWhereWithoutOrientadorInput>>;
  upsert?: InputMaybe<Array<AlunoUpsertWithWhereUniqueWithoutOrientadorInput>>;
};

export type AlunoUpdateOneRequiredWithoutAlertaAlunoInput = {
  connect?: InputMaybe<AlunoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AlunoCreateOrConnectWithoutAlertaAlunoInput>;
  create?: InputMaybe<AlunoCreateWithoutAlertaAlunoInput>;
  update?: InputMaybe<AlunoUpdateWithoutAlertaAlunoInput>;
  upsert?: InputMaybe<AlunoUpsertWithoutAlertaAlunoInput>;
};

export type AlunoUpdateWithWhereUniqueWithoutCoorientadorInput = {
  data: AlunoUpdateWithoutCoorientadorInput;
  where: AlunoWhereUniqueInput;
};

export type AlunoUpdateWithWhereUniqueWithoutOrientadorInput = {
  data: AlunoUpdateWithoutOrientadorInput;
  where: AlunoWhereUniqueInput;
};

export type AlunoUpdateWithoutAlertaAlunoInput = {
  ativo?: InputMaybe<BoolFieldUpdateOperationsInput>;
  coorientador?: InputMaybe<DocenteUpdateOneWithoutAlunoCoorientadoInput>;
  cpf?: InputMaybe<StringFieldUpdateOperationsInput>;
  dataIngresso?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dataLimite?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  emailInstitucional?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailPessoal?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  matricula?: InputMaybe<StringFieldUpdateOperationsInput>;
  nomeCompleto?: InputMaybe<StringFieldUpdateOperationsInput>;
  orientador?: InputMaybe<DocenteUpdateOneWithoutAlunoOrientadoInput>;
};

export type AlunoUpdateWithoutCoorientadorInput = {
  AlertaAluno?: InputMaybe<AlertaAlunoUpdateManyWithoutAlunoInput>;
  ativo?: InputMaybe<BoolFieldUpdateOperationsInput>;
  cpf?: InputMaybe<StringFieldUpdateOperationsInput>;
  dataIngresso?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dataLimite?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  emailInstitucional?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailPessoal?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  matricula?: InputMaybe<StringFieldUpdateOperationsInput>;
  nomeCompleto?: InputMaybe<StringFieldUpdateOperationsInput>;
  orientador?: InputMaybe<DocenteUpdateOneWithoutAlunoOrientadoInput>;
};

export type AlunoUpdateWithoutOrientadorInput = {
  AlertaAluno?: InputMaybe<AlertaAlunoUpdateManyWithoutAlunoInput>;
  ativo?: InputMaybe<BoolFieldUpdateOperationsInput>;
  coorientador?: InputMaybe<DocenteUpdateOneWithoutAlunoCoorientadoInput>;
  cpf?: InputMaybe<StringFieldUpdateOperationsInput>;
  dataIngresso?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dataLimite?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  emailInstitucional?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailPessoal?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  matricula?: InputMaybe<StringFieldUpdateOperationsInput>;
  nomeCompleto?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AlunoUpsertWithWhereUniqueWithoutCoorientadorInput = {
  create: AlunoCreateWithoutCoorientadorInput;
  update: AlunoUpdateWithoutCoorientadorInput;
  where: AlunoWhereUniqueInput;
};

export type AlunoUpsertWithWhereUniqueWithoutOrientadorInput = {
  create: AlunoCreateWithoutOrientadorInput;
  update: AlunoUpdateWithoutOrientadorInput;
  where: AlunoWhereUniqueInput;
};

export type AlunoUpsertWithoutAlertaAlunoInput = {
  create: AlunoCreateWithoutAlertaAlunoInput;
  update: AlunoUpdateWithoutAlertaAlunoInput;
};

export type AlunoWhereInput = {
  AND?: InputMaybe<Array<AlunoWhereInput>>;
  AlertaAluno?: InputMaybe<AlertaAlunoListRelationFilter>;
  NOT?: InputMaybe<Array<AlunoWhereInput>>;
  OR?: InputMaybe<Array<AlunoWhereInput>>;
  ativo?: InputMaybe<BoolFilter>;
  coorientador?: InputMaybe<DocenteRelationFilter>;
  coorientadorId?: InputMaybe<IntNullableFilter>;
  cpf?: InputMaybe<StringFilter>;
  dataIngresso?: InputMaybe<DateTimeFilter>;
  dataLimite?: InputMaybe<DateTimeFilter>;
  emailInstitucional?: InputMaybe<StringNullableFilter>;
  emailPessoal?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  matricula?: InputMaybe<StringFilter>;
  nomeCompleto?: InputMaybe<StringFilter>;
  orientador?: InputMaybe<DocenteRelationFilter>;
  orientadorId?: InputMaybe<IntNullableFilter>;
};

export type AlunoWhereUniqueInput = {
  emailInstitucional?: InputMaybe<Scalars['String']>;
  emailPessoal?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  matricula?: InputMaybe<Scalars['String']>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type Docente = {
  __typename?: 'Docente';
  AlunoCoorientado: Array<Aluno>;
  AlunoOrientado: Array<Aluno>;
  _count?: Maybe<DocenteCount>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  nomeCompleto: Scalars['String'];
};


export type DocenteAlunoCoorientadoArgs = {
  cursor?: InputMaybe<AlunoWhereUniqueInput>;
  distinct?: InputMaybe<Array<AlunoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AlunoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AlunoWhereInput>;
};


export type DocenteAlunoOrientadoArgs = {
  cursor?: InputMaybe<AlunoWhereUniqueInput>;
  distinct?: InputMaybe<Array<AlunoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AlunoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AlunoWhereInput>;
};

export type DocenteAvgAggregate = {
  __typename?: 'DocenteAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type DocenteAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type DocenteCount = {
  __typename?: 'DocenteCount';
  AlunoCoorientado: Scalars['Int'];
  AlunoOrientado: Scalars['Int'];
};

export type DocenteCountAggregate = {
  __typename?: 'DocenteCountAggregate';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  nomeCompleto: Scalars['Int'];
};

export type DocenteCountOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nomeCompleto?: InputMaybe<SortOrder>;
};

export type DocenteCreateInput = {
  AlunoCoorientado?: InputMaybe<AlunoCreateNestedManyWithoutCoorientadorInput>;
  AlunoOrientado?: InputMaybe<AlunoCreateNestedManyWithoutOrientadorInput>;
  email?: InputMaybe<Scalars['String']>;
  nomeCompleto: Scalars['String'];
};

export type DocenteCreateManyInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  nomeCompleto: Scalars['String'];
};

export type DocenteCreateNestedOneWithoutAlunoCoorientadoInput = {
  connect?: InputMaybe<DocenteWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DocenteCreateOrConnectWithoutAlunoCoorientadoInput>;
  create?: InputMaybe<DocenteCreateWithoutAlunoCoorientadoInput>;
};

export type DocenteCreateNestedOneWithoutAlunoOrientadoInput = {
  connect?: InputMaybe<DocenteWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DocenteCreateOrConnectWithoutAlunoOrientadoInput>;
  create?: InputMaybe<DocenteCreateWithoutAlunoOrientadoInput>;
};

export type DocenteCreateOrConnectWithoutAlunoCoorientadoInput = {
  create: DocenteCreateWithoutAlunoCoorientadoInput;
  where: DocenteWhereUniqueInput;
};

export type DocenteCreateOrConnectWithoutAlunoOrientadoInput = {
  create: DocenteCreateWithoutAlunoOrientadoInput;
  where: DocenteWhereUniqueInput;
};

export type DocenteCreateWithoutAlunoCoorientadoInput = {
  AlunoOrientado?: InputMaybe<AlunoCreateNestedManyWithoutOrientadorInput>;
  email?: InputMaybe<Scalars['String']>;
  nomeCompleto: Scalars['String'];
};

export type DocenteCreateWithoutAlunoOrientadoInput = {
  AlunoCoorientado?: InputMaybe<AlunoCreateNestedManyWithoutCoorientadorInput>;
  email?: InputMaybe<Scalars['String']>;
  nomeCompleto: Scalars['String'];
};

export type DocenteGroupBy = {
  __typename?: 'DocenteGroupBy';
  _avg?: Maybe<DocenteAvgAggregate>;
  _count?: Maybe<DocenteCountAggregate>;
  _max?: Maybe<DocenteMaxAggregate>;
  _min?: Maybe<DocenteMinAggregate>;
  _sum?: Maybe<DocenteSumAggregate>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  nomeCompleto: Scalars['String'];
};

export type DocenteMaxAggregate = {
  __typename?: 'DocenteMaxAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  nomeCompleto?: Maybe<Scalars['String']>;
};

export type DocenteMaxOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nomeCompleto?: InputMaybe<SortOrder>;
};

export type DocenteMinAggregate = {
  __typename?: 'DocenteMinAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  nomeCompleto?: Maybe<Scalars['String']>;
};

export type DocenteMinOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nomeCompleto?: InputMaybe<SortOrder>;
};

export type DocenteOrderByWithAggregationInput = {
  _avg?: InputMaybe<DocenteAvgOrderByAggregateInput>;
  _count?: InputMaybe<DocenteCountOrderByAggregateInput>;
  _max?: InputMaybe<DocenteMaxOrderByAggregateInput>;
  _min?: InputMaybe<DocenteMinOrderByAggregateInput>;
  _sum?: InputMaybe<DocenteSumOrderByAggregateInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nomeCompleto?: InputMaybe<SortOrder>;
};

export type DocenteOrderByWithRelationInput = {
  AlunoCoorientado?: InputMaybe<AlunoOrderByRelationAggregateInput>;
  AlunoOrientado?: InputMaybe<AlunoOrderByRelationAggregateInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nomeCompleto?: InputMaybe<SortOrder>;
};

export type DocenteRelationFilter = {
  is?: InputMaybe<DocenteWhereInput>;
  isNot?: InputMaybe<DocenteWhereInput>;
};

export enum DocenteScalarFieldEnum {
  Email = 'email',
  Id = 'id',
  NomeCompleto = 'nomeCompleto'
}

export type DocenteScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<DocenteScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<DocenteScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<DocenteScalarWhereWithAggregatesInput>>;
  email?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  nomeCompleto?: InputMaybe<StringWithAggregatesFilter>;
};

export type DocenteSumAggregate = {
  __typename?: 'DocenteSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type DocenteSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type DocenteUpdateInput = {
  AlunoCoorientado?: InputMaybe<AlunoUpdateManyWithoutCoorientadorInput>;
  AlunoOrientado?: InputMaybe<AlunoUpdateManyWithoutOrientadorInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nomeCompleto?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DocenteUpdateManyMutationInput = {
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nomeCompleto?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DocenteUpdateOneWithoutAlunoCoorientadoInput = {
  connect?: InputMaybe<DocenteWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DocenteCreateOrConnectWithoutAlunoCoorientadoInput>;
  create?: InputMaybe<DocenteCreateWithoutAlunoCoorientadoInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<DocenteUpdateWithoutAlunoCoorientadoInput>;
  upsert?: InputMaybe<DocenteUpsertWithoutAlunoCoorientadoInput>;
};

export type DocenteUpdateOneWithoutAlunoOrientadoInput = {
  connect?: InputMaybe<DocenteWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DocenteCreateOrConnectWithoutAlunoOrientadoInput>;
  create?: InputMaybe<DocenteCreateWithoutAlunoOrientadoInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<DocenteUpdateWithoutAlunoOrientadoInput>;
  upsert?: InputMaybe<DocenteUpsertWithoutAlunoOrientadoInput>;
};

export type DocenteUpdateWithoutAlunoCoorientadoInput = {
  AlunoOrientado?: InputMaybe<AlunoUpdateManyWithoutOrientadorInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nomeCompleto?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DocenteUpdateWithoutAlunoOrientadoInput = {
  AlunoCoorientado?: InputMaybe<AlunoUpdateManyWithoutCoorientadorInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nomeCompleto?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DocenteUpsertWithoutAlunoCoorientadoInput = {
  create: DocenteCreateWithoutAlunoCoorientadoInput;
  update: DocenteUpdateWithoutAlunoCoorientadoInput;
};

export type DocenteUpsertWithoutAlunoOrientadoInput = {
  create: DocenteCreateWithoutAlunoOrientadoInput;
  update: DocenteUpdateWithoutAlunoOrientadoInput;
};

export type DocenteWhereInput = {
  AND?: InputMaybe<Array<DocenteWhereInput>>;
  AlunoCoorientado?: InputMaybe<AlunoListRelationFilter>;
  AlunoOrientado?: InputMaybe<AlunoListRelationFilter>;
  NOT?: InputMaybe<Array<DocenteWhereInput>>;
  OR?: InputMaybe<Array<DocenteWhereInput>>;
  email?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  nomeCompleto?: InputMaybe<StringFilter>;
};

export type DocenteWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type EnumAlertaTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<AlertaType>;
};

export type EnumAlertaTypeFilter = {
  equals?: InputMaybe<AlertaType>;
  in?: InputMaybe<Array<AlertaType>>;
  not?: InputMaybe<NestedEnumAlertaTypeFilter>;
  notIn?: InputMaybe<Array<AlertaType>>;
};

export type EnumAlertaTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumAlertaTypeFilter>;
  _min?: InputMaybe<NestedEnumAlertaTypeFilter>;
  equals?: InputMaybe<AlertaType>;
  in?: InputMaybe<Array<AlertaType>>;
  not?: InputMaybe<NestedEnumAlertaTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<AlertaType>>;
};

export type FieldsCreateAluno = {
  coorientadorId?: InputMaybe<Scalars['Int']>;
  cpf: Scalars['String'];
  dataIngresso: Scalars['DateTime'];
  emailInstitucional?: InputMaybe<Scalars['String']>;
  emailPessoal?: InputMaybe<Scalars['String']>;
  matricula: Scalars['String'];
  nomeCompleto: Scalars['String'];
  orientadorId?: InputMaybe<Scalars['Int']>;
};

export type FieldsCreateUser = {
  nomeCompleto: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type FieldsLogin = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type FieldsUpdateAluno = {
  ativo?: InputMaybe<Scalars['Boolean']>;
  coorientadorId?: InputMaybe<Scalars['Int']>;
  cpf?: InputMaybe<Scalars['String']>;
  dataIngresso?: InputMaybe<Scalars['DateTime']>;
  emailInstitucional?: InputMaybe<Scalars['String']>;
  emailPessoal?: InputMaybe<Scalars['String']>;
  matricula?: InputMaybe<Scalars['String']>;
  nomeCompleto?: InputMaybe<Scalars['String']>;
  orientadorId?: InputMaybe<Scalars['Int']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Login = {
  __typename?: 'Login';
  expiresIn: Scalars['String'];
  id: Scalars['Int'];
  token: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAlerta: Alerta;
  createAlertaAluno: AlertaAluno;
  createAluno: Aluno;
  createDocente: Docente;
  createManyAlerta: AffectedRowsOutput;
  createManyAlertaAluno: AffectedRowsOutput;
  createManyAluno: AffectedRowsOutput;
  createManyDocente: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createUser: User;
  customCreateAluno: Aluno;
  customCreateUser: Scalars['Boolean'];
  customDeleteAluno?: Maybe<Scalars['Boolean']>;
  customLogin: Login;
  customNewDataLimite: Aluno;
  customSetAlunoAtivo: Aluno;
  customUpdateAluno: Aluno;
  deleteAlerta?: Maybe<Alerta>;
  deleteAlertaAluno?: Maybe<AlertaAluno>;
  deleteAluno?: Maybe<Aluno>;
  deleteDocente?: Maybe<Docente>;
  deleteManyAlerta: AffectedRowsOutput;
  deleteManyAlertaAluno: AffectedRowsOutput;
  deleteManyAluno: AffectedRowsOutput;
  deleteManyDocente: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteUser?: Maybe<User>;
  sendAlertaAluno: AlertaAluno;
  sendAlertasDashboard: Scalars['Boolean'];
  sendManyAlertaAluno: Scalars['Int'];
  updateAlerta?: Maybe<Alerta>;
  updateAlertaAluno?: Maybe<AlertaAluno>;
  updateAluno?: Maybe<Aluno>;
  updateDocente?: Maybe<Docente>;
  updateManyAlerta: AffectedRowsOutput;
  updateManyAlertaAluno: AffectedRowsOutput;
  updateManyAluno: AffectedRowsOutput;
  updateManyDocente: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateUser?: Maybe<User>;
  upsertAlerta: Alerta;
  upsertAlertaAluno: AlertaAluno;
  upsertAluno: Aluno;
  upsertDocente: Docente;
  upsertUser: User;
};


export type MutationCreateAlertaArgs = {
  data: AlertaCreateInput;
};


export type MutationCreateAlertaAlunoArgs = {
  data: AlertaAlunoCreateInput;
};


export type MutationCreateAlunoArgs = {
  data: AlunoCreateInput;
};


export type MutationCreateDocenteArgs = {
  data: DocenteCreateInput;
};


export type MutationCreateManyAlertaArgs = {
  data: Array<AlertaCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyAlertaAlunoArgs = {
  data: Array<AlertaAlunoCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyAlunoArgs = {
  data: Array<AlunoCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyDocenteArgs = {
  data: Array<DocenteCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCustomCreateAlunoArgs = {
  data: FieldsCreateAluno;
};


export type MutationCustomCreateUserArgs = {
  data: FieldsCreateUser;
};


export type MutationCustomDeleteAlunoArgs = {
  alunoId: Scalars['Float'];
};


export type MutationCustomLoginArgs = {
  data: FieldsLogin;
};


export type MutationCustomNewDataLimiteArgs = {
  alunoId: Scalars['Float'];
  dataLimite: Scalars['DateTime'];
};


export type MutationCustomSetAlunoAtivoArgs = {
  alunoId: Scalars['Float'];
  ativo: Scalars['Boolean'];
};


export type MutationCustomUpdateAlunoArgs = {
  alunoId: Scalars['Int'];
  data: FieldsUpdateAluno;
};


export type MutationDeleteAlertaArgs = {
  where: AlertaWhereUniqueInput;
};


export type MutationDeleteAlertaAlunoArgs = {
  where: AlertaAlunoWhereUniqueInput;
};


export type MutationDeleteAlunoArgs = {
  where: AlunoWhereUniqueInput;
};


export type MutationDeleteDocenteArgs = {
  where: DocenteWhereUniqueInput;
};


export type MutationDeleteManyAlertaArgs = {
  where?: InputMaybe<AlertaWhereInput>;
};


export type MutationDeleteManyAlertaAlunoArgs = {
  where?: InputMaybe<AlertaAlunoWhereInput>;
};


export type MutationDeleteManyAlunoArgs = {
  where?: InputMaybe<AlunoWhereInput>;
};


export type MutationDeleteManyDocenteArgs = {
  where?: InputMaybe<DocenteWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationSendAlertaAlunoArgs = {
  alertaAlunoId: Scalars['Int'];
  messageEmail: Scalars['String'];
};


export type MutationSendManyAlertaAlunoArgs = {
  alertaAlunoIds: Array<Scalars['Int']>;
};


export type MutationUpdateAlertaArgs = {
  data: AlertaUpdateInput;
  where: AlertaWhereUniqueInput;
};


export type MutationUpdateAlertaAlunoArgs = {
  data: AlertaAlunoUpdateInput;
  where: AlertaAlunoWhereUniqueInput;
};


export type MutationUpdateAlunoArgs = {
  data: AlunoUpdateInput;
  where: AlunoWhereUniqueInput;
};


export type MutationUpdateDocenteArgs = {
  data: DocenteUpdateInput;
  where: DocenteWhereUniqueInput;
};


export type MutationUpdateManyAlertaArgs = {
  data: AlertaUpdateManyMutationInput;
  where?: InputMaybe<AlertaWhereInput>;
};


export type MutationUpdateManyAlertaAlunoArgs = {
  data: AlertaAlunoUpdateManyMutationInput;
  where?: InputMaybe<AlertaAlunoWhereInput>;
};


export type MutationUpdateManyAlunoArgs = {
  data: AlunoUpdateManyMutationInput;
  where?: InputMaybe<AlunoWhereInput>;
};


export type MutationUpdateManyDocenteArgs = {
  data: DocenteUpdateManyMutationInput;
  where?: InputMaybe<DocenteWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertAlertaArgs = {
  create: AlertaCreateInput;
  update: AlertaUpdateInput;
  where: AlertaWhereUniqueInput;
};


export type MutationUpsertAlertaAlunoArgs = {
  create: AlertaAlunoCreateInput;
  update: AlertaAlunoUpdateInput;
  where: AlertaAlunoWhereUniqueInput;
};


export type MutationUpsertAlunoArgs = {
  create: AlunoCreateInput;
  update: AlunoUpdateInput;
  where: AlunoWhereUniqueInput;
};


export type MutationUpsertDocenteArgs = {
  create: DocenteCreateInput;
  update: DocenteUpdateInput;
  where: DocenteWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumAlertaTypeFilter = {
  equals?: InputMaybe<AlertaType>;
  in?: InputMaybe<Array<AlertaType>>;
  not?: InputMaybe<NestedEnumAlertaTypeFilter>;
  notIn?: InputMaybe<Array<AlertaType>>;
};

export type NestedEnumAlertaTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumAlertaTypeFilter>;
  _min?: InputMaybe<NestedEnumAlertaTypeFilter>;
  equals?: InputMaybe<AlertaType>;
  in?: InputMaybe<Array<AlertaType>>;
  not?: InputMaybe<NestedEnumAlertaTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<AlertaType>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateAlerta: AggregateAlerta;
  aggregateAlertaAluno: AggregateAlertaAluno;
  aggregateAluno: AggregateAluno;
  aggregateDocente: AggregateDocente;
  aggregateUser: AggregateUser;
  alerta?: Maybe<Alerta>;
  alertaAluno?: Maybe<AlertaAluno>;
  alertaAlunos: Array<AlertaAluno>;
  alertas: Array<Alerta>;
  aluno?: Maybe<Aluno>;
  alunos: Array<Aluno>;
  docente?: Maybe<Docente>;
  docentes: Array<Docente>;
  findFirstAlerta?: Maybe<Alerta>;
  findFirstAlertaAluno?: Maybe<AlertaAluno>;
  findFirstAluno?: Maybe<Aluno>;
  findFirstDocente?: Maybe<Docente>;
  findFirstUser?: Maybe<User>;
  groupByAlerta: Array<AlertaGroupBy>;
  groupByAlertaAluno: Array<AlertaAlunoGroupBy>;
  groupByAluno: Array<AlunoGroupBy>;
  groupByDocente: Array<DocenteGroupBy>;
  groupByUser: Array<UserGroupBy>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateAlertaArgs = {
  cursor?: InputMaybe<AlertaWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AlertaOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AlertaWhereInput>;
};


export type QueryAggregateAlertaAlunoArgs = {
  cursor?: InputMaybe<AlertaAlunoWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AlertaAlunoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AlertaAlunoWhereInput>;
};


export type QueryAggregateAlunoArgs = {
  cursor?: InputMaybe<AlunoWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AlunoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AlunoWhereInput>;
};


export type QueryAggregateDocenteArgs = {
  cursor?: InputMaybe<DocenteWhereUniqueInput>;
  orderBy?: InputMaybe<Array<DocenteOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DocenteWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAlertaArgs = {
  where: AlertaWhereUniqueInput;
};


export type QueryAlertaAlunoArgs = {
  where: AlertaAlunoWhereUniqueInput;
};


export type QueryAlertaAlunosArgs = {
  cursor?: InputMaybe<AlertaAlunoWhereUniqueInput>;
  distinct?: InputMaybe<Array<AlertaAlunoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AlertaAlunoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AlertaAlunoWhereInput>;
};


export type QueryAlertasArgs = {
  cursor?: InputMaybe<AlertaWhereUniqueInput>;
  distinct?: InputMaybe<Array<AlertaScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AlertaOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AlertaWhereInput>;
};


export type QueryAlunoArgs = {
  where: AlunoWhereUniqueInput;
};


export type QueryAlunosArgs = {
  cursor?: InputMaybe<AlunoWhereUniqueInput>;
  distinct?: InputMaybe<Array<AlunoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AlunoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AlunoWhereInput>;
};


export type QueryDocenteArgs = {
  where: DocenteWhereUniqueInput;
};


export type QueryDocentesArgs = {
  cursor?: InputMaybe<DocenteWhereUniqueInput>;
  distinct?: InputMaybe<Array<DocenteScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DocenteOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DocenteWhereInput>;
};


export type QueryFindFirstAlertaArgs = {
  cursor?: InputMaybe<AlertaWhereUniqueInput>;
  distinct?: InputMaybe<Array<AlertaScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AlertaOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AlertaWhereInput>;
};


export type QueryFindFirstAlertaAlunoArgs = {
  cursor?: InputMaybe<AlertaAlunoWhereUniqueInput>;
  distinct?: InputMaybe<Array<AlertaAlunoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AlertaAlunoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AlertaAlunoWhereInput>;
};


export type QueryFindFirstAlunoArgs = {
  cursor?: InputMaybe<AlunoWhereUniqueInput>;
  distinct?: InputMaybe<Array<AlunoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AlunoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AlunoWhereInput>;
};


export type QueryFindFirstDocenteArgs = {
  cursor?: InputMaybe<DocenteWhereUniqueInput>;
  distinct?: InputMaybe<Array<DocenteScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DocenteOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DocenteWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByAlertaArgs = {
  by: Array<AlertaScalarFieldEnum>;
  having?: InputMaybe<AlertaScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AlertaOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AlertaWhereInput>;
};


export type QueryGroupByAlertaAlunoArgs = {
  by: Array<AlertaAlunoScalarFieldEnum>;
  having?: InputMaybe<AlertaAlunoScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AlertaAlunoOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AlertaAlunoWhereInput>;
};


export type QueryGroupByAlunoArgs = {
  by: Array<AlunoScalarFieldEnum>;
  having?: InputMaybe<AlunoScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AlunoOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AlunoWhereInput>;
};


export type QueryGroupByDocenteArgs = {
  by: Array<DocenteScalarFieldEnum>;
  having?: InputMaybe<DocenteScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<DocenteOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DocenteWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  nomeCompleto: Scalars['String'];
  passwordHash: Scalars['String'];
  username: Scalars['String'];
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  nomeCompleto: Scalars['Int'];
  passwordHash: Scalars['Int'];
  username: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  nomeCompleto?: InputMaybe<SortOrder>;
  passwordHash?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  nomeCompleto: Scalars['String'];
  passwordHash: Scalars['String'];
  username: Scalars['String'];
};

export type UserCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  nomeCompleto: Scalars['String'];
  passwordHash: Scalars['String'];
  username: Scalars['String'];
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  id: Scalars['Int'];
  nomeCompleto: Scalars['String'];
  passwordHash: Scalars['String'];
  username: Scalars['String'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  nomeCompleto?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  nomeCompleto?: InputMaybe<SortOrder>;
  passwordHash?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  id?: Maybe<Scalars['Int']>;
  nomeCompleto?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  nomeCompleto?: InputMaybe<SortOrder>;
  passwordHash?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  nomeCompleto?: InputMaybe<SortOrder>;
  passwordHash?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  nomeCompleto?: InputMaybe<SortOrder>;
  passwordHash?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  Id = 'id',
  NomeCompleto = 'nomeCompleto',
  PasswordHash = 'passwordHash',
  Username = 'username'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  nomeCompleto?: InputMaybe<StringWithAggregatesFilter>;
  passwordHash?: InputMaybe<StringWithAggregatesFilter>;
  username?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  nomeCompleto?: InputMaybe<StringFieldUpdateOperationsInput>;
  passwordHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  nomeCompleto?: InputMaybe<StringFieldUpdateOperationsInput>;
  passwordHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  id?: InputMaybe<IntFilter>;
  nomeCompleto?: InputMaybe<StringFilter>;
  passwordHash?: InputMaybe<StringFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
};
