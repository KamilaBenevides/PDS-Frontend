import { GraphQLResolveInfo } from "graphql";
import { UpdateDocenteArgs } from "./args/UpdateDocenteArgs";
import { Docente } from "../../../models/Docente";
export declare class UpdateDocenteResolver {
    updateDocente(ctx: any, info: GraphQLResolveInfo, args: UpdateDocenteArgs): Promise<Docente | null>;
}
