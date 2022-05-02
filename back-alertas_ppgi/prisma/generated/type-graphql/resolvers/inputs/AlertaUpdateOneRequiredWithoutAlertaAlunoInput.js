"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaUpdateOneRequiredWithoutAlertaAlunoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaCreateOrConnectWithoutAlertaAlunoInput_1 = require("../inputs/AlertaCreateOrConnectWithoutAlertaAlunoInput");
const AlertaCreateWithoutAlertaAlunoInput_1 = require("../inputs/AlertaCreateWithoutAlertaAlunoInput");
const AlertaUpdateWithoutAlertaAlunoInput_1 = require("../inputs/AlertaUpdateWithoutAlertaAlunoInput");
const AlertaUpsertWithoutAlertaAlunoInput_1 = require("../inputs/AlertaUpsertWithoutAlertaAlunoInput");
const AlertaWhereUniqueInput_1 = require("../inputs/AlertaWhereUniqueInput");
let AlertaUpdateOneRequiredWithoutAlertaAlunoInput = class AlertaUpdateOneRequiredWithoutAlertaAlunoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaCreateWithoutAlertaAlunoInput_1.AlertaCreateWithoutAlertaAlunoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaCreateWithoutAlertaAlunoInput_1.AlertaCreateWithoutAlertaAlunoInput)
], AlertaUpdateOneRequiredWithoutAlertaAlunoInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaCreateOrConnectWithoutAlertaAlunoInput_1.AlertaCreateOrConnectWithoutAlertaAlunoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaCreateOrConnectWithoutAlertaAlunoInput_1.AlertaCreateOrConnectWithoutAlertaAlunoInput)
], AlertaUpdateOneRequiredWithoutAlertaAlunoInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaUpsertWithoutAlertaAlunoInput_1.AlertaUpsertWithoutAlertaAlunoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaUpsertWithoutAlertaAlunoInput_1.AlertaUpsertWithoutAlertaAlunoInput)
], AlertaUpdateOneRequiredWithoutAlertaAlunoInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaWhereUniqueInput_1.AlertaWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaWhereUniqueInput_1.AlertaWhereUniqueInput)
], AlertaUpdateOneRequiredWithoutAlertaAlunoInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaUpdateWithoutAlertaAlunoInput_1.AlertaUpdateWithoutAlertaAlunoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaUpdateWithoutAlertaAlunoInput_1.AlertaUpdateWithoutAlertaAlunoInput)
], AlertaUpdateOneRequiredWithoutAlertaAlunoInput.prototype, "update", void 0);
AlertaUpdateOneRequiredWithoutAlertaAlunoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaUpdateOneRequiredWithoutAlertaAlunoInput", {
        isAbstract: true
    })
], AlertaUpdateOneRequiredWithoutAlertaAlunoInput);
exports.AlertaUpdateOneRequiredWithoutAlertaAlunoInput = AlertaUpdateOneRequiredWithoutAlertaAlunoInput;
