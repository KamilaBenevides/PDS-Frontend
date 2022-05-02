"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var DocenteScalarFieldEnum;
(function (DocenteScalarFieldEnum) {
    DocenteScalarFieldEnum["id"] = "id";
    DocenteScalarFieldEnum["nomeCompleto"] = "nomeCompleto";
    DocenteScalarFieldEnum["email"] = "email";
})(DocenteScalarFieldEnum = exports.DocenteScalarFieldEnum || (exports.DocenteScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(DocenteScalarFieldEnum, {
    name: "DocenteScalarFieldEnum",
    description: undefined,
});
