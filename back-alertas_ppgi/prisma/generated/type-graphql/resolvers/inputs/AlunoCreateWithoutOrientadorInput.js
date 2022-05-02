"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoCreateWithoutOrientadorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoCreateNestedManyWithoutAlunoInput_1 = require("../inputs/AlertaAlunoCreateNestedManyWithoutAlunoInput");
const DocenteCreateNestedOneWithoutAlunoCoorientadoInput_1 = require("../inputs/DocenteCreateNestedOneWithoutAlunoCoorientadoInput");
let AlunoCreateWithoutOrientadorInput = class AlunoCreateWithoutOrientadorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AlunoCreateWithoutOrientadorInput.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AlunoCreateWithoutOrientadorInput.prototype, "matricula", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AlunoCreateWithoutOrientadorInput.prototype, "dataIngresso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AlunoCreateWithoutOrientadorInput.prototype, "dataLimite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AlunoCreateWithoutOrientadorInput.prototype, "cpf", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoCreateWithoutOrientadorInput.prototype, "emailInstitucional", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoCreateWithoutOrientadorInput.prototype, "emailPessoal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlunoCreateWithoutOrientadorInput.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteCreateNestedOneWithoutAlunoCoorientadoInput_1.DocenteCreateNestedOneWithoutAlunoCoorientadoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteCreateNestedOneWithoutAlunoCoorientadoInput_1.DocenteCreateNestedOneWithoutAlunoCoorientadoInput)
], AlunoCreateWithoutOrientadorInput.prototype, "coorientador", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoCreateNestedManyWithoutAlunoInput_1.AlertaAlunoCreateNestedManyWithoutAlunoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoCreateNestedManyWithoutAlunoInput_1.AlertaAlunoCreateNestedManyWithoutAlunoInput)
], AlunoCreateWithoutOrientadorInput.prototype, "AlertaAluno", void 0);
AlunoCreateWithoutOrientadorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoCreateWithoutOrientadorInput", {
        isAbstract: true
    })
], AlunoCreateWithoutOrientadorInput);
exports.AlunoCreateWithoutOrientadorInput = AlunoCreateWithoutOrientadorInput;
