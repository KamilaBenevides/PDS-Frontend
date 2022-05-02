"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAlertaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaWhereUniqueInput_1 = require("../../../inputs/AlertaWhereUniqueInput");
let DeleteAlertaArgs = class DeleteAlertaArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaWhereUniqueInput_1.AlertaWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaWhereUniqueInput_1.AlertaWhereUniqueInput)
], DeleteAlertaArgs.prototype, "where", void 0);
DeleteAlertaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteAlertaArgs);
exports.DeleteAlertaArgs = DeleteAlertaArgs;
