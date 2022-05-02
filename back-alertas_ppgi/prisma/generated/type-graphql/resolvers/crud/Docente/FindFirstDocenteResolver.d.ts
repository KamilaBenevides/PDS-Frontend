import { GraphQLResolveInfo } from "graphql";
import { FindFirstDocenteArgs } from "./args/FindFirstDocenteArgs";
import { Docente } from "../../../models/Docente";
export declare class FindFirstDocenteResolver {
    findFirstDocente(ctx: any, info: GraphQLResolveInfo, args: FindFirstDocenteArgs): Promise<Docente | null>;
}
