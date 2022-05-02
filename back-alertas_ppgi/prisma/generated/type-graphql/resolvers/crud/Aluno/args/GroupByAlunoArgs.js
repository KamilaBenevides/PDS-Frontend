"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAlunoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoOrderByWithAggregationInput_1 = require("../../../inputs/AlunoOrderByWithAggregationInput");
const AlunoScalarWhereWithAggregatesInput_1 = require("../../../inputs/AlunoScalarWhereWithAggregatesInput");
const AlunoWhereInput_1 = require("../../../inputs/AlunoWhereInput");
const AlunoScalarFieldEnum_1 = require("../../../../enums/AlunoScalarFieldEnum");
let GroupByAlunoArgs = class GroupByAlunoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoWhereInput_1.AlunoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoWhereInput_1.AlunoWhereInput)
], GroupByAlunoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoOrderByWithAggregationInput_1.AlunoOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAlunoArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoScalarFieldEnum_1.AlunoScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAlunoArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoScalarWhereWithAggregatesInput_1.AlunoScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoScalarWhereWithAggregatesInput_1.AlunoScalarWhereWithAggregatesInput)
], GroupByAlunoArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAlunoArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAlunoArgs.prototype, "skip", void 0);
GroupByAlunoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByAlunoArgs);
exports.GroupByAlunoArgs = GroupByAlunoArgs;
