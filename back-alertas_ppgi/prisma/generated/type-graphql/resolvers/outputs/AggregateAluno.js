"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAluno = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoAvgAggregate_1 = require("../outputs/AlunoAvgAggregate");
const AlunoCountAggregate_1 = require("../outputs/AlunoCountAggregate");
const AlunoMaxAggregate_1 = require("../outputs/AlunoMaxAggregate");
const AlunoMinAggregate_1 = require("../outputs/AlunoMinAggregate");
const AlunoSumAggregate_1 = require("../outputs/AlunoSumAggregate");
let AggregateAluno = class AggregateAluno {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoCountAggregate_1.AlunoCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoCountAggregate_1.AlunoCountAggregate)
], AggregateAluno.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoAvgAggregate_1.AlunoAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoAvgAggregate_1.AlunoAvgAggregate)
], AggregateAluno.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoSumAggregate_1.AlunoSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoSumAggregate_1.AlunoSumAggregate)
], AggregateAluno.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoMinAggregate_1.AlunoMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoMinAggregate_1.AlunoMinAggregate)
], AggregateAluno.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoMaxAggregate_1.AlunoMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoMaxAggregate_1.AlunoMaxAggregate)
], AggregateAluno.prototype, "_max", void 0);
AggregateAluno = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateAluno", {
        isAbstract: true
    })
], AggregateAluno);
exports.AggregateAluno = AggregateAluno;
