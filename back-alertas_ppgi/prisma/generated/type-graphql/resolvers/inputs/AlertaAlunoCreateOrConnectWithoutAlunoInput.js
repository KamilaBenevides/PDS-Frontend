"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoCreateOrConnectWithoutAlunoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoCreateWithoutAlunoInput_1 = require("../inputs/AlertaAlunoCreateWithoutAlunoInput");
const AlertaAlunoWhereUniqueInput_1 = require("../inputs/AlertaAlunoWhereUniqueInput");
let AlertaAlunoCreateOrConnectWithoutAlunoInput = class AlertaAlunoCreateOrConnectWithoutAlunoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput)
], AlertaAlunoCreateOrConnectWithoutAlunoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoCreateWithoutAlunoInput_1.AlertaAlunoCreateWithoutAlunoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaAlunoCreateWithoutAlunoInput_1.AlertaAlunoCreateWithoutAlunoInput)
], AlertaAlunoCreateOrConnectWithoutAlunoInput.prototype, "create", void 0);
AlertaAlunoCreateOrConnectWithoutAlunoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoCreateOrConnectWithoutAlunoInput", {
        isAbstract: true
    })
], AlertaAlunoCreateOrConnectWithoutAlunoInput);
exports.AlertaAlunoCreateOrConnectWithoutAlunoInput = AlertaAlunoCreateOrConnectWithoutAlunoInput;
