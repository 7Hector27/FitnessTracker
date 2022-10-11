-- CreateEnum
CREATE TYPE "dayoftheweek" AS ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "day" (
    "id" TEXT NOT NULL,
    "dayoftheweek" "dayoftheweek" NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "day_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workout" (
    "id" TEXT NOT NULL,
    "bodyPart" TEXT NOT NULL,
    "equipment" TEXT NOT NULL,
    "gifUrl" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "target" TEXT NOT NULL,
    "dayId" TEXT,
    "sets" INTEGER,
    "reps" INTEGER,
    "time" INTEGER,

    CONSTRAINT "workout_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "day_id_key" ON "day"("id");

-- AddForeignKey
ALTER TABLE "day" ADD CONSTRAINT "day_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workout" ADD CONSTRAINT "workout_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "day"("id") ON DELETE SET NULL ON UPDATE CASCADE;
