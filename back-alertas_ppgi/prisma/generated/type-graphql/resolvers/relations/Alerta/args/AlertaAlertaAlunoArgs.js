"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlertaAlunoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoOrderByWithRelationInput_1 = require("../../../inputs/AlertaAlunoOrderByWithRelationInput");
const AlertaAlunoWhereInput_1 = require("../../../inputs/AlertaAlunoWhereInput");
const AlertaAlunoWhereUniqueInput_1 = require("../../../inputs/AlertaAlunoWhereUniqueInput");
const AlertaAlunoScalarFieldEnum_1 = require("../../../../enums/AlertaAlunoScalarFieldEnum");
let AlertaAlertaAlunoArgs = class AlertaAlertaAlunoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoWhereInput_1.AlertaAlunoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoWhereInput_1.AlertaAlunoWhereInput)
], AlertaAlertaAlunoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoOrderByWithRelationInput_1.AlertaAlunoOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlertaAlunoArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput)
], AlertaAlertaAlunoArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAlertaAlunoArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAlertaAlunoArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoScalarFieldEnum_1.AlertaAlunoScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlertaAlunoArgs.prototype, "distinct", void 0);
AlertaAlertaAlunoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AlertaAlertaAlunoArgs);
exports.AlertaAlertaAlunoArgs = AlertaAlertaAlunoArgs;
