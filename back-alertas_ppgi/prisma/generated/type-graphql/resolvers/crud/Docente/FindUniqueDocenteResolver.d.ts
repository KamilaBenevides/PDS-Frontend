import { GraphQLResolveInfo } from "graphql";
import { FindUniqueDocenteArgs } from "./args/FindUniqueDocenteArgs";
import { Docente } from "../../../models/Docente";
export declare class FindUniqueDocenteResolver {
    docente(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDocenteArgs): Promise<Docente | null>;
}
