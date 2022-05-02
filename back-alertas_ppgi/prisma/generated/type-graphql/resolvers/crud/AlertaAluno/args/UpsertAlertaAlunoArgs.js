"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertAlertaAlunoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoCreateInput_1 = require("../../../inputs/AlertaAlunoCreateInput");
const AlertaAlunoUpdateInput_1 = require("../../../inputs/AlertaAlunoUpdateInput");
const AlertaAlunoWhereUniqueInput_1 = require("../../../inputs/AlertaAlunoWhereUniqueInput");
let UpsertAlertaAlunoArgs = class UpsertAlertaAlunoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput)
], UpsertAlertaAlunoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoCreateInput_1.AlertaAlunoCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaAlunoCreateInput_1.AlertaAlunoCreateInput)
], UpsertAlertaAlunoArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoUpdateInput_1.AlertaAlunoUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaAlunoUpdateInput_1.AlertaAlunoUpdateInput)
], UpsertAlertaAlunoArgs.prototype, "update", void 0);
UpsertAlertaAlunoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertAlertaAlunoArgs);
exports.UpsertAlertaAlunoArgs = UpsertAlertaAlunoArgs;
