"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAlunoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoUpdateInput_1 = require("../../../inputs/AlunoUpdateInput");
const AlunoWhereUniqueInput_1 = require("../../../inputs/AlunoWhereUniqueInput");
let UpdateAlunoArgs = class UpdateAlunoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoUpdateInput_1.AlunoUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoUpdateInput_1.AlunoUpdateInput)
], UpdateAlunoArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoWhereUniqueInput_1.AlunoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoWhereUniqueInput_1.AlunoWhereUniqueInput)
], UpdateAlunoArgs.prototype, "where", void 0);
UpdateAlunoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateAlunoArgs);
exports.UpdateAlunoArgs = UpdateAlunoArgs;
