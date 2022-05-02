"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AlunoWhereUniqueInput = class AlunoWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlunoWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoWhereUniqueInput.prototype, "matricula", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoWhereUniqueInput.prototype, "emailInstitucional", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoWhereUniqueInput.prototype, "emailPessoal", void 0);
AlunoWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoWhereUniqueInput", {
        isAbstract: true
    })
], AlunoWhereUniqueInput);
exports.AlunoWhereUniqueInput = AlunoWhereUniqueInput;
