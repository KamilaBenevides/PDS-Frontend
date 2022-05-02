"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoAvgAggregate_1 = require("../outputs/AlertaAlunoAvgAggregate");
const AlertaAlunoCountAggregate_1 = require("../outputs/AlertaAlunoCountAggregate");
const AlertaAlunoMaxAggregate_1 = require("../outputs/AlertaAlunoMaxAggregate");
const AlertaAlunoMinAggregate_1 = require("../outputs/AlertaAlunoMinAggregate");
const AlertaAlunoSumAggregate_1 = require("../outputs/AlertaAlunoSumAggregate");
let AlertaAlunoGroupBy = class AlertaAlunoGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAlunoGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAlunoGroupBy.prototype, "alunoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAlunoGroupBy.prototype, "alertaId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlertaAlunoGroupBy.prototype, "enviado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlertaAlunoGroupBy.prototype, "resolvido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlertaAlunoGroupBy.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AlertaAlunoGroupBy.prototype, "dataEnvioEmail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoCountAggregate_1.AlertaAlunoCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoCountAggregate_1.AlertaAlunoCountAggregate)
], AlertaAlunoGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoAvgAggregate_1.AlertaAlunoAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoAvgAggregate_1.AlertaAlunoAvgAggregate)
], AlertaAlunoGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoSumAggregate_1.AlertaAlunoSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoSumAggregate_1.AlertaAlunoSumAggregate)
], AlertaAlunoGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoMinAggregate_1.AlertaAlunoMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoMinAggregate_1.AlertaAlunoMinAggregate)
], AlertaAlunoGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoMaxAggregate_1.AlertaAlunoMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoMaxAggregate_1.AlertaAlunoMaxAggregate)
], AlertaAlunoGroupBy.prototype, "_max", void 0);
AlertaAlunoGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AlertaAlunoGroupBy", {
        isAbstract: true
    })
], AlertaAlunoGroupBy);
exports.AlertaAlunoGroupBy = AlertaAlunoGroupBy;
