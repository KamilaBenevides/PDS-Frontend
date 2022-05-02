"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstDocenteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocenteOrderByWithRelationInput_1 = require("../../../inputs/DocenteOrderByWithRelationInput");
const DocenteWhereInput_1 = require("../../../inputs/DocenteWhereInput");
const DocenteWhereUniqueInput_1 = require("../../../inputs/DocenteWhereUniqueInput");
const DocenteScalarFieldEnum_1 = require("../../../../enums/DocenteScalarFieldEnum");
let FindFirstDocenteArgs = class FindFirstDocenteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteWhereInput_1.DocenteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteWhereInput_1.DocenteWhereInput)
], FindFirstDocenteArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocenteOrderByWithRelationInput_1.DocenteOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstDocenteArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteWhereUniqueInput_1.DocenteWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteWhereUniqueInput_1.DocenteWhereUniqueInput)
], FindFirstDocenteArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstDocenteArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstDocenteArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocenteScalarFieldEnum_1.DocenteScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstDocenteArgs.prototype, "distinct", void 0);
FindFirstDocenteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstDocenteArgs);
exports.FindFirstDocenteArgs = FindFirstDocenteArgs;
