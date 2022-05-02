"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DocenteAvgAggregate = class DocenteAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DocenteAvgAggregate.prototype, "id", void 0);
DocenteAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DocenteAvgAggregate", {
        isAbstract: true
    })
], DocenteAvgAggregate);
exports.DocenteAvgAggregate = DocenteAvgAggregate;
