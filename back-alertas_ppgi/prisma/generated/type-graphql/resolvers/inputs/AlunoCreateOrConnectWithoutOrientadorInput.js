"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoCreateOrConnectWithoutOrientadorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoCreateWithoutOrientadorInput_1 = require("../inputs/AlunoCreateWithoutOrientadorInput");
const AlunoWhereUniqueInput_1 = require("../inputs/AlunoWhereUniqueInput");
let AlunoCreateOrConnectWithoutOrientadorInput = class AlunoCreateOrConnectWithoutOrientadorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoWhereUniqueInput_1.AlunoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoWhereUniqueInput_1.AlunoWhereUniqueInput)
], AlunoCreateOrConnectWithoutOrientadorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoCreateWithoutOrientadorInput_1.AlunoCreateWithoutOrientadorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoCreateWithoutOrientadorInput_1.AlunoCreateWithoutOrientadorInput)
], AlunoCreateOrConnectWithoutOrientadorInput.prototype, "create", void 0);
AlunoCreateOrConnectWithoutOrientadorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoCreateOrConnectWithoutOrientadorInput", {
        isAbstract: true
    })
], AlunoCreateOrConnectWithoutOrientadorInput);
exports.AlunoCreateOrConnectWithoutOrientadorInput = AlunoCreateOrConnectWithoutOrientadorInput;
