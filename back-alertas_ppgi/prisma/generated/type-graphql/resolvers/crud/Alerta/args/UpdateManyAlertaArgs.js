"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAlertaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaUpdateManyMutationInput_1 = require("../../../inputs/AlertaUpdateManyMutationInput");
const AlertaWhereInput_1 = require("../../../inputs/AlertaWhereInput");
let UpdateManyAlertaArgs = class UpdateManyAlertaArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaUpdateManyMutationInput_1.AlertaUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaUpdateManyMutationInput_1.AlertaUpdateManyMutationInput)
], UpdateManyAlertaArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaWhereInput_1.AlertaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaWhereInput_1.AlertaWhereInput)
], UpdateManyAlertaArgs.prototype, "where", void 0);
UpdateManyAlertaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyAlertaArgs);
exports.UpdateManyAlertaArgs = UpdateManyAlertaArgs;
