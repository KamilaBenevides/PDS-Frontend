"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertDocenteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocenteCreateInput_1 = require("../../../inputs/DocenteCreateInput");
const DocenteUpdateInput_1 = require("../../../inputs/DocenteUpdateInput");
const DocenteWhereUniqueInput_1 = require("../../../inputs/DocenteWhereUniqueInput");
let UpsertDocenteArgs = class UpsertDocenteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteWhereUniqueInput_1.DocenteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocenteWhereUniqueInput_1.DocenteWhereUniqueInput)
], UpsertDocenteArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteCreateInput_1.DocenteCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocenteCreateInput_1.DocenteCreateInput)
], UpsertDocenteArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteUpdateInput_1.DocenteUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocenteUpdateInput_1.DocenteUpdateInput)
], UpsertDocenteArgs.prototype, "update", void 0);
UpsertDocenteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertDocenteArgs);
exports.UpsertDocenteArgs = UpsertDocenteArgs;
