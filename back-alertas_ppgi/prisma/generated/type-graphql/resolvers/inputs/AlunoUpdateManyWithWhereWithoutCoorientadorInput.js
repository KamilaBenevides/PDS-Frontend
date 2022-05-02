"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoUpdateManyWithWhereWithoutCoorientadorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoScalarWhereInput_1 = require("../inputs/AlunoScalarWhereInput");
const AlunoUpdateManyMutationInput_1 = require("../inputs/AlunoUpdateManyMutationInput");
let AlunoUpdateManyWithWhereWithoutCoorientadorInput = class AlunoUpdateManyWithWhereWithoutCoorientadorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoScalarWhereInput_1.AlunoScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoScalarWhereInput_1.AlunoScalarWhereInput)
], AlunoUpdateManyWithWhereWithoutCoorientadorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoUpdateManyMutationInput_1.AlunoUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoUpdateManyMutationInput_1.AlunoUpdateManyMutationInput)
], AlunoUpdateManyWithWhereWithoutCoorientadorInput.prototype, "data", void 0);
AlunoUpdateManyWithWhereWithoutCoorientadorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoUpdateManyWithWhereWithoutCoorientadorInput", {
        isAbstract: true
    })
], AlunoUpdateManyWithWhereWithoutCoorientadorInput);
exports.AlunoUpdateManyWithWhereWithoutCoorientadorInput = AlunoUpdateManyWithWhereWithoutCoorientadorInput;
