"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDocenteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocenteCreateInput_1 = require("../../../inputs/DocenteCreateInput");
let CreateDocenteArgs = class CreateDocenteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteCreateInput_1.DocenteCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocenteCreateInput_1.DocenteCreateInput)
], CreateDocenteArgs.prototype, "data", void 0);
CreateDocenteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateDocenteArgs);
exports.CreateDocenteArgs = CreateDocenteArgs;
