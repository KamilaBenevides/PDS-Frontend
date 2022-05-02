"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAlerta = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAvgAggregate_1 = require("../outputs/AlertaAvgAggregate");
const AlertaCountAggregate_1 = require("../outputs/AlertaCountAggregate");
const AlertaMaxAggregate_1 = require("../outputs/AlertaMaxAggregate");
const AlertaMinAggregate_1 = require("../outputs/AlertaMinAggregate");
const AlertaSumAggregate_1 = require("../outputs/AlertaSumAggregate");
let AggregateAlerta = class AggregateAlerta {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaCountAggregate_1.AlertaCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaCountAggregate_1.AlertaCountAggregate)
], AggregateAlerta.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAvgAggregate_1.AlertaAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAvgAggregate_1.AlertaAvgAggregate)
], AggregateAlerta.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaSumAggregate_1.AlertaSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaSumAggregate_1.AlertaSumAggregate)
], AggregateAlerta.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaMinAggregate_1.AlertaMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaMinAggregate_1.AlertaMinAggregate)
], AggregateAlerta.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaMaxAggregate_1.AlertaMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaMaxAggregate_1.AlertaMaxAggregate)
], AggregateAlerta.prototype, "_max", void 0);
AggregateAlerta = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateAlerta", {
        isAbstract: true
    })
], AggregateAlerta);
exports.AggregateAlerta = AggregateAlerta;
