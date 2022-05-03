-- CreateTable
CREATE TABLE "Alerta" (
    "id" SERIAL NOT NULL,
    "diasIntervalo" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "corpoEmail" TEXT,

    CONSTRAINT "Alerta_pkey" PRIMARY KEY ("id")
);
