"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoUpdateManyWithWhereWithoutOrientadorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoScalarWhereInput_1 = require("../inputs/AlunoScalarWhereInput");
const AlunoUpdateManyMutationInput_1 = require("../inputs/AlunoUpdateManyMutationInput");
let AlunoUpdateManyWithWhereWithoutOrientadorInput = class AlunoUpdateManyWithWhereWithoutOrientadorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoScalarWhereInput_1.AlunoScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoScalarWhereInput_1.AlunoScalarWhereInput)
], AlunoUpdateManyWithWhereWithoutOrientadorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoUpdateManyMutationInput_1.AlunoUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoUpdateManyMutationInput_1.AlunoUpdateManyMutationInput)
], AlunoUpdateManyWithWhereWithoutOrientadorInput.prototype, "data", void 0);
AlunoUpdateManyWithWhereWithoutOrientadorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoUpdateManyWithWhereWithoutOrientadorInput", {
        isAbstract: true
    })
], AlunoUpdateManyWithWhereWithoutOrientadorInput);
exports.AlunoUpdateManyWithWhereWithoutOrientadorInput = AlunoUpdateManyWithWhereWithoutOrientadorInput;
