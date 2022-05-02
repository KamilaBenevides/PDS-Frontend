"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyAlertaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaOrderByWithRelationInput_1 = require("../../../inputs/AlertaOrderByWithRelationInput");
const AlertaWhereInput_1 = require("../../../inputs/AlertaWhereInput");
const AlertaWhereUniqueInput_1 = require("../../../inputs/AlertaWhereUniqueInput");
const AlertaScalarFieldEnum_1 = require("../../../../enums/AlertaScalarFieldEnum");
let FindManyAlertaArgs = class FindManyAlertaArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaWhereInput_1.AlertaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaWhereInput_1.AlertaWhereInput)
], FindManyAlertaArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaOrderByWithRelationInput_1.AlertaOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyAlertaArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaWhereUniqueInput_1.AlertaWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaWhereUniqueInput_1.AlertaWhereUniqueInput)
], FindManyAlertaArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyAlertaArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyAlertaArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaScalarFieldEnum_1.AlertaScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyAlertaArgs.prototype, "distinct", void 0);
FindManyAlertaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyAlertaArgs);
exports.FindManyAlertaArgs = FindManyAlertaArgs;
