"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoUpdateManyWithoutCoorientadorInput_1 = require("../inputs/AlunoUpdateManyWithoutCoorientadorInput");
const AlunoUpdateManyWithoutOrientadorInput_1 = require("../inputs/AlunoUpdateManyWithoutOrientadorInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let DocenteUpdateInput = class DocenteUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], DocenteUpdateInput.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], DocenteUpdateInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoUpdateManyWithoutOrientadorInput_1.AlunoUpdateManyWithoutOrientadorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoUpdateManyWithoutOrientadorInput_1.AlunoUpdateManyWithoutOrientadorInput)
], DocenteUpdateInput.prototype, "AlunoOrientado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoUpdateManyWithoutCoorientadorInput_1.AlunoUpdateManyWithoutCoorientadorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoUpdateManyWithoutCoorientadorInput_1.AlunoUpdateManyWithoutCoorientadorInput)
], DocenteUpdateInput.prototype, "AlunoCoorientado", void 0);
DocenteUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocenteUpdateInput", {
        isAbstract: true
    })
], DocenteUpdateInput);
exports.DocenteUpdateInput = DocenteUpdateInput;
