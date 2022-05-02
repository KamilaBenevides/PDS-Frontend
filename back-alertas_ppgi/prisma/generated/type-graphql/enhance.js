"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Aluno: crudResolvers.AlunoCrudResolver,
    Docente: crudResolvers.DocenteCrudResolver,
    Alerta: crudResolvers.AlertaCrudResolver,
    AlertaAluno: crudResolvers.AlertaAlunoCrudResolver
};
const actionResolversMap = {
    Aluno: {
        aluno: actionResolvers.FindUniqueAlunoResolver,
        findFirstAluno: actionResolvers.FindFirstAlunoResolver,
        alunos: actionResolvers.FindManyAlunoResolver,
        createAluno: actionResolvers.CreateAlunoResolver,
        createManyAluno: actionResolvers.CreateManyAlunoResolver,
        deleteAluno: actionResolvers.DeleteAlunoResolver,
        updateAluno: actionResolvers.UpdateAlunoResolver,
        deleteManyAluno: actionResolvers.DeleteManyAlunoResolver,
        updateManyAluno: actionResolvers.UpdateManyAlunoResolver,
        upsertAluno: actionResolvers.UpsertAlunoResolver,
        aggregateAluno: actionResolvers.AggregateAlunoResolver,
        groupByAluno: actionResolvers.GroupByAlunoResolver
    },
    Docente: {
        docente: actionResolvers.FindUniqueDocenteResolver,
        findFirstDocente: actionResolvers.FindFirstDocenteResolver,
        docentes: actionResolvers.FindManyDocenteResolver,
        createDocente: actionResolvers.CreateDocenteResolver,
        createManyDocente: actionResolvers.CreateManyDocenteResolver,
        deleteDocente: actionResolvers.DeleteDocenteResolver,
        updateDocente: actionResolvers.UpdateDocenteResolver,
        deleteManyDocente: actionResolvers.DeleteManyDocenteResolver,
        updateManyDocente: actionResolvers.UpdateManyDocenteResolver,
        upsertDocente: actionResolvers.UpsertDocenteResolver,
        aggregateDocente: actionResolvers.AggregateDocenteResolver,
        groupByDocente: actionResolvers.GroupByDocenteResolver
    },
    Alerta: {
        alerta: actionResolvers.FindUniqueAlertaResolver,
        findFirstAlerta: actionResolvers.FindFirstAlertaResolver,
        alertas: actionResolvers.FindManyAlertaResolver,
        createAlerta: actionResolvers.CreateAlertaResolver,
        createManyAlerta: actionResolvers.CreateManyAlertaResolver,
        deleteAlerta: actionResolvers.DeleteAlertaResolver,
        updateAlerta: actionResolvers.UpdateAlertaResolver,
        deleteManyAlerta: actionResolvers.DeleteManyAlertaResolver,
        updateManyAlerta: actionResolvers.UpdateManyAlertaResolver,
        upsertAlerta: actionResolvers.UpsertAlertaResolver,
        aggregateAlerta: actionResolvers.AggregateAlertaResolver,
        groupByAlerta: actionResolvers.GroupByAlertaResolver
    },
    AlertaAluno: {
        alertaAluno: actionResolvers.FindUniqueAlertaAlunoResolver,
        findFirstAlertaAluno: actionResolvers.FindFirstAlertaAlunoResolver,
        alertaAlunos: actionResolvers.FindManyAlertaAlunoResolver,
        createAlertaAluno: actionResolvers.CreateAlertaAlunoResolver,
        createManyAlertaAluno: actionResolvers.CreateManyAlertaAlunoResolver,
        deleteAlertaAluno: actionResolvers.DeleteAlertaAlunoResolver,
        updateAlertaAluno: actionResolvers.UpdateAlertaAlunoResolver,
        deleteManyAlertaAluno: actionResolvers.DeleteManyAlertaAlunoResolver,
        updateManyAlertaAluno: actionResolvers.UpdateManyAlertaAlunoResolver,
        upsertAlertaAluno: actionResolvers.UpsertAlertaAlunoResolver,
        aggregateAlertaAluno: actionResolvers.AggregateAlertaAlunoResolver,
        groupByAlertaAluno: actionResolvers.GroupByAlertaAlunoResolver
    }
};
const crudResolversInfo = {
    Aluno: ["aluno", "findFirstAluno", "alunos", "createAluno", "createManyAluno", "deleteAluno", "updateAluno", "deleteManyAluno", "updateManyAluno", "upsertAluno", "aggregateAluno", "groupByAluno"],
    Docente: ["docente", "findFirstDocente", "docentes", "createDocente", "createManyDocente", "deleteDocente", "updateDocente", "deleteManyDocente", "updateManyDocente", "upsertDocente", "aggregateDocente", "groupByDocente"],
    Alerta: ["alerta", "findFirstAlerta", "alertas", "createAlerta", "createManyAlerta", "deleteAlerta", "updateAlerta", "deleteManyAlerta", "updateManyAlerta", "upsertAlerta", "aggregateAlerta", "groupByAlerta"],
    AlertaAluno: ["alertaAluno", "findFirstAlertaAluno", "alertaAlunos", "createAlertaAluno", "createManyAlertaAluno", "deleteAlertaAluno", "updateAlertaAluno", "deleteManyAlertaAluno", "updateManyAlertaAluno", "upsertAlertaAluno", "aggregateAlertaAluno", "groupByAlertaAluno"]
};
const argsInfo = {
    FindUniqueAlunoArgs: ["where"],
    FindFirstAlunoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAlunoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateAlunoArgs: ["data"],
    CreateManyAlunoArgs: ["data", "skipDuplicates"],
    DeleteAlunoArgs: ["where"],
    UpdateAlunoArgs: ["data", "where"],
    DeleteManyAlunoArgs: ["where"],
    UpdateManyAlunoArgs: ["data", "where"],
    UpsertAlunoArgs: ["where", "create", "update"],
    AggregateAlunoArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByAlunoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueDocenteArgs: ["where"],
    FindFirstDocenteArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyDocenteArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateDocenteArgs: ["data"],
    CreateManyDocenteArgs: ["data", "skipDuplicates"],
    DeleteDocenteArgs: ["where"],
    UpdateDocenteArgs: ["data", "where"],
    DeleteManyDocenteArgs: ["where"],
    UpdateManyDocenteArgs: ["data", "where"],
    UpsertDocenteArgs: ["where", "create", "update"],
    AggregateDocenteArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByDocenteArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueAlertaArgs: ["where"],
    FindFirstAlertaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAlertaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateAlertaArgs: ["data"],
    CreateManyAlertaArgs: ["data", "skipDuplicates"],
    DeleteAlertaArgs: ["where"],
    UpdateAlertaArgs: ["data", "where"],
    DeleteManyAlertaArgs: ["where"],
    UpdateManyAlertaArgs: ["data", "where"],
    UpsertAlertaArgs: ["where", "create", "update"],
    AggregateAlertaArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByAlertaArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueAlertaAlunoArgs: ["where"],
    FindFirstAlertaAlunoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAlertaAlunoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateAlertaAlunoArgs: ["data"],
    CreateManyAlertaAlunoArgs: ["data", "skipDuplicates"],
    DeleteAlertaAlunoArgs: ["where"],
    UpdateAlertaAlunoArgs: ["data", "where"],
    DeleteManyAlertaAlunoArgs: ["where"],
    UpdateManyAlertaAlunoArgs: ["data", "where"],
    UpsertAlertaAlunoArgs: ["where", "create", "update"],
    AggregateAlertaAlunoArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByAlertaAlunoArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Aluno: relationResolvers.AlunoRelationsResolver,
    Docente: relationResolvers.DocenteRelationsResolver,
    Alerta: relationResolvers.AlertaRelationsResolver,
    AlertaAluno: relationResolvers.AlertaAlunoRelationsResolver
};
const relationResolversInfo = {
    Aluno: ["orientador", "coorientador", "AlertaAluno"],
    Docente: ["AlunoOrientado", "AlunoCoorientado"],
    Alerta: ["AlertaAluno"],
    AlertaAluno: ["aluno", "Alerta"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Aluno: ["id", "nomeCompleto", "matricula", "dataIngresso", "dataLimite", "cpf", "emailInstitucional", "emailPessoal", "ativo", "orientadorId", "coorientadorId"],
    Docente: ["id", "nomeCompleto", "email"],
    Alerta: ["id", "diasIntervalo", "nome", "corpoEmail"],
    AlertaAluno: ["id", "alunoId", "alertaId", "enviado", "resolvido", "ativo", "dataEnvioEmail"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateAluno: ["_count", "_avg", "_sum", "_min", "_max"],
    AlunoGroupBy: ["id", "nomeCompleto", "matricula", "dataIngresso", "dataLimite", "cpf", "emailInstitucional", "emailPessoal", "ativo", "orientadorId", "coorientadorId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateDocente: ["_count", "_avg", "_sum", "_min", "_max"],
    DocenteGroupBy: ["id", "nomeCompleto", "email", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateAlerta: ["_count", "_avg", "_sum", "_min", "_max"],
    AlertaGroupBy: ["id", "diasIntervalo", "nome", "corpoEmail", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateAlertaAluno: ["_count", "_avg", "_sum", "_min", "_max"],
    AlertaAlunoGroupBy: ["id", "alunoId", "alertaId", "enviado", "resolvido", "ativo", "dataEnvioEmail", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    AlunoCount: ["AlertaAluno"],
    AlunoCountAggregate: ["id", "nomeCompleto", "matricula", "dataIngresso", "dataLimite", "cpf", "emailInstitucional", "emailPessoal", "ativo", "orientadorId", "coorientadorId", "_all"],
    AlunoAvgAggregate: ["id", "orientadorId", "coorientadorId"],
    AlunoSumAggregate: ["id", "orientadorId", "coorientadorId"],
    AlunoMinAggregate: ["id", "nomeCompleto", "matricula", "dataIngresso", "dataLimite", "cpf", "emailInstitucional", "emailPessoal", "ativo", "orientadorId", "coorientadorId"],
    AlunoMaxAggregate: ["id", "nomeCompleto", "matricula", "dataIngresso", "dataLimite", "cpf", "emailInstitucional", "emailPessoal", "ativo", "orientadorId", "coorientadorId"],
    DocenteCount: ["AlunoOrientado", "AlunoCoorientado"],
    DocenteCountAggregate: ["id", "nomeCompleto", "email", "_all"],
    DocenteAvgAggregate: ["id"],
    DocenteSumAggregate: ["id"],
    DocenteMinAggregate: ["id", "nomeCompleto", "email"],
    DocenteMaxAggregate: ["id", "nomeCompleto", "email"],
    AlertaCount: ["AlertaAluno"],
    AlertaCountAggregate: ["id", "diasIntervalo", "nome", "corpoEmail", "_all"],
    AlertaAvgAggregate: ["id", "diasIntervalo"],
    AlertaSumAggregate: ["id", "diasIntervalo"],
    AlertaMinAggregate: ["id", "diasIntervalo", "nome", "corpoEmail"],
    AlertaMaxAggregate: ["id", "diasIntervalo", "nome", "corpoEmail"],
    AlertaAlunoCountAggregate: ["id", "alunoId", "alertaId", "enviado", "resolvido", "ativo", "dataEnvioEmail", "_all"],
    AlertaAlunoAvgAggregate: ["id", "alunoId", "alertaId"],
    AlertaAlunoSumAggregate: ["id", "alunoId", "alertaId"],
    AlertaAlunoMinAggregate: ["id", "alunoId", "alertaId", "enviado", "resolvido", "ativo", "dataEnvioEmail"],
    AlertaAlunoMaxAggregate: ["id", "alunoId", "alertaId", "enviado", "resolvido", "ativo", "dataEnvioEmail"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    AlunoWhereInput: ["AND", "OR", "NOT", "id", "nomeCompleto", "matricula", "dataIngresso", "dataLimite", "cpf", "emailInstitucional", "emailPessoal", "ativo", "orientador", "orientadorId", "coorientador", "coorientadorId", "AlertaAluno"],
    AlunoOrderByWithRelationInput: ["id", "nomeCompleto", "matricula", "dataIngresso", "dataLimite", "cpf", "emailInstitucional", "emailPessoal", "ativo", "orientador", "orientadorId", "coorientador", "coorientadorId", "AlertaAluno"],
    AlunoWhereUniqueInput: ["id", "matricula", "emailInstitucional", "emailPessoal"],
    AlunoOrderByWithAggregationInput: ["id", "nomeCompleto", "matricula", "dataIngresso", "dataLimite", "cpf", "emailInstitucional", "emailPessoal", "ativo", "orientadorId", "coorientadorId", "_count", "_avg", "_max", "_min", "_sum"],
    AlunoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "nomeCompleto", "matricula", "dataIngresso", "dataLimite", "cpf", "emailInstitucional", "emailPessoal", "ativo", "orientadorId", "coorientadorId"],
    DocenteWhereInput: ["AND", "OR", "NOT", "id", "nomeCompleto", "email", "AlunoOrientado", "AlunoCoorientado"],
    DocenteOrderByWithRelationInput: ["id", "nomeCompleto", "email", "AlunoOrientado", "AlunoCoorientado"],
    DocenteWhereUniqueInput: ["id"],
    DocenteOrderByWithAggregationInput: ["id", "nomeCompleto", "email", "_count", "_avg", "_max", "_min", "_sum"],
    DocenteScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "nomeCompleto", "email"],
    AlertaWhereInput: ["AND", "OR", "NOT", "id", "diasIntervalo", "nome", "corpoEmail", "AlertaAluno"],
    AlertaOrderByWithRelationInput: ["id", "diasIntervalo", "nome", "corpoEmail", "AlertaAluno"],
    AlertaWhereUniqueInput: ["id"],
    AlertaOrderByWithAggregationInput: ["id", "diasIntervalo", "nome", "corpoEmail", "_count", "_avg", "_max", "_min", "_sum"],
    AlertaScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "diasIntervalo", "nome", "corpoEmail"],
    AlertaAlunoWhereInput: ["AND", "OR", "NOT", "id", "aluno", "alunoId", "Alerta", "alertaId", "enviado", "resolvido", "ativo", "dataEnvioEmail"],
    AlertaAlunoOrderByWithRelationInput: ["id", "aluno", "alunoId", "Alerta", "alertaId", "enviado", "resolvido", "ativo", "dataEnvioEmail"],
    AlertaAlunoWhereUniqueInput: ["id"],
    AlertaAlunoOrderByWithAggregationInput: ["id", "alunoId", "alertaId", "enviado", "resolvido", "ativo", "dataEnvioEmail", "_count", "_avg", "_max", "_min", "_sum"],
    AlertaAlunoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "alunoId", "alertaId", "enviado", "resolvido", "ativo", "dataEnvioEmail"],
    AlunoCreateInput: ["nomeCompleto", "matricula", "dataIngresso", "dataLimite", "cpf", "emailInstitucional", "emailPessoal", "ativo", "orientador", "coorientador", "AlertaAluno"],
    AlunoUpdateInput: ["nomeCompleto", "matricula", "dataIngresso", "dataLimite", "cpf", "emailInstitucional", "emailPessoal", "ativo", "orientador", "coorientador", "AlertaAluno"],
    AlunoCreateManyInput: ["id", "nomeCompleto", "matricula", "dataIngresso", "dataLimite", "cpf", "emailInstitucional", "emailPessoal", "ativo", "orientadorId", "coorientadorId"],
    AlunoUpdateManyMutationInput: ["nomeCompleto", "matricula", "dataIngresso", "dataLimite", "cpf", "emailInstitucional", "emailPessoal", "ativo"],
    DocenteCreateInput: ["nomeCompleto", "email", "AlunoOrientado", "AlunoCoorientado"],
    DocenteUpdateInput: ["nomeCompleto", "email", "AlunoOrientado", "AlunoCoorientado"],
    DocenteCreateManyInput: ["id", "nomeCompleto", "email"],
    DocenteUpdateManyMutationInput: ["nomeCompleto", "email"],
    AlertaCreateInput: ["diasIntervalo", "nome", "corpoEmail", "AlertaAluno"],
    AlertaUpdateInput: ["diasIntervalo", "nome", "corpoEmail", "AlertaAluno"],
    AlertaCreateManyInput: ["id", "diasIntervalo", "nome", "corpoEmail"],
    AlertaUpdateManyMutationInput: ["diasIntervalo", "nome", "corpoEmail"],
    AlertaAlunoCreateInput: ["aluno", "Alerta", "enviado", "resolvido", "ativo", "dataEnvioEmail"],
    AlertaAlunoUpdateInput: ["aluno", "Alerta", "enviado", "resolvido", "ativo", "dataEnvioEmail"],
    AlertaAlunoCreateManyInput: ["id", "alunoId", "alertaId", "enviado", "resolvido", "ativo", "dataEnvioEmail"],
    AlertaAlunoUpdateManyMutationInput: ["enviado", "resolvido", "ativo", "dataEnvioEmail"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    BoolFilter: ["equals", "not"],
    DocenteRelationFilter: ["is", "isNot"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    AlertaAlunoListRelationFilter: ["every", "some", "none"],
    AlertaAlunoOrderByRelationAggregateInput: ["_count"],
    AlunoCountOrderByAggregateInput: ["id", "nomeCompleto", "matricula", "dataIngresso", "dataLimite", "cpf", "emailInstitucional", "emailPessoal", "ativo", "orientadorId", "coorientadorId"],
    AlunoAvgOrderByAggregateInput: ["id", "orientadorId", "coorientadorId"],
    AlunoMaxOrderByAggregateInput: ["id", "nomeCompleto", "matricula", "dataIngresso", "dataLimite", "cpf", "emailInstitucional", "emailPessoal", "ativo", "orientadorId", "coorientadorId"],
    AlunoMinOrderByAggregateInput: ["id", "nomeCompleto", "matricula", "dataIngresso", "dataLimite", "cpf", "emailInstitucional", "emailPessoal", "ativo", "orientadorId", "coorientadorId"],
    AlunoSumOrderByAggregateInput: ["id", "orientadorId", "coorientadorId"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    AlunoListRelationFilter: ["every", "some", "none"],
    AlunoOrderByRelationAggregateInput: ["_count"],
    DocenteCountOrderByAggregateInput: ["id", "nomeCompleto", "email"],
    DocenteAvgOrderByAggregateInput: ["id"],
    DocenteMaxOrderByAggregateInput: ["id", "nomeCompleto", "email"],
    DocenteMinOrderByAggregateInput: ["id", "nomeCompleto", "email"],
    DocenteSumOrderByAggregateInput: ["id"],
    AlertaCountOrderByAggregateInput: ["id", "diasIntervalo", "nome", "corpoEmail"],
    AlertaAvgOrderByAggregateInput: ["id", "diasIntervalo"],
    AlertaMaxOrderByAggregateInput: ["id", "diasIntervalo", "nome", "corpoEmail"],
    AlertaMinOrderByAggregateInput: ["id", "diasIntervalo", "nome", "corpoEmail"],
    AlertaSumOrderByAggregateInput: ["id", "diasIntervalo"],
    AlunoRelationFilter: ["is", "isNot"],
    AlertaRelationFilter: ["is", "isNot"],
    AlertaAlunoCountOrderByAggregateInput: ["id", "alunoId", "alertaId", "enviado", "resolvido", "ativo", "dataEnvioEmail"],
    AlertaAlunoAvgOrderByAggregateInput: ["id", "alunoId", "alertaId"],
    AlertaAlunoMaxOrderByAggregateInput: ["id", "alunoId", "alertaId", "enviado", "resolvido", "ativo", "dataEnvioEmail"],
    AlertaAlunoMinOrderByAggregateInput: ["id", "alunoId", "alertaId", "enviado", "resolvido", "ativo", "dataEnvioEmail"],
    AlertaAlunoSumOrderByAggregateInput: ["id", "alunoId", "alertaId"],
    DocenteCreateNestedOneWithoutAlunoOrientadoInput: ["create", "connectOrCreate", "connect"],
    DocenteCreateNestedOneWithoutAlunoCoorientadoInput: ["create", "connectOrCreate", "connect"],
    AlertaAlunoCreateNestedManyWithoutAlunoInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    BoolFieldUpdateOperationsInput: ["set"],
    DocenteUpdateOneRequiredWithoutAlunoOrientadoInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    DocenteUpdateOneWithoutAlunoCoorientadoInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    AlertaAlunoUpdateManyWithoutAlunoInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    AlunoCreateNestedManyWithoutOrientadorInput: ["create", "connectOrCreate", "createMany", "connect"],
    AlunoCreateNestedManyWithoutCoorientadorInput: ["create", "connectOrCreate", "createMany", "connect"],
    AlunoUpdateManyWithoutOrientadorInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    AlunoUpdateManyWithoutCoorientadorInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    AlertaAlunoCreateNestedManyWithoutAlertaInput: ["create", "connectOrCreate", "createMany", "connect"],
    AlertaAlunoUpdateManyWithoutAlertaInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    AlunoCreateNestedOneWithoutAlertaAlunoInput: ["create", "connectOrCreate", "connect"],
    AlertaCreateNestedOneWithoutAlertaAlunoInput: ["create", "connectOrCreate", "connect"],
    AlunoUpdateOneRequiredWithoutAlertaAlunoInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    AlertaUpdateOneRequiredWithoutAlertaAlunoInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedBoolFilter: ["equals", "not"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    DocenteCreateWithoutAlunoOrientadoInput: ["nomeCompleto", "email", "AlunoCoorientado"],
    DocenteCreateOrConnectWithoutAlunoOrientadoInput: ["where", "create"],
    DocenteCreateWithoutAlunoCoorientadoInput: ["nomeCompleto", "email", "AlunoOrientado"],
    DocenteCreateOrConnectWithoutAlunoCoorientadoInput: ["where", "create"],
    AlertaAlunoCreateWithoutAlunoInput: ["Alerta", "enviado", "resolvido", "ativo", "dataEnvioEmail"],
    AlertaAlunoCreateOrConnectWithoutAlunoInput: ["where", "create"],
    AlertaAlunoCreateManyAlunoInputEnvelope: ["data", "skipDuplicates"],
    DocenteUpsertWithoutAlunoOrientadoInput: ["update", "create"],
    DocenteUpdateWithoutAlunoOrientadoInput: ["nomeCompleto", "email", "AlunoCoorientado"],
    DocenteUpsertWithoutAlunoCoorientadoInput: ["update", "create"],
    DocenteUpdateWithoutAlunoCoorientadoInput: ["nomeCompleto", "email", "AlunoOrientado"],
    AlertaAlunoUpsertWithWhereUniqueWithoutAlunoInput: ["where", "update", "create"],
    AlertaAlunoUpdateWithWhereUniqueWithoutAlunoInput: ["where", "data"],
    AlertaAlunoUpdateManyWithWhereWithoutAlunoInput: ["where", "data"],
    AlertaAlunoScalarWhereInput: ["AND", "OR", "NOT", "id", "alunoId", "alertaId", "enviado", "resolvido", "ativo", "dataEnvioEmail"],
    AlunoCreateWithoutOrientadorInput: ["nomeCompleto", "matricula", "dataIngresso", "dataLimite", "cpf", "emailInstitucional", "emailPessoal", "ativo", "coorientador", "AlertaAluno"],
    AlunoCreateOrConnectWithoutOrientadorInput: ["where", "create"],
    AlunoCreateManyOrientadorInputEnvelope: ["data", "skipDuplicates"],
    AlunoCreateWithoutCoorientadorInput: ["nomeCompleto", "matricula", "dataIngresso", "dataLimite", "cpf", "emailInstitucional", "emailPessoal", "ativo", "orientador", "AlertaAluno"],
    AlunoCreateOrConnectWithoutCoorientadorInput: ["where", "create"],
    AlunoCreateManyCoorientadorInputEnvelope: ["data", "skipDuplicates"],
    AlunoUpsertWithWhereUniqueWithoutOrientadorInput: ["where", "update", "create"],
    AlunoUpdateWithWhereUniqueWithoutOrientadorInput: ["where", "data"],
    AlunoUpdateManyWithWhereWithoutOrientadorInput: ["where", "data"],
    AlunoScalarWhereInput: ["AND", "OR", "NOT", "id", "nomeCompleto", "matricula", "dataIngresso", "dataLimite", "cpf", "emailInstitucional", "emailPessoal", "ativo", "orientadorId", "coorientadorId"],
    AlunoUpsertWithWhereUniqueWithoutCoorientadorInput: ["where", "update", "create"],
    AlunoUpdateWithWhereUniqueWithoutCoorientadorInput: ["where", "data"],
    AlunoUpdateManyWithWhereWithoutCoorientadorInput: ["where", "data"],
    AlertaAlunoCreateWithoutAlertaInput: ["aluno", "enviado", "resolvido", "ativo", "dataEnvioEmail"],
    AlertaAlunoCreateOrConnectWithoutAlertaInput: ["where", "create"],
    AlertaAlunoCreateManyAlertaInputEnvelope: ["data", "skipDuplicates"],
    AlertaAlunoUpsertWithWhereUniqueWithoutAlertaInput: ["where", "update", "create"],
    AlertaAlunoUpdateWithWhereUniqueWithoutAlertaInput: ["where", "data"],
    AlertaAlunoUpdateManyWithWhereWithoutAlertaInput: ["where", "data"],
    AlunoCreateWithoutAlertaAlunoInput: ["nomeCompleto", "matricula", "dataIngresso", "dataLimite", "cpf", "emailInstitucional", "emailPessoal", "ativo", "orientador", "coorientador"],
    AlunoCreateOrConnectWithoutAlertaAlunoInput: ["where", "create"],
    AlertaCreateWithoutAlertaAlunoInput: ["diasIntervalo", "nome", "corpoEmail"],
    AlertaCreateOrConnectWithoutAlertaAlunoInput: ["where", "create"],
    AlunoUpsertWithoutAlertaAlunoInput: ["update", "create"],
    AlunoUpdateWithoutAlertaAlunoInput: ["nomeCompleto", "matricula", "dataIngresso", "dataLimite", "cpf", "emailInstitucional", "emailPessoal", "ativo", "orientador", "coorientador"],
    AlertaUpsertWithoutAlertaAlunoInput: ["update", "create"],
    AlertaUpdateWithoutAlertaAlunoInput: ["diasIntervalo", "nome", "corpoEmail"],
    AlertaAlunoCreateManyAlunoInput: ["id", "alertaId", "enviado", "resolvido", "ativo", "dataEnvioEmail"],
    AlertaAlunoUpdateWithoutAlunoInput: ["Alerta", "enviado", "resolvido", "ativo", "dataEnvioEmail"],
    AlunoCreateManyOrientadorInput: ["id", "nomeCompleto", "matricula", "dataIngresso", "dataLimite", "cpf", "emailInstitucional", "emailPessoal", "ativo", "coorientadorId"],
    AlunoCreateManyCoorientadorInput: ["id", "nomeCompleto", "matricula", "dataIngresso", "dataLimite", "cpf", "emailInstitucional", "emailPessoal", "ativo", "orientadorId"],
    AlunoUpdateWithoutOrientadorInput: ["nomeCompleto", "matricula", "dataIngresso", "dataLimite", "cpf", "emailInstitucional", "emailPessoal", "ativo", "coorientador", "AlertaAluno"],
    AlunoUpdateWithoutCoorientadorInput: ["nomeCompleto", "matricula", "dataIngresso", "dataLimite", "cpf", "emailInstitucional", "emailPessoal", "ativo", "orientador", "AlertaAluno"],
    AlertaAlunoCreateManyAlertaInput: ["id", "alunoId", "enviado", "resolvido", "ativo", "dataEnvioEmail"],
    AlertaAlunoUpdateWithoutAlertaInput: ["aluno", "enviado", "resolvido", "ativo", "dataEnvioEmail"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
