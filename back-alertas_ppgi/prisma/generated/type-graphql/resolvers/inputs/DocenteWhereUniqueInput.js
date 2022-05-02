"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DocenteWhereUniqueInput = class DocenteWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DocenteWhereUniqueInput.prototype, "id", void 0);
DocenteWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocenteWhereUniqueInput", {
        isAbstract: true
    })
], DocenteWhereUniqueInput);
exports.DocenteWhereUniqueInput = DocenteWhereUniqueInput;
