import { GraphQLResolveInfo } from "graphql";
import { FindManyDocenteArgs } from "./args/FindManyDocenteArgs";
import { Docente } from "../../../models/Docente";
export declare class FindManyDocenteResolver {
    docentes(ctx: any, info: GraphQLResolveInfo, args: FindManyDocenteArgs): Promise<Docente[]>;
}
