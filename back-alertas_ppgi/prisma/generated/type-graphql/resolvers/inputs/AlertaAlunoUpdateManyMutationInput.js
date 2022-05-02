"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
let AlertaAlunoUpdateManyMutationInput = class AlertaAlunoUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], AlertaAlunoUpdateManyMutationInput.prototype, "enviado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], AlertaAlunoUpdateManyMutationInput.prototype, "resolvido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], AlertaAlunoUpdateManyMutationInput.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AlertaAlunoUpdateManyMutationInput.prototype, "dataEnvioEmail", void 0);
AlertaAlunoUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoUpdateManyMutationInput", {
        isAbstract: true
    })
], AlertaAlunoUpdateManyMutationInput);
exports.AlertaAlunoUpdateManyMutationInput = AlertaAlunoUpdateManyMutationInput;
