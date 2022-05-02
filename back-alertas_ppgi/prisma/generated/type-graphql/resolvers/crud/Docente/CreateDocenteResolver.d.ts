import { GraphQLResolveInfo } from "graphql";
import { CreateDocenteArgs } from "./args/CreateDocenteArgs";
import { Docente } from "../../../models/Docente";
export declare class CreateDocenteResolver {
    createDocente(ctx: any, info: GraphQLResolveInfo, args: CreateDocenteArgs): Promise<Docente>;
}
