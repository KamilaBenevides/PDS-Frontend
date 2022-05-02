"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoUpdateWithWhereUniqueWithoutOrientadorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoUpdateWithoutOrientadorInput_1 = require("../inputs/AlunoUpdateWithoutOrientadorInput");
const AlunoWhereUniqueInput_1 = require("../inputs/AlunoWhereUniqueInput");
let AlunoUpdateWithWhereUniqueWithoutOrientadorInput = class AlunoUpdateWithWhereUniqueWithoutOrientadorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoWhereUniqueInput_1.AlunoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoWhereUniqueInput_1.AlunoWhereUniqueInput)
], AlunoUpdateWithWhereUniqueWithoutOrientadorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoUpdateWithoutOrientadorInput_1.AlunoUpdateWithoutOrientadorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoUpdateWithoutOrientadorInput_1.AlunoUpdateWithoutOrientadorInput)
], AlunoUpdateWithWhereUniqueWithoutOrientadorInput.prototype, "data", void 0);
AlunoUpdateWithWhereUniqueWithoutOrientadorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoUpdateWithWhereUniqueWithoutOrientadorInput", {
        isAbstract: true
    })
], AlunoUpdateWithWhereUniqueWithoutOrientadorInput);
exports.AlunoUpdateWithWhereUniqueWithoutOrientadorInput = AlunoUpdateWithWhereUniqueWithoutOrientadorInput;
