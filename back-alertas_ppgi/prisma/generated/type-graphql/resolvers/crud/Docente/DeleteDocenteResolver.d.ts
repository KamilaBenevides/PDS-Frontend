import { GraphQLResolveInfo } from "graphql";
import { DeleteDocenteArgs } from "./args/DeleteDocenteArgs";
import { Docente } from "../../../models/Docente";
export declare class DeleteDocenteResolver {
    deleteDocente(ctx: any, info: GraphQLResolveInfo, args: DeleteDocenteArgs): Promise<Docente | null>;
}
