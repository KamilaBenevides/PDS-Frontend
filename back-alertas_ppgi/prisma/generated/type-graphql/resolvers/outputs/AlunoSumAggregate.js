"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AlunoSumAggregate = class AlunoSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlunoSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlunoSumAggregate.prototype, "orientadorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlunoSumAggregate.prototype, "coorientadorId", void 0);
AlunoSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AlunoSumAggregate", {
        isAbstract: true
    })
], AlunoSumAggregate);
exports.AlunoSumAggregate = AlunoSumAggregate;
