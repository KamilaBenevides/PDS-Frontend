"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DocenteMinAggregate = class DocenteMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DocenteMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocenteMinAggregate.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocenteMinAggregate.prototype, "email", void 0);
DocenteMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DocenteMinAggregate", {
        isAbstract: true
    })
], DocenteMinAggregate);
exports.DocenteMinAggregate = DocenteMinAggregate;
