"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAlertaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaOrderByWithRelationInput_1 = require("../../../inputs/AlertaOrderByWithRelationInput");
const AlertaWhereInput_1 = require("../../../inputs/AlertaWhereInput");
const AlertaWhereUniqueInput_1 = require("../../../inputs/AlertaWhereUniqueInput");
let AggregateAlertaArgs = class AggregateAlertaArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaWhereInput_1.AlertaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaWhereInput_1.AlertaWhereInput)
], AggregateAlertaArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaOrderByWithRelationInput_1.AlertaOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateAlertaArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaWhereUniqueInput_1.AlertaWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaWhereUniqueInput_1.AlertaWhereUniqueInput)
], AggregateAlertaArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateAlertaArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateAlertaArgs.prototype, "skip", void 0);
AggregateAlertaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateAlertaArgs);
exports.AggregateAlertaArgs = AggregateAlertaArgs;
