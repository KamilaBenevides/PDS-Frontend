"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AlertaSumAggregate = class AlertaSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaSumAggregate.prototype, "diasIntervalo", void 0);
AlertaSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AlertaSumAggregate", {
        isAbstract: true
    })
], AlertaSumAggregate);
exports.AlertaSumAggregate = AlertaSumAggregate;
