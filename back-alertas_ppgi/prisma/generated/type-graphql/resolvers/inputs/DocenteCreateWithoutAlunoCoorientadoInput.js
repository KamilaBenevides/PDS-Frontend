"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteCreateWithoutAlunoCoorientadoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoCreateNestedManyWithoutOrientadorInput_1 = require("../inputs/AlunoCreateNestedManyWithoutOrientadorInput");
let DocenteCreateWithoutAlunoCoorientadoInput = class DocenteCreateWithoutAlunoCoorientadoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DocenteCreateWithoutAlunoCoorientadoInput.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocenteCreateWithoutAlunoCoorientadoInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoCreateNestedManyWithoutOrientadorInput_1.AlunoCreateNestedManyWithoutOrientadorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoCreateNestedManyWithoutOrientadorInput_1.AlunoCreateNestedManyWithoutOrientadorInput)
], DocenteCreateWithoutAlunoCoorientadoInput.prototype, "AlunoOrientado", void 0);
DocenteCreateWithoutAlunoCoorientadoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocenteCreateWithoutAlunoCoorientadoInput", {
        isAbstract: true
    })
], DocenteCreateWithoutAlunoCoorientadoInput);
exports.DocenteCreateWithoutAlunoCoorientadoInput = DocenteCreateWithoutAlunoCoorientadoInput;
