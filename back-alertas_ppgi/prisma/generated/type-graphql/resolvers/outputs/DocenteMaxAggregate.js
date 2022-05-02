"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DocenteMaxAggregate = class DocenteMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DocenteMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocenteMaxAggregate.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocenteMaxAggregate.prototype, "email", void 0);
DocenteMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DocenteMaxAggregate", {
        isAbstract: true
    })
], DocenteMaxAggregate);
exports.DocenteMaxAggregate = DocenteMaxAggregate;
