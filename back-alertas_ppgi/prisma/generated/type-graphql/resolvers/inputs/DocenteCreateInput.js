"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoCreateNestedManyWithoutCoorientadorInput_1 = require("../inputs/AlunoCreateNestedManyWithoutCoorientadorInput");
const AlunoCreateNestedManyWithoutOrientadorInput_1 = require("../inputs/AlunoCreateNestedManyWithoutOrientadorInput");
let DocenteCreateInput = class DocenteCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DocenteCreateInput.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocenteCreateInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoCreateNestedManyWithoutOrientadorInput_1.AlunoCreateNestedManyWithoutOrientadorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoCreateNestedManyWithoutOrientadorInput_1.AlunoCreateNestedManyWithoutOrientadorInput)
], DocenteCreateInput.prototype, "AlunoOrientado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoCreateNestedManyWithoutCoorientadorInput_1.AlunoCreateNestedManyWithoutCoorientadorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoCreateNestedManyWithoutCoorientadorInput_1.AlunoCreateNestedManyWithoutCoorientadorInput)
], DocenteCreateInput.prototype, "AlunoCoorientado", void 0);
DocenteCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocenteCreateInput", {
        isAbstract: true
    })
], DocenteCreateInput);
exports.DocenteCreateInput = DocenteCreateInput;
