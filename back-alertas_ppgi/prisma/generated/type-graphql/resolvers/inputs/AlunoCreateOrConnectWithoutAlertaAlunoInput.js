"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoCreateOrConnectWithoutAlertaAlunoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoCreateWithoutAlertaAlunoInput_1 = require("../inputs/AlunoCreateWithoutAlertaAlunoInput");
const AlunoWhereUniqueInput_1 = require("../inputs/AlunoWhereUniqueInput");
let AlunoCreateOrConnectWithoutAlertaAlunoInput = class AlunoCreateOrConnectWithoutAlertaAlunoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoWhereUniqueInput_1.AlunoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoWhereUniqueInput_1.AlunoWhereUniqueInput)
], AlunoCreateOrConnectWithoutAlertaAlunoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoCreateWithoutAlertaAlunoInput_1.AlunoCreateWithoutAlertaAlunoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoCreateWithoutAlertaAlunoInput_1.AlunoCreateWithoutAlertaAlunoInput)
], AlunoCreateOrConnectWithoutAlertaAlunoInput.prototype, "create", void 0);
AlunoCreateOrConnectWithoutAlertaAlunoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoCreateOrConnectWithoutAlertaAlunoInput", {
        isAbstract: true
    })
], AlunoCreateOrConnectWithoutAlertaAlunoInput);
exports.AlunoCreateOrConnectWithoutAlertaAlunoInput = AlunoCreateOrConnectWithoutAlertaAlunoInput;
