"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoCreateOrConnectWithoutCoorientadorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoCreateWithoutCoorientadorInput_1 = require("../inputs/AlunoCreateWithoutCoorientadorInput");
const AlunoWhereUniqueInput_1 = require("../inputs/AlunoWhereUniqueInput");
let AlunoCreateOrConnectWithoutCoorientadorInput = class AlunoCreateOrConnectWithoutCoorientadorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoWhereUniqueInput_1.AlunoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoWhereUniqueInput_1.AlunoWhereUniqueInput)
], AlunoCreateOrConnectWithoutCoorientadorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoCreateWithoutCoorientadorInput_1.AlunoCreateWithoutCoorientadorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoCreateWithoutCoorientadorInput_1.AlunoCreateWithoutCoorientadorInput)
], AlunoCreateOrConnectWithoutCoorientadorInput.prototype, "create", void 0);
AlunoCreateOrConnectWithoutCoorientadorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoCreateOrConnectWithoutCoorientadorInput", {
        isAbstract: true
    })
], AlunoCreateOrConnectWithoutCoorientadorInput);
exports.AlunoCreateOrConnectWithoutCoorientadorInput = AlunoCreateOrConnectWithoutCoorientadorInput;
