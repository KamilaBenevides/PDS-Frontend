/*
  Warnings:

  - Added the required column `tipo` to the `Alerta` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AlertaType" AS ENUM ('DEFESA', 'AGENDAMENTO_DEFESA', 'QUALIFICACAO', 'AGENDAMENTO_QUALIFICACAO', 'PROFICIENCIA');

-- AlterTable
ALTER TABLE "Alerta" ADD COLUMN     "tipo" "AlertaType" NOT NULL;

CREATE UNIQUE INDEX "Alerta_tipo_key" ON "Alerta"("tipo");