"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AlertaMinAggregate = class AlertaMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaMinAggregate.prototype, "diasIntervalo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaMinAggregate.prototype, "nome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaMinAggregate.prototype, "corpoEmail", void 0);
AlertaMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AlertaMinAggregate", {
        isAbstract: true
    })
], AlertaMinAggregate);
exports.AlertaMinAggregate = AlertaMinAggregate;
