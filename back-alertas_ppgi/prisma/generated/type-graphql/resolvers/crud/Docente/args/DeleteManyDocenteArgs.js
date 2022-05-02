"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyDocenteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocenteWhereInput_1 = require("../../../inputs/DocenteWhereInput");
let DeleteManyDocenteArgs = class DeleteManyDocenteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteWhereInput_1.DocenteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteWhereInput_1.DocenteWhereInput)
], DeleteManyDocenteArgs.prototype, "where", void 0);
DeleteManyDocenteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyDocenteArgs);
exports.DeleteManyDocenteArgs = DeleteManyDocenteArgs;
