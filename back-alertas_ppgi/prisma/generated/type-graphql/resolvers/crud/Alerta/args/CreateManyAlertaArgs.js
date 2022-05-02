"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAlertaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaCreateManyInput_1 = require("../../../inputs/AlertaCreateManyInput");
let CreateManyAlertaArgs = class CreateManyAlertaArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaCreateManyInput_1.AlertaCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAlertaArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyAlertaArgs.prototype, "skipDuplicates", void 0);
CreateManyAlertaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAlertaArgs);
exports.CreateManyAlertaArgs = CreateManyAlertaArgs;
