"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyDocenteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocenteCreateManyInput_1 = require("../../../inputs/DocenteCreateManyInput");
let CreateManyDocenteArgs = class CreateManyDocenteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocenteCreateManyInput_1.DocenteCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyDocenteArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyDocenteArgs.prototype, "skipDuplicates", void 0);
CreateManyDocenteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyDocenteArgs);
exports.CreateManyDocenteArgs = CreateManyDocenteArgs;
