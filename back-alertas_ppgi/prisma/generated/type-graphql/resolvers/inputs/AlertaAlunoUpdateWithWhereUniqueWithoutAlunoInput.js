"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoUpdateWithWhereUniqueWithoutAlunoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoUpdateWithoutAlunoInput_1 = require("../inputs/AlertaAlunoUpdateWithoutAlunoInput");
const AlertaAlunoWhereUniqueInput_1 = require("../inputs/AlertaAlunoWhereUniqueInput");
let AlertaAlunoUpdateWithWhereUniqueWithoutAlunoInput = class AlertaAlunoUpdateWithWhereUniqueWithoutAlunoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput)
], AlertaAlunoUpdateWithWhereUniqueWithoutAlunoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoUpdateWithoutAlunoInput_1.AlertaAlunoUpdateWithoutAlunoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaAlunoUpdateWithoutAlunoInput_1.AlertaAlunoUpdateWithoutAlunoInput)
], AlertaAlunoUpdateWithWhereUniqueWithoutAlunoInput.prototype, "data", void 0);
AlertaAlunoUpdateWithWhereUniqueWithoutAlunoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoUpdateWithWhereUniqueWithoutAlunoInput", {
        isAbstract: true
    })
], AlertaAlunoUpdateWithWhereUniqueWithoutAlunoInput);
exports.AlertaAlunoUpdateWithWhereUniqueWithoutAlunoInput = AlertaAlunoUpdateWithWhereUniqueWithoutAlunoInput;
