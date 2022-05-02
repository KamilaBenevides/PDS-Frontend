"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoUpsertWithWhereUniqueWithoutCoorientadorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoCreateWithoutCoorientadorInput_1 = require("../inputs/AlunoCreateWithoutCoorientadorInput");
const AlunoUpdateWithoutCoorientadorInput_1 = require("../inputs/AlunoUpdateWithoutCoorientadorInput");
const AlunoWhereUniqueInput_1 = require("../inputs/AlunoWhereUniqueInput");
let AlunoUpsertWithWhereUniqueWithoutCoorientadorInput = class AlunoUpsertWithWhereUniqueWithoutCoorientadorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoWhereUniqueInput_1.AlunoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoWhereUniqueInput_1.AlunoWhereUniqueInput)
], AlunoUpsertWithWhereUniqueWithoutCoorientadorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoUpdateWithoutCoorientadorInput_1.AlunoUpdateWithoutCoorientadorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoUpdateWithoutCoorientadorInput_1.AlunoUpdateWithoutCoorientadorInput)
], AlunoUpsertWithWhereUniqueWithoutCoorientadorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoCreateWithoutCoorientadorInput_1.AlunoCreateWithoutCoorientadorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoCreateWithoutCoorientadorInput_1.AlunoCreateWithoutCoorientadorInput)
], AlunoUpsertWithWhereUniqueWithoutCoorientadorInput.prototype, "create", void 0);
AlunoUpsertWithWhereUniqueWithoutCoorientadorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoUpsertWithWhereUniqueWithoutCoorientadorInput", {
        isAbstract: true
    })
], AlunoUpsertWithWhereUniqueWithoutCoorientadorInput);
exports.AlunoUpsertWithWhereUniqueWithoutCoorientadorInput = AlunoUpsertWithWhereUniqueWithoutCoorientadorInput;
