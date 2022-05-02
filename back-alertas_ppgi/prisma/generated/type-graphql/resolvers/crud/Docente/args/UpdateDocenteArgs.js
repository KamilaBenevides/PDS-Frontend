"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDocenteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocenteUpdateInput_1 = require("../../../inputs/DocenteUpdateInput");
const DocenteWhereUniqueInput_1 = require("../../../inputs/DocenteWhereUniqueInput");
let UpdateDocenteArgs = class UpdateDocenteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteUpdateInput_1.DocenteUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocenteUpdateInput_1.DocenteUpdateInput)
], UpdateDocenteArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteWhereUniqueInput_1.DocenteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocenteWhereUniqueInput_1.DocenteWhereUniqueInput)
], UpdateDocenteArgs.prototype, "where", void 0);
UpdateDocenteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateDocenteArgs);
exports.UpdateDocenteArgs = UpdateDocenteArgs;
