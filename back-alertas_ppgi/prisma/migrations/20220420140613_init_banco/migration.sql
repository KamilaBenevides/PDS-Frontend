-- CreateTable
CREATE TABLE "Aluno" (
    "id" SERIAL NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "dataIngresso" TIMESTAMP(3) NOT NULL,
    "dataLimite" TIMESTAMP(3) NOT NULL,
    "cpf" TEXT NOT NULL,
    "emailInstitucional" TEXT,
    "emailPessoal" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "orientadorId" INTEGER NOT NULL,
    "coorientadorId" INTEGER,

    CONSTRAINT "Aluno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Docente" (
    "id" SERIAL NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "email" TEXT,

    CONSTRAINT "Docente_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_matricula_key" ON "Aluno"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_emailInstitucional_key" ON "Aluno"("emailInstitucional");

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_emailPessoal_key" ON "Aluno"("emailPessoal");

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_orientadorId_fkey" FOREIGN KEY ("orientadorId") REFERENCES "Docente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_coorientadorId_fkey" FOREIGN KEY ("coorientadorId") REFERENCES "Docente"("id") ON DELETE SET NULL ON UPDATE CASCADE;
