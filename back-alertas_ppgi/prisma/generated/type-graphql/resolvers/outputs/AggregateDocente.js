"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDocente = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocenteAvgAggregate_1 = require("../outputs/DocenteAvgAggregate");
const DocenteCountAggregate_1 = require("../outputs/DocenteCountAggregate");
const DocenteMaxAggregate_1 = require("../outputs/DocenteMaxAggregate");
const DocenteMinAggregate_1 = require("../outputs/DocenteMinAggregate");
const DocenteSumAggregate_1 = require("../outputs/DocenteSumAggregate");
let AggregateDocente = class AggregateDocente {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteCountAggregate_1.DocenteCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteCountAggregate_1.DocenteCountAggregate)
], AggregateDocente.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteAvgAggregate_1.DocenteAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteAvgAggregate_1.DocenteAvgAggregate)
], AggregateDocente.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteSumAggregate_1.DocenteSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteSumAggregate_1.DocenteSumAggregate)
], AggregateDocente.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteMinAggregate_1.DocenteMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteMinAggregate_1.DocenteMinAggregate)
], AggregateDocente.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteMaxAggregate_1.DocenteMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteMaxAggregate_1.DocenteMaxAggregate)
], AggregateDocente.prototype, "_max", void 0);
AggregateDocente = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateDocente", {
        isAbstract: true
    })
], AggregateDocente);
exports.AggregateDocente = AggregateDocente;
