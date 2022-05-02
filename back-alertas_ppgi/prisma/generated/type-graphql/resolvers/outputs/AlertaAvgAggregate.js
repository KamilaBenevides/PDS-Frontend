"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AlertaAvgAggregate = class AlertaAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAvgAggregate.prototype, "diasIntervalo", void 0);
AlertaAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AlertaAvgAggregate", {
        isAbstract: true
    })
], AlertaAvgAggregate);
exports.AlertaAvgAggregate = AlertaAvgAggregate;
