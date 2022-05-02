"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAlunoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateAlunoArgs_1 = require("./args/AggregateAlunoArgs");
const Aluno_1 = require("../../../models/Aluno");
const AggregateAluno_1 = require("../../outputs/AggregateAluno");
const helpers_1 = require("../../../helpers");
let AggregateAlunoResolver = class AggregateAlunoResolver {
    async aggregateAluno(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).aluno.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAluno_1.AggregateAluno, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAlunoArgs_1.AggregateAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateAlunoResolver.prototype, "aggregateAluno", null);
AggregateAlunoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Aluno_1.Aluno)
], AggregateAlunoResolver);
exports.AggregateAlunoResolver = AggregateAlunoResolver;
