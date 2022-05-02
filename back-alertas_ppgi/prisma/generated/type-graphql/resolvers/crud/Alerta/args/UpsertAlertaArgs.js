"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertAlertaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaCreateInput_1 = require("../../../inputs/AlertaCreateInput");
const AlertaUpdateInput_1 = require("../../../inputs/AlertaUpdateInput");
const AlertaWhereUniqueInput_1 = require("../../../inputs/AlertaWhereUniqueInput");
let UpsertAlertaArgs = class UpsertAlertaArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaWhereUniqueInput_1.AlertaWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaWhereUniqueInput_1.AlertaWhereUniqueInput)
], UpsertAlertaArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaCreateInput_1.AlertaCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaCreateInput_1.AlertaCreateInput)
], UpsertAlertaArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaUpdateInput_1.AlertaUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaUpdateInput_1.AlertaUpdateInput)
], UpsertAlertaArgs.prototype, "update", void 0);
UpsertAlertaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertAlertaArgs);
exports.UpsertAlertaArgs = UpsertAlertaArgs;
