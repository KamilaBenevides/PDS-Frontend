"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoCreateWithoutCoorientadorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoCreateNestedManyWithoutAlunoInput_1 = require("../inputs/AlertaAlunoCreateNestedManyWithoutAlunoInput");
const DocenteCreateNestedOneWithoutAlunoOrientadoInput_1 = require("../inputs/DocenteCreateNestedOneWithoutAlunoOrientadoInput");
let AlunoCreateWithoutCoorientadorInput = class AlunoCreateWithoutCoorientadorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AlunoCreateWithoutCoorientadorInput.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AlunoCreateWithoutCoorientadorInput.prototype, "matricula", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AlunoCreateWithoutCoorientadorInput.prototype, "dataIngresso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AlunoCreateWithoutCoorientadorInput.prototype, "dataLimite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AlunoCreateWithoutCoorientadorInput.prototype, "cpf", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoCreateWithoutCoorientadorInput.prototype, "emailInstitucional", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoCreateWithoutCoorientadorInput.prototype, "emailPessoal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlunoCreateWithoutCoorientadorInput.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteCreateNestedOneWithoutAlunoOrientadoInput_1.DocenteCreateNestedOneWithoutAlunoOrientadoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocenteCreateNestedOneWithoutAlunoOrientadoInput_1.DocenteCreateNestedOneWithoutAlunoOrientadoInput)
], AlunoCreateWithoutCoorientadorInput.prototype, "orientador", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoCreateNestedManyWithoutAlunoInput_1.AlertaAlunoCreateNestedManyWithoutAlunoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoCreateNestedManyWithoutAlunoInput_1.AlertaAlunoCreateNestedManyWithoutAlunoInput)
], AlunoCreateWithoutCoorientadorInput.prototype, "AlertaAluno", void 0);
AlunoCreateWithoutCoorientadorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoCreateWithoutCoorientadorInput", {
        isAbstract: true
    })
], AlunoCreateWithoutCoorientadorInput);
exports.AlunoCreateWithoutCoorientadorInput = AlunoCreateWithoutCoorientadorInput;
