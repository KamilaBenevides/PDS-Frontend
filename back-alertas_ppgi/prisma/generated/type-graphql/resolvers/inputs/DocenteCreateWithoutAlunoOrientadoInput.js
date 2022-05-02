"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteCreateWithoutAlunoOrientadoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoCreateNestedManyWithoutCoorientadorInput_1 = require("../inputs/AlunoCreateNestedManyWithoutCoorientadorInput");
let DocenteCreateWithoutAlunoOrientadoInput = class DocenteCreateWithoutAlunoOrientadoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DocenteCreateWithoutAlunoOrientadoInput.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocenteCreateWithoutAlunoOrientadoInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoCreateNestedManyWithoutCoorientadorInput_1.AlunoCreateNestedManyWithoutCoorientadorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoCreateNestedManyWithoutCoorientadorInput_1.AlunoCreateNestedManyWithoutCoorientadorInput)
], DocenteCreateWithoutAlunoOrientadoInput.prototype, "AlunoCoorientado", void 0);
DocenteCreateWithoutAlunoOrientadoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocenteCreateWithoutAlunoOrientadoInput", {
        isAbstract: true
    })
], DocenteCreateWithoutAlunoOrientadoInput);
exports.DocenteCreateWithoutAlunoOrientadoInput = DocenteCreateWithoutAlunoOrientadoInput;
