"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteUpdateWithoutAlunoCoorientadoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoUpdateManyWithoutOrientadorInput_1 = require("../inputs/AlunoUpdateManyWithoutOrientadorInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let DocenteUpdateWithoutAlunoCoorientadoInput = class DocenteUpdateWithoutAlunoCoorientadoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], DocenteUpdateWithoutAlunoCoorientadoInput.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], DocenteUpdateWithoutAlunoCoorientadoInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoUpdateManyWithoutOrientadorInput_1.AlunoUpdateManyWithoutOrientadorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoUpdateManyWithoutOrientadorInput_1.AlunoUpdateManyWithoutOrientadorInput)
], DocenteUpdateWithoutAlunoCoorientadoInput.prototype, "AlunoOrientado", void 0);
DocenteUpdateWithoutAlunoCoorientadoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocenteUpdateWithoutAlunoCoorientadoInput", {
        isAbstract: true
    })
], DocenteUpdateWithoutAlunoCoorientadoInput);
exports.DocenteUpdateWithoutAlunoCoorientadoInput = DocenteUpdateWithoutAlunoCoorientadoInput;
