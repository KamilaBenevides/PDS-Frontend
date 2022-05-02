"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaUpsertWithoutAlertaAlunoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaCreateWithoutAlertaAlunoInput_1 = require("../inputs/AlertaCreateWithoutAlertaAlunoInput");
const AlertaUpdateWithoutAlertaAlunoInput_1 = require("../inputs/AlertaUpdateWithoutAlertaAlunoInput");
let AlertaUpsertWithoutAlertaAlunoInput = class AlertaUpsertWithoutAlertaAlunoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaUpdateWithoutAlertaAlunoInput_1.AlertaUpdateWithoutAlertaAlunoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaUpdateWithoutAlertaAlunoInput_1.AlertaUpdateWithoutAlertaAlunoInput)
], AlertaUpsertWithoutAlertaAlunoInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaCreateWithoutAlertaAlunoInput_1.AlertaCreateWithoutAlertaAlunoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaCreateWithoutAlertaAlunoInput_1.AlertaCreateWithoutAlertaAlunoInput)
], AlertaUpsertWithoutAlertaAlunoInput.prototype, "create", void 0);
AlertaUpsertWithoutAlertaAlunoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaUpsertWithoutAlertaAlunoInput", {
        isAbstract: true
    })
], AlertaUpsertWithoutAlertaAlunoInput);
exports.AlertaUpsertWithoutAlertaAlunoInput = AlertaUpsertWithoutAlertaAlunoInput;
