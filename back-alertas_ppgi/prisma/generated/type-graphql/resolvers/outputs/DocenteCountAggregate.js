"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DocenteCountAggregate = class DocenteCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DocenteCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DocenteCountAggregate.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DocenteCountAggregate.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DocenteCountAggregate.prototype, "_all", void 0);
DocenteCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DocenteCountAggregate", {
        isAbstract: true
    })
], DocenteCountAggregate);
exports.DocenteCountAggregate = DocenteCountAggregate;
