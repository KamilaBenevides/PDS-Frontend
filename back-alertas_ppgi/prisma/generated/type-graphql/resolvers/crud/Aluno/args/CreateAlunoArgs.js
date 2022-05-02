"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAlunoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoCreateInput_1 = require("../../../inputs/AlunoCreateInput");
let CreateAlunoArgs = class CreateAlunoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoCreateInput_1.AlunoCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoCreateInput_1.AlunoCreateInput)
], CreateAlunoArgs.prototype, "data", void 0);
CreateAlunoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateAlunoArgs);
exports.CreateAlunoArgs = CreateAlunoArgs;
