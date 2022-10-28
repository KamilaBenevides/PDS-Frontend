/*
  Warnings:

  - Made the column `dataProrrogacao` on table `Aluno` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Aluno" ADD COLUMN "prorrogado" BOOLEAN;
