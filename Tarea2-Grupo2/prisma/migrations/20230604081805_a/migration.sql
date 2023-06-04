-- DropForeignKey
ALTER TABLE "Karts" DROP CONSTRAINT "Karts_id_personaje_fkey";

-- AlterTable
ALTER TABLE "Karts" ALTER COLUMN "velocidad_maxima" DROP NOT NULL,
ALTER COLUMN "id_personaje" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Personajes" ALTER COLUMN "objeto" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Trabajos" ALTER COLUMN "descripcion" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Karts" ADD CONSTRAINT "Karts_id_personaje_fkey" FOREIGN KEY ("id_personaje") REFERENCES "Personajes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
