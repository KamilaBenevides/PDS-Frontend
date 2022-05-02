"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaUpdateWithoutAlertaAlunoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let AlertaUpdateWithoutAlertaAlunoInput = class AlertaUpdateWithoutAlertaAlunoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], AlertaUpdateWithoutAlertaAlunoInput.prototype, "diasIntervalo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AlertaUpdateWithoutAlertaAlunoInput.prototype, "nome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], AlertaUpdateWithoutAlertaAlunoInput.prototype, "corpoEmail", void 0);
AlertaUpdateWithoutAlertaAlunoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaUpdateWithoutAlertaAlunoInput", {
        isAbstract: true
    })
], AlertaUpdateWithoutAlertaAlunoInput);
exports.AlertaUpdateWithoutAlertaAlunoInput = AlertaUpdateWithoutAlertaAlunoInput;
