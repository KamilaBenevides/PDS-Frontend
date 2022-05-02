"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAluno_1 = require("../../../models/AlertaAluno");
const Aluno_1 = require("../../../models/Aluno");
const Docente_1 = require("../../../models/Docente");
const AlunoAlertaAlunoArgs_1 = require("./args/AlunoAlertaAlunoArgs");
const helpers_1 = require("../../../helpers");
let AlunoRelationsResolver = class AlunoRelationsResolver {
    async orientador(aluno, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).aluno.findUnique({
            where: {
                id: aluno.id,
            },
        }).orientador({});
    }
    async coorientador(aluno, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).aluno.findUnique({
            where: {
                id: aluno.id,
            },
        }).coorientador({});
    }
    async AlertaAluno(aluno, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).aluno.findUnique({
            where: {
                id: aluno.id,
            },
        }).AlertaAluno(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Docente_1.Docente, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Aluno_1.Aluno, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlunoRelationsResolver.prototype, "orientador", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Docente_1.Docente, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Aluno_1.Aluno, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlunoRelationsResolver.prototype, "coorientador", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [AlertaAluno_1.AlertaAluno], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Aluno_1.Aluno, Object, AlunoAlertaAlunoArgs_1.AlunoAlertaAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlunoRelationsResolver.prototype, "AlertaAluno", null);
AlunoRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Aluno_1.Aluno)
], AlunoRelationsResolver);
exports.AlunoRelationsResolver = AlunoRelationsResolver;
