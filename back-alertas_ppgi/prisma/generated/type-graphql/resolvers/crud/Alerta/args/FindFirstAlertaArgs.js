"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAlertaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaOrderByWithRelationInput_1 = require("../../../inputs/AlertaOrderByWithRelationInput");
const AlertaWhereInput_1 = require("../../../inputs/AlertaWhereInput");
const AlertaWhereUniqueInput_1 = require("../../../inputs/AlertaWhereUniqueInput");
const AlertaScalarFieldEnum_1 = require("../../../../enums/AlertaScalarFieldEnum");
let FindFirstAlertaArgs = class FindFirstAlertaArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaWhereInput_1.AlertaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaWhereInput_1.AlertaWhereInput)
], FindFirstAlertaArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaOrderByWithRelationInput_1.AlertaOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAlertaArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaWhereUniqueInput_1.AlertaWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaWhereUniqueInput_1.AlertaWhereUniqueInput)
], FindFirstAlertaArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAlertaArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAlertaArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaScalarFieldEnum_1.AlertaScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAlertaArgs.prototype, "distinct", void 0);
FindFirstAlertaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstAlertaArgs);
exports.FindFirstAlertaArgs = FindFirstAlertaArgs;
