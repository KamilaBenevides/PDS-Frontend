"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAlunoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoCreateManyInput_1 = require("../../../inputs/AlunoCreateManyInput");
let CreateManyAlunoArgs = class CreateManyAlunoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoCreateManyInput_1.AlunoCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAlunoArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyAlunoArgs.prototype, "skipDuplicates", void 0);
CreateManyAlunoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAlunoArgs);
exports.CreateManyAlunoArgs = CreateManyAlunoArgs;
