"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoUpdateWithoutAlunoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaUpdateOneRequiredWithoutAlertaAlunoInput_1 = require("../inputs/AlertaUpdateOneRequiredWithoutAlertaAlunoInput");
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
let AlertaAlunoUpdateWithoutAlunoInput = class AlertaAlunoUpdateWithoutAlunoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaUpdateOneRequiredWithoutAlertaAlunoInput_1.AlertaUpdateOneRequiredWithoutAlertaAlunoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaUpdateOneRequiredWithoutAlertaAlunoInput_1.AlertaUpdateOneRequiredWithoutAlertaAlunoInput)
], AlertaAlunoUpdateWithoutAlunoInput.prototype, "Alerta", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], AlertaAlunoUpdateWithoutAlunoInput.prototype, "enviado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], AlertaAlunoUpdateWithoutAlunoInput.prototype, "resolvido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], AlertaAlunoUpdateWithoutAlunoInput.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AlertaAlunoUpdateWithoutAlunoInput.prototype, "dataEnvioEmail", void 0);
AlertaAlunoUpdateWithoutAlunoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoUpdateWithoutAlunoInput", {
        isAbstract: true
    })
], AlertaAlunoUpdateWithoutAlunoInput);
exports.AlertaAlunoUpdateWithoutAlunoInput = AlertaAlunoUpdateWithoutAlunoInput;
