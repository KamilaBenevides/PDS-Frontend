/*
  Warnings:

  - Added the required column `dataProrrogacao` to the `Aluno` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Aluno" ADD COLUMN     "dataProrrogacao" TIMESTAMP(3);
