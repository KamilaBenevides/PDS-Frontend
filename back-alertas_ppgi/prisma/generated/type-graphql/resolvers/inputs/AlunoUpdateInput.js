"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoUpdateManyWithoutAlunoInput_1 = require("../inputs/AlertaAlunoUpdateManyWithoutAlunoInput");
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const DocenteUpdateOneRequiredWithoutAlunoOrientadoInput_1 = require("../inputs/DocenteUpdateOneRequiredWithoutAlunoOrientadoInput");
const DocenteUpdateOneWithoutAlunoCoorientadoInput_1 = require("../inputs/DocenteUpdateOneWithoutAlunoCoorientadoInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let AlunoUpdateInput = class AlunoUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AlunoUpdateInput.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AlunoUpdateInput.prototype, "matricula", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AlunoUpdateInput.prototype, "dataIngresso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AlunoUpdateInput.prototype, "dataLimite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AlunoUpdateInput.prototype, "cpf", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], AlunoUpdateInput.prototype, "emailInstitucional", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], AlunoUpdateInput.prototype, "emailPessoal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], AlunoUpdateInput.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteUpdateOneRequiredWithoutAlunoOrientadoInput_1.DocenteUpdateOneRequiredWithoutAlunoOrientadoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteUpdateOneRequiredWithoutAlunoOrientadoInput_1.DocenteUpdateOneRequiredWithoutAlunoOrientadoInput)
], AlunoUpdateInput.prototype, "orientador", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteUpdateOneWithoutAlunoCoorientadoInput_1.DocenteUpdateOneWithoutAlunoCoorientadoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteUpdateOneWithoutAlunoCoorientadoInput_1.DocenteUpdateOneWithoutAlunoCoorientadoInput)
], AlunoUpdateInput.prototype, "coorientador", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoUpdateManyWithoutAlunoInput_1.AlertaAlunoUpdateManyWithoutAlunoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoUpdateManyWithoutAlunoInput_1.AlertaAlunoUpdateManyWithoutAlunoInput)
], AlunoUpdateInput.prototype, "AlertaAluno", void 0);
AlunoUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoUpdateInput", {
        isAbstract: true
    })
], AlunoUpdateInput);
exports.AlunoUpdateInput = AlunoUpdateInput;
