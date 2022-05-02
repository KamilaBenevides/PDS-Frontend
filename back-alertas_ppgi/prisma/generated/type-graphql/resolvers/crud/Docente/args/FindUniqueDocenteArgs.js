"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueDocenteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocenteWhereUniqueInput_1 = require("../../../inputs/DocenteWhereUniqueInput");
let FindUniqueDocenteArgs = class FindUniqueDocenteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteWhereUniqueInput_1.DocenteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocenteWhereUniqueInput_1.DocenteWhereUniqueInput)
], FindUniqueDocenteArgs.prototype, "where", void 0);
FindUniqueDocenteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueDocenteArgs);
exports.FindUniqueDocenteArgs = FindUniqueDocenteArgs;
