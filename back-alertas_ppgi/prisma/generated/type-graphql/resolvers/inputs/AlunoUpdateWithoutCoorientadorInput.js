"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoUpdateWithoutCoorientadorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoUpdateManyWithoutAlunoInput_1 = require("../inputs/AlertaAlunoUpdateManyWithoutAlunoInput");
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const DocenteUpdateOneRequiredWithoutAlunoOrientadoInput_1 = require("../inputs/DocenteUpdateOneRequiredWithoutAlunoOrientadoInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let AlunoUpdateWithoutCoorientadorInput = class AlunoUpdateWithoutCoorientadorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AlunoUpdateWithoutCoorientadorInput.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AlunoUpdateWithoutCoorientadorInput.prototype, "matricula", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AlunoUpdateWithoutCoorientadorInput.prototype, "dataIngresso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AlunoUpdateWithoutCoorientadorInput.prototype, "dataLimite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AlunoUpdateWithoutCoorientadorInput.prototype, "cpf", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], AlunoUpdateWithoutCoorientadorInput.prototype, "emailInstitucional", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], AlunoUpdateWithoutCoorientadorInput.prototype, "emailPessoal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], AlunoUpdateWithoutCoorientadorInput.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteUpdateOneRequiredWithoutAlunoOrientadoInput_1.DocenteUpdateOneRequiredWithoutAlunoOrientadoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteUpdateOneRequiredWithoutAlunoOrientadoInput_1.DocenteUpdateOneRequiredWithoutAlunoOrientadoInput)
], AlunoUpdateWithoutCoorientadorInput.prototype, "orientador", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoUpdateManyWithoutAlunoInput_1.AlertaAlunoUpdateManyWithoutAlunoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoUpdateManyWithoutAlunoInput_1.AlertaAlunoUpdateManyWithoutAlunoInput)
], AlunoUpdateWithoutCoorientadorInput.prototype, "AlertaAluno", void 0);
AlunoUpdateWithoutCoorientadorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoUpdateWithoutCoorientadorInput", {
        isAbstract: true
    })
], AlunoUpdateWithoutCoorientadorInput);
exports.AlunoUpdateWithoutCoorientadorInput = AlunoUpdateWithoutCoorientadorInput;
