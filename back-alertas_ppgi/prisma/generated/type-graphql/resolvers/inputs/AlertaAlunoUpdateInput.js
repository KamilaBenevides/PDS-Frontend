"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaUpdateOneRequiredWithoutAlertaAlunoInput_1 = require("../inputs/AlertaUpdateOneRequiredWithoutAlertaAlunoInput");
const AlunoUpdateOneRequiredWithoutAlertaAlunoInput_1 = require("../inputs/AlunoUpdateOneRequiredWithoutAlertaAlunoInput");
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
let AlertaAlunoUpdateInput = class AlertaAlunoUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoUpdateOneRequiredWithoutAlertaAlunoInput_1.AlunoUpdateOneRequiredWithoutAlertaAlunoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoUpdateOneRequiredWithoutAlertaAlunoInput_1.AlunoUpdateOneRequiredWithoutAlertaAlunoInput)
], AlertaAlunoUpdateInput.prototype, "aluno", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaUpdateOneRequiredWithoutAlertaAlunoInput_1.AlertaUpdateOneRequiredWithoutAlertaAlunoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaUpdateOneRequiredWithoutAlertaAlunoInput_1.AlertaUpdateOneRequiredWithoutAlertaAlunoInput)
], AlertaAlunoUpdateInput.prototype, "Alerta", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], AlertaAlunoUpdateInput.prototype, "enviado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], AlertaAlunoUpdateInput.prototype, "resolvido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], AlertaAlunoUpdateInput.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AlertaAlunoUpdateInput.prototype, "dataEnvioEmail", void 0);
AlertaAlunoUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoUpdateInput", {
        isAbstract: true
    })
], AlertaAlunoUpdateInput);
exports.AlertaAlunoUpdateInput = AlertaAlunoUpdateInput;
