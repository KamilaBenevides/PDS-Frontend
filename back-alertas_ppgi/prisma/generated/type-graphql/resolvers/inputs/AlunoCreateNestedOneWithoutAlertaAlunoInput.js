"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoCreateNestedOneWithoutAlertaAlunoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoCreateOrConnectWithoutAlertaAlunoInput_1 = require("../inputs/AlunoCreateOrConnectWithoutAlertaAlunoInput");
const AlunoCreateWithoutAlertaAlunoInput_1 = require("../inputs/AlunoCreateWithoutAlertaAlunoInput");
const AlunoWhereUniqueInput_1 = require("../inputs/AlunoWhereUniqueInput");
let AlunoCreateNestedOneWithoutAlertaAlunoInput = class AlunoCreateNestedOneWithoutAlertaAlunoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoCreateWithoutAlertaAlunoInput_1.AlunoCreateWithoutAlertaAlunoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoCreateWithoutAlertaAlunoInput_1.AlunoCreateWithoutAlertaAlunoInput)
], AlunoCreateNestedOneWithoutAlertaAlunoInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoCreateOrConnectWithoutAlertaAlunoInput_1.AlunoCreateOrConnectWithoutAlertaAlunoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoCreateOrConnectWithoutAlertaAlunoInput_1.AlunoCreateOrConnectWithoutAlertaAlunoInput)
], AlunoCreateNestedOneWithoutAlertaAlunoInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoWhereUniqueInput_1.AlunoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoWhereUniqueInput_1.AlunoWhereUniqueInput)
], AlunoCreateNestedOneWithoutAlertaAlunoInput.prototype, "connect", void 0);
AlunoCreateNestedOneWithoutAlertaAlunoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoCreateNestedOneWithoutAlertaAlunoInput", {
        isAbstract: true
    })
], AlunoCreateNestedOneWithoutAlertaAlunoInput);
exports.AlunoCreateNestedOneWithoutAlertaAlunoInput = AlunoCreateNestedOneWithoutAlertaAlunoInput;
