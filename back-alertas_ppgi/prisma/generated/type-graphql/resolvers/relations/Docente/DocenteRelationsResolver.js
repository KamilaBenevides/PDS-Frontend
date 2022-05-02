"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Aluno_1 = require("../../../models/Aluno");
const Docente_1 = require("../../../models/Docente");
const DocenteAlunoCoorientadoArgs_1 = require("./args/DocenteAlunoCoorientadoArgs");
const DocenteAlunoOrientadoArgs_1 = require("./args/DocenteAlunoOrientadoArgs");
const helpers_1 = require("../../../helpers");
let DocenteRelationsResolver = class DocenteRelationsResolver {
    async AlunoOrientado(docente, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).docente.findUnique({
            where: {
                id: docente.id,
            },
        }).AlunoOrientado(args);
    }
    async AlunoCoorientado(docente, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).docente.findUnique({
            where: {
                id: docente.id,
            },
        }).AlunoCoorientado(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Aluno_1.Aluno], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Docente_1.Docente, Object, DocenteAlunoOrientadoArgs_1.DocenteAlunoOrientadoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocenteRelationsResolver.prototype, "AlunoOrientado", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Aluno_1.Aluno], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Docente_1.Docente, Object, DocenteAlunoCoorientadoArgs_1.DocenteAlunoCoorientadoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocenteRelationsResolver.prototype, "AlunoCoorientado", null);
DocenteRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Docente_1.Docente)
], DocenteRelationsResolver);
exports.DocenteRelationsResolver = DocenteRelationsResolver;
