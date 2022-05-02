"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoAlertaAlunoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoOrderByWithRelationInput_1 = require("../../../inputs/AlertaAlunoOrderByWithRelationInput");
const AlertaAlunoWhereInput_1 = require("../../../inputs/AlertaAlunoWhereInput");
const AlertaAlunoWhereUniqueInput_1 = require("../../../inputs/AlertaAlunoWhereUniqueInput");
const AlertaAlunoScalarFieldEnum_1 = require("../../../../enums/AlertaAlunoScalarFieldEnum");
let AlunoAlertaAlunoArgs = class AlunoAlertaAlunoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoWhereInput_1.AlertaAlunoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoWhereInput_1.AlertaAlunoWhereInput)
], AlunoAlertaAlunoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoOrderByWithRelationInput_1.AlertaAlunoOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoAlertaAlunoArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput)
], AlunoAlertaAlunoArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlunoAlertaAlunoArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlunoAlertaAlunoArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoScalarFieldEnum_1.AlertaAlunoScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoAlertaAlunoArgs.prototype, "distinct", void 0);
AlunoAlertaAlunoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AlunoAlertaAlunoArgs);
exports.AlunoAlertaAlunoArgs = AlunoAlertaAlunoArgs;
