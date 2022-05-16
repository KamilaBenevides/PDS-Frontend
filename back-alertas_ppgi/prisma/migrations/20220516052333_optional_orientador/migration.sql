-- DropForeignKey
ALTER TABLE "Aluno" DROP CONSTRAINT "Aluno_orientadorId_fkey";

-- AlterTable
ALTER TABLE "Aluno" ALTER COLUMN "orientadorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_orientadorId_fkey" FOREIGN KEY ("orientadorId") REFERENCES "Docente"("id") ON DELETE SET NULL ON UPDATE CASCADE;
