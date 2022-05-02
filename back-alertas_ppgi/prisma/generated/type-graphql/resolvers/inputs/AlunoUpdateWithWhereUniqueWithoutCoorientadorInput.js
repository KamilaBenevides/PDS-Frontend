"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoUpdateWithWhereUniqueWithoutCoorientadorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoUpdateWithoutCoorientadorInput_1 = require("../inputs/AlunoUpdateWithoutCoorientadorInput");
const AlunoWhereUniqueInput_1 = require("../inputs/AlunoWhereUniqueInput");
let AlunoUpdateWithWhereUniqueWithoutCoorientadorInput = class AlunoUpdateWithWhereUniqueWithoutCoorientadorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoWhereUniqueInput_1.AlunoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoWhereUniqueInput_1.AlunoWhereUniqueInput)
], AlunoUpdateWithWhereUniqueWithoutCoorientadorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoUpdateWithoutCoorientadorInput_1.AlunoUpdateWithoutCoorientadorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoUpdateWithoutCoorientadorInput_1.AlunoUpdateWithoutCoorientadorInput)
], AlunoUpdateWithWhereUniqueWithoutCoorientadorInput.prototype, "data", void 0);
AlunoUpdateWithWhereUniqueWithoutCoorientadorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoUpdateWithWhereUniqueWithoutCoorientadorInput", {
        isAbstract: true
    })
], AlunoUpdateWithWhereUniqueWithoutCoorientadorInput);
exports.AlunoUpdateWithWhereUniqueWithoutCoorientadorInput = AlunoUpdateWithWhereUniqueWithoutCoorientadorInput;
