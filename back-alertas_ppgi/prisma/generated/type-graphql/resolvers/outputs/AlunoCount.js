"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AlunoCount = class AlunoCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AlunoCount.prototype, "AlertaAluno", void 0);
AlunoCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AlunoCount", {
        isAbstract: true
    })
], AlunoCount);
exports.AlunoCount = AlunoCount;
