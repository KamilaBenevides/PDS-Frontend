"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAvgAggregate_1 = require("../outputs/AlertaAvgAggregate");
const AlertaCountAggregate_1 = require("../outputs/AlertaCountAggregate");
const AlertaMaxAggregate_1 = require("../outputs/AlertaMaxAggregate");
const AlertaMinAggregate_1 = require("../outputs/AlertaMinAggregate");
const AlertaSumAggregate_1 = require("../outputs/AlertaSumAggregate");
let AlertaGroupBy = class AlertaGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaGroupBy.prototype, "diasIntervalo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AlertaGroupBy.prototype, "nome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaGroupBy.prototype, "corpoEmail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaCountAggregate_1.AlertaCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaCountAggregate_1.AlertaCountAggregate)
], AlertaGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAvgAggregate_1.AlertaAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAvgAggregate_1.AlertaAvgAggregate)
], AlertaGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaSumAggregate_1.AlertaSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaSumAggregate_1.AlertaSumAggregate)
], AlertaGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaMinAggregate_1.AlertaMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaMinAggregate_1.AlertaMinAggregate)
], AlertaGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaMaxAggregate_1.AlertaMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaMaxAggregate_1.AlertaMaxAggregate)
], AlertaGroupBy.prototype, "_max", void 0);
AlertaGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AlertaGroupBy", {
        isAbstract: true
    })
], AlertaGroupBy);
exports.AlertaGroupBy = AlertaGroupBy;
