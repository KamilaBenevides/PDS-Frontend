"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoUpsertWithWhereUniqueWithoutOrientadorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoCreateWithoutOrientadorInput_1 = require("../inputs/AlunoCreateWithoutOrientadorInput");
const AlunoUpdateWithoutOrientadorInput_1 = require("../inputs/AlunoUpdateWithoutOrientadorInput");
const AlunoWhereUniqueInput_1 = require("../inputs/AlunoWhereUniqueInput");
let AlunoUpsertWithWhereUniqueWithoutOrientadorInput = class AlunoUpsertWithWhereUniqueWithoutOrientadorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoWhereUniqueInput_1.AlunoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoWhereUniqueInput_1.AlunoWhereUniqueInput)
], AlunoUpsertWithWhereUniqueWithoutOrientadorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoUpdateWithoutOrientadorInput_1.AlunoUpdateWithoutOrientadorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoUpdateWithoutOrientadorInput_1.AlunoUpdateWithoutOrientadorInput)
], AlunoUpsertWithWhereUniqueWithoutOrientadorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoCreateWithoutOrientadorInput_1.AlunoCreateWithoutOrientadorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoCreateWithoutOrientadorInput_1.AlunoCreateWithoutOrientadorInput)
], AlunoUpsertWithWhereUniqueWithoutOrientadorInput.prototype, "create", void 0);
AlunoUpsertWithWhereUniqueWithoutOrientadorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoUpsertWithWhereUniqueWithoutOrientadorInput", {
        isAbstract: true
    })
], AlunoUpsertWithWhereUniqueWithoutOrientadorInput);
exports.AlunoUpsertWithWhereUniqueWithoutOrientadorInput = AlunoUpsertWithWhereUniqueWithoutOrientadorInput;
