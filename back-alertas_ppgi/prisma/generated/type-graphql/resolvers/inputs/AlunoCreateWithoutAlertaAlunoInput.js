"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoCreateWithoutAlertaAlunoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocenteCreateNestedOneWithoutAlunoCoorientadoInput_1 = require("../inputs/DocenteCreateNestedOneWithoutAlunoCoorientadoInput");
const DocenteCreateNestedOneWithoutAlunoOrientadoInput_1 = require("../inputs/DocenteCreateNestedOneWithoutAlunoOrientadoInput");
let AlunoCreateWithoutAlertaAlunoInput = class AlunoCreateWithoutAlertaAlunoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AlunoCreateWithoutAlertaAlunoInput.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AlunoCreateWithoutAlertaAlunoInput.prototype, "matricula", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AlunoCreateWithoutAlertaAlunoInput.prototype, "dataIngresso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AlunoCreateWithoutAlertaAlunoInput.prototype, "dataLimite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AlunoCreateWithoutAlertaAlunoInput.prototype, "cpf", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoCreateWithoutAlertaAlunoInput.prototype, "emailInstitucional", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoCreateWithoutAlertaAlunoInput.prototype, "emailPessoal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlunoCreateWithoutAlertaAlunoInput.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteCreateNestedOneWithoutAlunoOrientadoInput_1.DocenteCreateNestedOneWithoutAlunoOrientadoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocenteCreateNestedOneWithoutAlunoOrientadoInput_1.DocenteCreateNestedOneWithoutAlunoOrientadoInput)
], AlunoCreateWithoutAlertaAlunoInput.prototype, "orientador", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteCreateNestedOneWithoutAlunoCoorientadoInput_1.DocenteCreateNestedOneWithoutAlunoCoorientadoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteCreateNestedOneWithoutAlunoCoorientadoInput_1.DocenteCreateNestedOneWithoutAlunoCoorientadoInput)
], AlunoCreateWithoutAlertaAlunoInput.prototype, "coorientador", void 0);
AlunoCreateWithoutAlertaAlunoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoCreateWithoutAlertaAlunoInput", {
        isAbstract: true
    })
], AlunoCreateWithoutAlertaAlunoInput);
exports.AlunoCreateWithoutAlertaAlunoInput = AlunoCreateWithoutAlertaAlunoInput;
