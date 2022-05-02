"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AlertaAlunoWhereUniqueInput = class AlertaAlunoWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAlunoWhereUniqueInput.prototype, "id", void 0);
AlertaAlunoWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoWhereUniqueInput", {
        isAbstract: true
    })
], AlertaAlunoWhereUniqueInput);
exports.AlertaAlunoWhereUniqueInput = AlertaAlunoWhereUniqueInput;
