-- CreateTable
CREATE TABLE "Personajes" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(45) NOT NULL,
    "fuerza" INTEGER NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "objeto" VARCHAR(30) NOT NULL,

    CONSTRAINT "Personajes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trabajos" (
    "id" SERIAL NOT NULL,
    "descripcion" VARCHAR(45) NOT NULL,
    "sueldo" INTEGER NOT NULL,

    CONSTRAINT "Trabajos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personaje_tiene_trabajo" (
    "id_trabajo" INTEGER NOT NULL,
    "id_personaje" INTEGER NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_termino" TIMESTAMP(3),

    CONSTRAINT "personaje_tiene_trabajo_pkey" PRIMARY KEY ("id_trabajo","id_personaje")
);

-- CreateTable
CREATE TABLE "Karts" (
    "id" SERIAL NOT NULL,
    "modelo" VARCHAR(45) NOT NULL,
    "color" VARCHAR(45) NOT NULL,
    "velocidad_maxima" INTEGER NOT NULL,
    "id_personaje" INTEGER NOT NULL,

    CONSTRAINT "Karts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personaje_habita_reino" (
    "id_personaje" INTEGER NOT NULL,
    "id_reino" INTEGER NOT NULL,
    "fecha_registro" TIMESTAMP(3) NOT NULL,
    "es_gobernante" BOOLEAN NOT NULL,

    CONSTRAINT "personaje_habita_reino_pkey" PRIMARY KEY ("id_personaje","id_reino")
);

-- CreateTable
CREATE TABLE "Reinos" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(45) NOT NULL,
    "ubicacion" VARCHAR(45) NOT NULL,
    "superficie" INTEGER NOT NULL,

    CONSTRAINT "Reinos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Defensas" (
    "id" SERIAL NOT NULL,
    "defensa" VARCHAR(45) NOT NULL,

    CONSTRAINT "Defensas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Defensas_Reinos" (
    "id_defensas" INTEGER NOT NULL,
    "id_reinos" INTEGER NOT NULL,

    CONSTRAINT "Defensas_Reinos_pkey" PRIMARY KEY ("id_defensas","id_reinos")
);

-- CreateTable
CREATE TABLE "Diplomacias" (
    "id_reino_1" INTEGER NOT NULL,
    "id_reino_2" INTEGER NOT NULL,
    "es_aliado" BOOLEAN NOT NULL,

    CONSTRAINT "Diplomacias_pkey" PRIMARY KEY ("id_reino_1","id_reino_2")
);

-- AddForeignKey
ALTER TABLE "personaje_tiene_trabajo" ADD CONSTRAINT "personaje_tiene_trabajo_id_trabajo_fkey" FOREIGN KEY ("id_trabajo") REFERENCES "Trabajos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personaje_tiene_trabajo" ADD CONSTRAINT "personaje_tiene_trabajo_id_personaje_fkey" FOREIGN KEY ("id_personaje") REFERENCES "Personajes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Karts" ADD CONSTRAINT "Karts_id_personaje_fkey" FOREIGN KEY ("id_personaje") REFERENCES "Personajes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personaje_habita_reino" ADD CONSTRAINT "personaje_habita_reino_id_personaje_fkey" FOREIGN KEY ("id_personaje") REFERENCES "Personajes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personaje_habita_reino" ADD CONSTRAINT "personaje_habita_reino_id_reino_fkey" FOREIGN KEY ("id_reino") REFERENCES "Reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Defensas_Reinos" ADD CONSTRAINT "Defensas_Reinos_id_defensas_fkey" FOREIGN KEY ("id_defensas") REFERENCES "Defensas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Defensas_Reinos" ADD CONSTRAINT "Defensas_Reinos_id_reinos_fkey" FOREIGN KEY ("id_reinos") REFERENCES "Reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diplomacias" ADD CONSTRAINT "Diplomacias_id_reino_1_fkey" FOREIGN KEY ("id_reino_1") REFERENCES "Reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diplomacias" ADD CONSTRAINT "Diplomacias_id_reino_2_fkey" FOREIGN KEY ("id_reino_2") REFERENCES "Reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
