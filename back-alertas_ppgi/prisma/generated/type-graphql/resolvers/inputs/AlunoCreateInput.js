"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoCreateNestedManyWithoutAlunoInput_1 = require("../inputs/AlertaAlunoCreateNestedManyWithoutAlunoInput");
const DocenteCreateNestedOneWithoutAlunoCoorientadoInput_1 = require("../inputs/DocenteCreateNestedOneWithoutAlunoCoorientadoInput");
const DocenteCreateNestedOneWithoutAlunoOrientadoInput_1 = require("../inputs/DocenteCreateNestedOneWithoutAlunoOrientadoInput");
let AlunoCreateInput = class AlunoCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AlunoCreateInput.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AlunoCreateInput.prototype, "matricula", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AlunoCreateInput.prototype, "dataIngresso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AlunoCreateInput.prototype, "dataLimite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AlunoCreateInput.prototype, "cpf", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoCreateInput.prototype, "emailInstitucional", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoCreateInput.prototype, "emailPessoal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlunoCreateInput.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteCreateNestedOneWithoutAlunoOrientadoInput_1.DocenteCreateNestedOneWithoutAlunoOrientadoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocenteCreateNestedOneWithoutAlunoOrientadoInput_1.DocenteCreateNestedOneWithoutAlunoOrientadoInput)
], AlunoCreateInput.prototype, "orientador", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteCreateNestedOneWithoutAlunoCoorientadoInput_1.DocenteCreateNestedOneWithoutAlunoCoorientadoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteCreateNestedOneWithoutAlunoCoorientadoInput_1.DocenteCreateNestedOneWithoutAlunoCoorientadoInput)
], AlunoCreateInput.prototype, "coorientador", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoCreateNestedManyWithoutAlunoInput_1.AlertaAlunoCreateNestedManyWithoutAlunoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoCreateNestedManyWithoutAlunoInput_1.AlertaAlunoCreateNestedManyWithoutAlunoInput)
], AlunoCreateInput.prototype, "AlertaAluno", void 0);
AlunoCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoCreateInput", {
        isAbstract: true
    })
], AlunoCreateInput);
exports.AlunoCreateInput = AlunoCreateInput;
