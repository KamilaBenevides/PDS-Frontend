"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAlertaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaWhereInput_1 = require("../../../inputs/AlertaWhereInput");
let DeleteManyAlertaArgs = class DeleteManyAlertaArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaWhereInput_1.AlertaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaWhereInput_1.AlertaWhereInput)
], DeleteManyAlertaArgs.prototype, "where", void 0);
DeleteManyAlertaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyAlertaArgs);
exports.DeleteManyAlertaArgs = DeleteManyAlertaArgs;
