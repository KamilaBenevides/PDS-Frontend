-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "AlertaType" ADD VALUE 'HOMOLOGACAO_DIPLOMA';
ALTER TYPE "AlertaType" ADD VALUE 'ESTAGIO_DOCENCIA';
ALTER TYPE "AlertaType" ADD VALUE 'SUBMISSAO_ARTIGO';
