"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAlunoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoOrderByWithRelationInput_1 = require("../../../inputs/AlunoOrderByWithRelationInput");
const AlunoWhereInput_1 = require("../../../inputs/AlunoWhereInput");
const AlunoWhereUniqueInput_1 = require("../../../inputs/AlunoWhereUniqueInput");
let AggregateAlunoArgs = class AggregateAlunoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoWhereInput_1.AlunoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoWhereInput_1.AlunoWhereInput)
], AggregateAlunoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoOrderByWithRelationInput_1.AlunoOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateAlunoArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoWhereUniqueInput_1.AlunoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoWhereUniqueInput_1.AlunoWhereUniqueInput)
], AggregateAlunoArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateAlunoArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateAlunoArgs.prototype, "skip", void 0);
AggregateAlunoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateAlunoArgs);
exports.AggregateAlunoArgs = AggregateAlunoArgs;
