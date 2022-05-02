"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AlertaMaxAggregate = class AlertaMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaMaxAggregate.prototype, "diasIntervalo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaMaxAggregate.prototype, "nome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaMaxAggregate.prototype, "corpoEmail", void 0);
AlertaMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AlertaMaxAggregate", {
        isAbstract: true
    })
], AlertaMaxAggregate);
exports.AlertaMaxAggregate = AlertaMaxAggregate;
