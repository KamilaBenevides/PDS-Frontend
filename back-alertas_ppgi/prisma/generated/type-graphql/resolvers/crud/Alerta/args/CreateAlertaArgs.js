"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAlertaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaCreateInput_1 = require("../../../inputs/AlertaCreateInput");
let CreateAlertaArgs = class CreateAlertaArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaCreateInput_1.AlertaCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaCreateInput_1.AlertaCreateInput)
], CreateAlertaArgs.prototype, "data", void 0);
CreateAlertaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateAlertaArgs);
exports.CreateAlertaArgs = CreateAlertaArgs;
