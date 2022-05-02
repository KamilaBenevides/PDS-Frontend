"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoOrderByRelationAggregateInput_1 = require("../inputs/AlertaAlunoOrderByRelationAggregateInput");
const DocenteOrderByWithRelationInput_1 = require("../inputs/DocenteOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AlunoOrderByWithRelationInput = class AlunoOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoOrderByWithRelationInput.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoOrderByWithRelationInput.prototype, "matricula", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoOrderByWithRelationInput.prototype, "dataIngresso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoOrderByWithRelationInput.prototype, "dataLimite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoOrderByWithRelationInput.prototype, "cpf", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoOrderByWithRelationInput.prototype, "emailInstitucional", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoOrderByWithRelationInput.prototype, "emailPessoal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoOrderByWithRelationInput.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteOrderByWithRelationInput_1.DocenteOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteOrderByWithRelationInput_1.DocenteOrderByWithRelationInput)
], AlunoOrderByWithRelationInput.prototype, "orientador", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoOrderByWithRelationInput.prototype, "orientadorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteOrderByWithRelationInput_1.DocenteOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteOrderByWithRelationInput_1.DocenteOrderByWithRelationInput)
], AlunoOrderByWithRelationInput.prototype, "coorientador", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoOrderByWithRelationInput.prototype, "coorientadorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoOrderByRelationAggregateInput_1.AlertaAlunoOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoOrderByRelationAggregateInput_1.AlertaAlunoOrderByRelationAggregateInput)
], AlunoOrderByWithRelationInput.prototype, "AlertaAluno", void 0);
AlunoOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoOrderByWithRelationInput", {
        isAbstract: true
    })
], AlunoOrderByWithRelationInput);
exports.AlunoOrderByWithRelationInput = AlunoOrderByWithRelationInput;
