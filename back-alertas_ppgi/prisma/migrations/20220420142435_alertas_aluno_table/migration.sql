-- CreateTable
CREATE TABLE "AlertaAluno" (
    "id" SERIAL NOT NULL,
    "alunoId" INTEGER NOT NULL,
    "alertaId" INTEGER NOT NULL,
    "enviado" BOOLEAN NOT NULL DEFAULT false,
    "resolvido" BOOLEAN NOT NULL DEFAULT false,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "dataEnvioEmail" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AlertaAluno_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AlertaAluno" ADD CONSTRAINT "AlertaAluno_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlertaAluno" ADD CONSTRAINT "AlertaAluno_alertaId_fkey" FOREIGN KEY ("alertaId") REFERENCES "Alerta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
