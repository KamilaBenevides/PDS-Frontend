"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DocenteCreateManyInput = class DocenteCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DocenteCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DocenteCreateManyInput.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocenteCreateManyInput.prototype, "email", void 0);
DocenteCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocenteCreateManyInput", {
        isAbstract: true
    })
], DocenteCreateManyInput);
exports.DocenteCreateManyInput = DocenteCreateManyInput;
