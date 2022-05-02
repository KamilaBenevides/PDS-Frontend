"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAlertaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaUpdateInput_1 = require("../../../inputs/AlertaUpdateInput");
const AlertaWhereUniqueInput_1 = require("../../../inputs/AlertaWhereUniqueInput");
let UpdateAlertaArgs = class UpdateAlertaArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaUpdateInput_1.AlertaUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaUpdateInput_1.AlertaUpdateInput)
], UpdateAlertaArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaWhereUniqueInput_1.AlertaWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaWhereUniqueInput_1.AlertaWhereUniqueInput)
], UpdateAlertaArgs.prototype, "where", void 0);
UpdateAlertaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateAlertaArgs);
exports.UpdateAlertaArgs = UpdateAlertaArgs;
