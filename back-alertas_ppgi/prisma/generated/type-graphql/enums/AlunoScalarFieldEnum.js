"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AlunoScalarFieldEnum;
(function (AlunoScalarFieldEnum) {
    AlunoScalarFieldEnum["id"] = "id";
    AlunoScalarFieldEnum["nomeCompleto"] = "nomeCompleto";
    AlunoScalarFieldEnum["matricula"] = "matricula";
    AlunoScalarFieldEnum["dataIngresso"] = "dataIngresso";
    AlunoScalarFieldEnum["dataLimite"] = "dataLimite";
    AlunoScalarFieldEnum["cpf"] = "cpf";
    AlunoScalarFieldEnum["emailInstitucional"] = "emailInstitucional";
    AlunoScalarFieldEnum["emailPessoal"] = "emailPessoal";
    AlunoScalarFieldEnum["ativo"] = "ativo";
    AlunoScalarFieldEnum["orientadorId"] = "orientadorId";
    AlunoScalarFieldEnum["coorientadorId"] = "coorientadorId";
})(AlunoScalarFieldEnum = exports.AlunoScalarFieldEnum || (exports.AlunoScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AlunoScalarFieldEnum, {
    name: "AlunoScalarFieldEnum",
    description: undefined,
});
