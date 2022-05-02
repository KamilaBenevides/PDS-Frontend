"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteUpdateWithoutAlunoOrientadoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoUpdateManyWithoutCoorientadorInput_1 = require("../inputs/AlunoUpdateManyWithoutCoorientadorInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let DocenteUpdateWithoutAlunoOrientadoInput = class DocenteUpdateWithoutAlunoOrientadoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], DocenteUpdateWithoutAlunoOrientadoInput.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], DocenteUpdateWithoutAlunoOrientadoInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoUpdateManyWithoutCoorientadorInput_1.AlunoUpdateManyWithoutCoorientadorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoUpdateManyWithoutCoorientadorInput_1.AlunoUpdateManyWithoutCoorientadorInput)
], DocenteUpdateWithoutAlunoOrientadoInput.prototype, "AlunoCoorientado", void 0);
DocenteUpdateWithoutAlunoOrientadoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocenteUpdateWithoutAlunoOrientadoInput", {
        isAbstract: true
    })
], DocenteUpdateWithoutAlunoOrientadoInput);
exports.DocenteUpdateWithoutAlunoOrientadoInput = DocenteUpdateWithoutAlunoOrientadoInput;
