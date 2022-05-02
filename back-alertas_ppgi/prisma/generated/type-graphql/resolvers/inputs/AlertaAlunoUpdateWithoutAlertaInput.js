"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoUpdateWithoutAlertaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoUpdateOneRequiredWithoutAlertaAlunoInput_1 = require("../inputs/AlunoUpdateOneRequiredWithoutAlertaAlunoInput");
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
let AlertaAlunoUpdateWithoutAlertaInput = class AlertaAlunoUpdateWithoutAlertaInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoUpdateOneRequiredWithoutAlertaAlunoInput_1.AlunoUpdateOneRequiredWithoutAlertaAlunoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoUpdateOneRequiredWithoutAlertaAlunoInput_1.AlunoUpdateOneRequiredWithoutAlertaAlunoInput)
], AlertaAlunoUpdateWithoutAlertaInput.prototype, "aluno", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], AlertaAlunoUpdateWithoutAlertaInput.prototype, "enviado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], AlertaAlunoUpdateWithoutAlertaInput.prototype, "resolvido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], AlertaAlunoUpdateWithoutAlertaInput.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AlertaAlunoUpdateWithoutAlertaInput.prototype, "dataEnvioEmail", void 0);
AlertaAlunoUpdateWithoutAlertaInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoUpdateWithoutAlertaInput", {
        isAbstract: true
    })
], AlertaAlunoUpdateWithoutAlertaInput);
exports.AlertaAlunoUpdateWithoutAlertaInput = AlertaAlunoUpdateWithoutAlertaInput;
