/*
  Warnings:

  - You are about to drop the column `prorrogado` on the `Aluno` table. All the data in the column will be lost.
  - Made the column `dataProrrogacao` on table `Aluno` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Aluno" DROP COLUMN "prorrogado",
ALTER COLUMN "dataProrrogacao" SET NOT NULL;
