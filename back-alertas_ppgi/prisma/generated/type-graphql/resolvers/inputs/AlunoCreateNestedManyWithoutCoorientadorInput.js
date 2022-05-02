"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoCreateNestedManyWithoutCoorientadorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoCreateManyCoorientadorInputEnvelope_1 = require("../inputs/AlunoCreateManyCoorientadorInputEnvelope");
const AlunoCreateOrConnectWithoutCoorientadorInput_1 = require("../inputs/AlunoCreateOrConnectWithoutCoorientadorInput");
const AlunoCreateWithoutCoorientadorInput_1 = require("../inputs/AlunoCreateWithoutCoorientadorInput");
const AlunoWhereUniqueInput_1 = require("../inputs/AlunoWhereUniqueInput");
let AlunoCreateNestedManyWithoutCoorientadorInput = class AlunoCreateNestedManyWithoutCoorientadorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoCreateWithoutCoorientadorInput_1.AlunoCreateWithoutCoorientadorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoCreateNestedManyWithoutCoorientadorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoCreateOrConnectWithoutCoorientadorInput_1.AlunoCreateOrConnectWithoutCoorientadorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoCreateNestedManyWithoutCoorientadorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoCreateManyCoorientadorInputEnvelope_1.AlunoCreateManyCoorientadorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoCreateManyCoorientadorInputEnvelope_1.AlunoCreateManyCoorientadorInputEnvelope)
], AlunoCreateNestedManyWithoutCoorientadorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoWhereUniqueInput_1.AlunoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoCreateNestedManyWithoutCoorientadorInput.prototype, "connect", void 0);
AlunoCreateNestedManyWithoutCoorientadorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoCreateNestedManyWithoutCoorientadorInput", {
        isAbstract: true
    })
], AlunoCreateNestedManyWithoutCoorientadorInput);
exports.AlunoCreateNestedManyWithoutCoorientadorInput = AlunoCreateNestedManyWithoutCoorientadorInput;
