"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoUpdateManyWithoutAlertaInput_1 = require("../inputs/AlertaAlunoUpdateManyWithoutAlertaInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let AlertaUpdateInput = class AlertaUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], AlertaUpdateInput.prototype, "diasIntervalo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AlertaUpdateInput.prototype, "nome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], AlertaUpdateInput.prototype, "corpoEmail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoUpdateManyWithoutAlertaInput_1.AlertaAlunoUpdateManyWithoutAlertaInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoUpdateManyWithoutAlertaInput_1.AlertaAlunoUpdateManyWithoutAlertaInput)
], AlertaUpdateInput.prototype, "AlertaAluno", void 0);
AlertaUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaUpdateInput", {
        isAbstract: true
    })
], AlertaUpdateInput);
exports.AlertaUpdateInput = AlertaUpdateInput;
