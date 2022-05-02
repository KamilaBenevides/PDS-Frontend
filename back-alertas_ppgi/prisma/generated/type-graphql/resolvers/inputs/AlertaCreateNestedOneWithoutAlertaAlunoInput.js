"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaCreateNestedOneWithoutAlertaAlunoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaCreateOrConnectWithoutAlertaAlunoInput_1 = require("../inputs/AlertaCreateOrConnectWithoutAlertaAlunoInput");
const AlertaCreateWithoutAlertaAlunoInput_1 = require("../inputs/AlertaCreateWithoutAlertaAlunoInput");
const AlertaWhereUniqueInput_1 = require("../inputs/AlertaWhereUniqueInput");
let AlertaCreateNestedOneWithoutAlertaAlunoInput = class AlertaCreateNestedOneWithoutAlertaAlunoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaCreateWithoutAlertaAlunoInput_1.AlertaCreateWithoutAlertaAlunoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaCreateWithoutAlertaAlunoInput_1.AlertaCreateWithoutAlertaAlunoInput)
], AlertaCreateNestedOneWithoutAlertaAlunoInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaCreateOrConnectWithoutAlertaAlunoInput_1.AlertaCreateOrConnectWithoutAlertaAlunoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaCreateOrConnectWithoutAlertaAlunoInput_1.AlertaCreateOrConnectWithoutAlertaAlunoInput)
], AlertaCreateNestedOneWithoutAlertaAlunoInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaWhereUniqueInput_1.AlertaWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaWhereUniqueInput_1.AlertaWhereUniqueInput)
], AlertaCreateNestedOneWithoutAlertaAlunoInput.prototype, "connect", void 0);
AlertaCreateNestedOneWithoutAlertaAlunoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaCreateNestedOneWithoutAlertaAlunoInput", {
        isAbstract: true
    })
], AlertaCreateNestedOneWithoutAlertaAlunoInput);
exports.AlertaCreateNestedOneWithoutAlertaAlunoInput = AlertaCreateNestedOneWithoutAlertaAlunoInput;
