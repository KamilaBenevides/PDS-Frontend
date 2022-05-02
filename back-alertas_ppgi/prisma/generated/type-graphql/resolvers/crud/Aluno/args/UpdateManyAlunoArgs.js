"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAlunoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoUpdateManyMutationInput_1 = require("../../../inputs/AlunoUpdateManyMutationInput");
const AlunoWhereInput_1 = require("../../../inputs/AlunoWhereInput");
let UpdateManyAlunoArgs = class UpdateManyAlunoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoUpdateManyMutationInput_1.AlunoUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoUpdateManyMutationInput_1.AlunoUpdateManyMutationInput)
], UpdateManyAlunoArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoWhereInput_1.AlunoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoWhereInput_1.AlunoWhereInput)
], UpdateManyAlunoArgs.prototype, "where", void 0);
UpdateManyAlunoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyAlunoArgs);
exports.UpdateManyAlunoArgs = UpdateManyAlunoArgs;
