"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAlertaAlunoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoOrderByWithRelationInput_1 = require("../../../inputs/AlertaAlunoOrderByWithRelationInput");
const AlertaAlunoWhereInput_1 = require("../../../inputs/AlertaAlunoWhereInput");
const AlertaAlunoWhereUniqueInput_1 = require("../../../inputs/AlertaAlunoWhereUniqueInput");
const AlertaAlunoScalarFieldEnum_1 = require("../../../../enums/AlertaAlunoScalarFieldEnum");
let FindFirstAlertaAlunoArgs = class FindFirstAlertaAlunoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoWhereInput_1.AlertaAlunoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoWhereInput_1.AlertaAlunoWhereInput)
], FindFirstAlertaAlunoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoOrderByWithRelationInput_1.AlertaAlunoOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAlertaAlunoArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput)
], FindFirstAlertaAlunoArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAlertaAlunoArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAlertaAlunoArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoScalarFieldEnum_1.AlertaAlunoScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAlertaAlunoArgs.prototype, "distinct", void 0);
FindFirstAlertaAlunoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstAlertaAlunoArgs);
exports.FindFirstAlertaAlunoArgs = FindFirstAlertaAlunoArgs;
