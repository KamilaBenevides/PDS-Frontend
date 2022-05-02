"use strict";
var AlunoWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoListRelationFilter_1 = require("../inputs/AlertaAlunoListRelationFilter");
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DocenteRelationFilter_1 = require("../inputs/DocenteRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let AlunoWhereInput = AlunoWhereInput_1 = class AlunoWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], AlunoWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AlunoWhereInput.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AlunoWhereInput.prototype, "matricula", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AlunoWhereInput.prototype, "dataIngresso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AlunoWhereInput.prototype, "dataLimite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AlunoWhereInput.prototype, "cpf", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], AlunoWhereInput.prototype, "emailInstitucional", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], AlunoWhereInput.prototype, "emailPessoal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], AlunoWhereInput.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteRelationFilter_1.DocenteRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteRelationFilter_1.DocenteRelationFilter)
], AlunoWhereInput.prototype, "orientador", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], AlunoWhereInput.prototype, "orientadorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteRelationFilter_1.DocenteRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteRelationFilter_1.DocenteRelationFilter)
], AlunoWhereInput.prototype, "coorientador", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], AlunoWhereInput.prototype, "coorientadorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoListRelationFilter_1.AlertaAlunoListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoListRelationFilter_1.AlertaAlunoListRelationFilter)
], AlunoWhereInput.prototype, "AlertaAluno", void 0);
AlunoWhereInput = AlunoWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoWhereInput", {
        isAbstract: true
    })
], AlunoWhereInput);
exports.AlunoWhereInput = AlunoWhereInput;
