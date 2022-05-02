"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyDocenteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocenteUpdateManyMutationInput_1 = require("../../../inputs/DocenteUpdateManyMutationInput");
const DocenteWhereInput_1 = require("../../../inputs/DocenteWhereInput");
let UpdateManyDocenteArgs = class UpdateManyDocenteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteUpdateManyMutationInput_1.DocenteUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocenteUpdateManyMutationInput_1.DocenteUpdateManyMutationInput)
], UpdateManyDocenteArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteWhereInput_1.DocenteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteWhereInput_1.DocenteWhereInput)
], UpdateManyDocenteArgs.prototype, "where", void 0);
UpdateManyDocenteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyDocenteArgs);
exports.UpdateManyDocenteArgs = UpdateManyDocenteArgs;
