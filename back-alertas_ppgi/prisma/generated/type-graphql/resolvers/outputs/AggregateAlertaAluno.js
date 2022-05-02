"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAlertaAluno = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoAvgAggregate_1 = require("../outputs/AlertaAlunoAvgAggregate");
const AlertaAlunoCountAggregate_1 = require("../outputs/AlertaAlunoCountAggregate");
const AlertaAlunoMaxAggregate_1 = require("../outputs/AlertaAlunoMaxAggregate");
const AlertaAlunoMinAggregate_1 = require("../outputs/AlertaAlunoMinAggregate");
const AlertaAlunoSumAggregate_1 = require("../outputs/AlertaAlunoSumAggregate");
let AggregateAlertaAluno = class AggregateAlertaAluno {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoCountAggregate_1.AlertaAlunoCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoCountAggregate_1.AlertaAlunoCountAggregate)
], AggregateAlertaAluno.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoAvgAggregate_1.AlertaAlunoAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoAvgAggregate_1.AlertaAlunoAvgAggregate)
], AggregateAlertaAluno.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoSumAggregate_1.AlertaAlunoSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoSumAggregate_1.AlertaAlunoSumAggregate)
], AggregateAlertaAluno.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoMinAggregate_1.AlertaAlunoMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoMinAggregate_1.AlertaAlunoMinAggregate)
], AggregateAlertaAluno.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoMaxAggregate_1.AlertaAlunoMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoMaxAggregate_1.AlertaAlunoMaxAggregate)
], AggregateAlertaAluno.prototype, "_max", void 0);
AggregateAlertaAluno = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateAlertaAluno", {
        isAbstract: true
    })
], AggregateAlertaAluno);
exports.AggregateAlertaAluno = AggregateAlertaAluno;
