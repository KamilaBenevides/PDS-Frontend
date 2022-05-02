"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaCreateOrConnectWithoutAlertaAlunoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaCreateWithoutAlertaAlunoInput_1 = require("../inputs/AlertaCreateWithoutAlertaAlunoInput");
const AlertaWhereUniqueInput_1 = require("../inputs/AlertaWhereUniqueInput");
let AlertaCreateOrConnectWithoutAlertaAlunoInput = class AlertaCreateOrConnectWithoutAlertaAlunoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaWhereUniqueInput_1.AlertaWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaWhereUniqueInput_1.AlertaWhereUniqueInput)
], AlertaCreateOrConnectWithoutAlertaAlunoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaCreateWithoutAlertaAlunoInput_1.AlertaCreateWithoutAlertaAlunoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaCreateWithoutAlertaAlunoInput_1.AlertaCreateWithoutAlertaAlunoInput)
], AlertaCreateOrConnectWithoutAlertaAlunoInput.prototype, "create", void 0);
AlertaCreateOrConnectWithoutAlertaAlunoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaCreateOrConnectWithoutAlertaAlunoInput", {
        isAbstract: true
    })
], AlertaCreateOrConnectWithoutAlertaAlunoInput);
exports.AlertaCreateOrConnectWithoutAlertaAlunoInput = AlertaCreateOrConnectWithoutAlertaAlunoInput;
