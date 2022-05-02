"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AlunoAvgAggregate = class AlunoAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlunoAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlunoAvgAggregate.prototype, "orientadorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlunoAvgAggregate.prototype, "coorientadorId", void 0);
AlunoAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AlunoAvgAggregate", {
        isAbstract: true
    })
], AlunoAvgAggregate);
exports.AlunoAvgAggregate = AlunoAvgAggregate;
