"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoCreateNestedManyWithoutOrientadorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoCreateManyOrientadorInputEnvelope_1 = require("../inputs/AlunoCreateManyOrientadorInputEnvelope");
const AlunoCreateOrConnectWithoutOrientadorInput_1 = require("../inputs/AlunoCreateOrConnectWithoutOrientadorInput");
const AlunoCreateWithoutOrientadorInput_1 = require("../inputs/AlunoCreateWithoutOrientadorInput");
const AlunoWhereUniqueInput_1 = require("../inputs/AlunoWhereUniqueInput");
let AlunoCreateNestedManyWithoutOrientadorInput = class AlunoCreateNestedManyWithoutOrientadorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoCreateWithoutOrientadorInput_1.AlunoCreateWithoutOrientadorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoCreateNestedManyWithoutOrientadorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoCreateOrConnectWithoutOrientadorInput_1.AlunoCreateOrConnectWithoutOrientadorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoCreateNestedManyWithoutOrientadorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoCreateManyOrientadorInputEnvelope_1.AlunoCreateManyOrientadorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoCreateManyOrientadorInputEnvelope_1.AlunoCreateManyOrientadorInputEnvelope)
], AlunoCreateNestedManyWithoutOrientadorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoWhereUniqueInput_1.AlunoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoCreateNestedManyWithoutOrientadorInput.prototype, "connect", void 0);
AlunoCreateNestedManyWithoutOrientadorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoCreateNestedManyWithoutOrientadorInput", {
        isAbstract: true
    })
], AlunoCreateNestedManyWithoutOrientadorInput);
exports.AlunoCreateNestedManyWithoutOrientadorInput = AlunoCreateNestedManyWithoutOrientadorInput;
