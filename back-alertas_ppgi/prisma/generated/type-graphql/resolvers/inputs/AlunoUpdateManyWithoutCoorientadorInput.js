"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoUpdateManyWithoutCoorientadorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoCreateManyCoorientadorInputEnvelope_1 = require("../inputs/AlunoCreateManyCoorientadorInputEnvelope");
const AlunoCreateOrConnectWithoutCoorientadorInput_1 = require("../inputs/AlunoCreateOrConnectWithoutCoorientadorInput");
const AlunoCreateWithoutCoorientadorInput_1 = require("../inputs/AlunoCreateWithoutCoorientadorInput");
const AlunoScalarWhereInput_1 = require("../inputs/AlunoScalarWhereInput");
const AlunoUpdateManyWithWhereWithoutCoorientadorInput_1 = require("../inputs/AlunoUpdateManyWithWhereWithoutCoorientadorInput");
const AlunoUpdateWithWhereUniqueWithoutCoorientadorInput_1 = require("../inputs/AlunoUpdateWithWhereUniqueWithoutCoorientadorInput");
const AlunoUpsertWithWhereUniqueWithoutCoorientadorInput_1 = require("../inputs/AlunoUpsertWithWhereUniqueWithoutCoorientadorInput");
const AlunoWhereUniqueInput_1 = require("../inputs/AlunoWhereUniqueInput");
let AlunoUpdateManyWithoutCoorientadorInput = class AlunoUpdateManyWithoutCoorientadorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoCreateWithoutCoorientadorInput_1.AlunoCreateWithoutCoorientadorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoUpdateManyWithoutCoorientadorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoCreateOrConnectWithoutCoorientadorInput_1.AlunoCreateOrConnectWithoutCoorientadorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoUpdateManyWithoutCoorientadorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoUpsertWithWhereUniqueWithoutCoorientadorInput_1.AlunoUpsertWithWhereUniqueWithoutCoorientadorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoUpdateManyWithoutCoorientadorInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoCreateManyCoorientadorInputEnvelope_1.AlunoCreateManyCoorientadorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoCreateManyCoorientadorInputEnvelope_1.AlunoCreateManyCoorientadorInputEnvelope)
], AlunoUpdateManyWithoutCoorientadorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoWhereUniqueInput_1.AlunoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoUpdateManyWithoutCoorientadorInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoWhereUniqueInput_1.AlunoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoUpdateManyWithoutCoorientadorInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoWhereUniqueInput_1.AlunoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoUpdateManyWithoutCoorientadorInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoWhereUniqueInput_1.AlunoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoUpdateManyWithoutCoorientadorInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoUpdateWithWhereUniqueWithoutCoorientadorInput_1.AlunoUpdateWithWhereUniqueWithoutCoorientadorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoUpdateManyWithoutCoorientadorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoUpdateManyWithWhereWithoutCoorientadorInput_1.AlunoUpdateManyWithWhereWithoutCoorientadorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoUpdateManyWithoutCoorientadorInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoScalarWhereInput_1.AlunoScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoUpdateManyWithoutCoorientadorInput.prototype, "deleteMany", void 0);
AlunoUpdateManyWithoutCoorientadorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoUpdateManyWithoutCoorientadorInput", {
        isAbstract: true
    })
], AlunoUpdateManyWithoutCoorientadorInput);
exports.AlunoUpdateManyWithoutCoorientadorInput = AlunoUpdateManyWithoutCoorientadorInput;
