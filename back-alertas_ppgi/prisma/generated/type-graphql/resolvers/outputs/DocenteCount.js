"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DocenteCount = class DocenteCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DocenteCount.prototype, "AlunoOrientado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DocenteCount.prototype, "AlunoCoorientado", void 0);
DocenteCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DocenteCount", {
        isAbstract: true
    })
], DocenteCount);
exports.DocenteCount = DocenteCount;
