"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAlunoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByAlunoArgs_1 = require("./args/GroupByAlunoArgs");
const Aluno_1 = require("../../../models/Aluno");
const AlunoGroupBy_1 = require("../../outputs/AlunoGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByAlunoResolver = class GroupByAlunoResolver {
    async groupByAluno(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aluno.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AlunoGroupBy_1.AlunoGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAlunoArgs_1.GroupByAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByAlunoResolver.prototype, "groupByAluno", null);
GroupByAlunoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Aluno_1.Aluno)
], GroupByAlunoResolver);
exports.GroupByAlunoResolver = GroupByAlunoResolver;
