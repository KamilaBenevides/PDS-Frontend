import { GraphQLResolveInfo } from "graphql";
import { UpsertDocenteArgs } from "./args/UpsertDocenteArgs";
import { Docente } from "../../../models/Docente";
export declare class UpsertDocenteResolver {
    upsertDocente(ctx: any, info: GraphQLResolveInfo, args: UpsertDocenteArgs): Promise<Docente>;
}
