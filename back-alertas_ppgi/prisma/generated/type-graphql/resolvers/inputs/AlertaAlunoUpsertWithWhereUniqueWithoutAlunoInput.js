"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoUpsertWithWhereUniqueWithoutAlunoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoCreateWithoutAlunoInput_1 = require("../inputs/AlertaAlunoCreateWithoutAlunoInput");
const AlertaAlunoUpdateWithoutAlunoInput_1 = require("../inputs/AlertaAlunoUpdateWithoutAlunoInput");
const AlertaAlunoWhereUniqueInput_1 = require("../inputs/AlertaAlunoWhereUniqueInput");
let AlertaAlunoUpsertWithWhereUniqueWithoutAlunoInput = class AlertaAlunoUpsertWithWhereUniqueWithoutAlunoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput)
], AlertaAlunoUpsertWithWhereUniqueWithoutAlunoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoUpdateWithoutAlunoInput_1.AlertaAlunoUpdateWithoutAlunoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaAlunoUpdateWithoutAlunoInput_1.AlertaAlunoUpdateWithoutAlunoInput)
], AlertaAlunoUpsertWithWhereUniqueWithoutAlunoInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoCreateWithoutAlunoInput_1.AlertaAlunoCreateWithoutAlunoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaAlunoCreateWithoutAlunoInput_1.AlertaAlunoCreateWithoutAlunoInput)
], AlertaAlunoUpsertWithWhereUniqueWithoutAlunoInput.prototype, "create", void 0);
AlertaAlunoUpsertWithWhereUniqueWithoutAlunoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoUpsertWithWhereUniqueWithoutAlunoInput", {
        isAbstract: true
    })
], AlertaAlunoUpsertWithWhereUniqueWithoutAlunoInput);
exports.AlertaAlunoUpsertWithWhereUniqueWithoutAlunoInput = AlertaAlunoUpsertWithWhereUniqueWithoutAlunoInput;
