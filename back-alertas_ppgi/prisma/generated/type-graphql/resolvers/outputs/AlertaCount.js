"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AlertaCount = class AlertaCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaCount.prototype, "AlertaAluno", void 0);
AlertaCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AlertaCount", {
        isAbstract: true
    })
], AlertaCount);
exports.AlertaCount = AlertaCount;
