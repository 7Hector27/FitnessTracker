/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reps` to the `day` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sets` to the `day` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "day" ADD COLUMN     "reps" INTEGER NOT NULL,
ADD COLUMN     "sets" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
