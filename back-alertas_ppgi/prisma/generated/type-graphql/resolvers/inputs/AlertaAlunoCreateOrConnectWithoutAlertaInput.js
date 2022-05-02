"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoCreateOrConnectWithoutAlertaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoCreateWithoutAlertaInput_1 = require("../inputs/AlertaAlunoCreateWithoutAlertaInput");
const AlertaAlunoWhereUniqueInput_1 = require("../inputs/AlertaAlunoWhereUniqueInput");
let AlertaAlunoCreateOrConnectWithoutAlertaInput = class AlertaAlunoCreateOrConnectWithoutAlertaInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput)
], AlertaAlunoCreateOrConnectWithoutAlertaInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoCreateWithoutAlertaInput_1.AlertaAlunoCreateWithoutAlertaInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaAlunoCreateWithoutAlertaInput_1.AlertaAlunoCreateWithoutAlertaInput)
], AlertaAlunoCreateOrConnectWithoutAlertaInput.prototype, "create", void 0);
AlertaAlunoCreateOrConnectWithoutAlertaInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoCreateOrConnectWithoutAlertaInput", {
        isAbstract: true
    })
], AlertaAlunoCreateOrConnectWithoutAlertaInput);
exports.AlertaAlunoCreateOrConnectWithoutAlertaInput = AlertaAlunoCreateOrConnectWithoutAlertaInput;
