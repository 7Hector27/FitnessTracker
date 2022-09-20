-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_workoutScheduleId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "workoutScheduleId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_workoutScheduleId_fkey" FOREIGN KEY ("workoutScheduleId") REFERENCES "WorkoutSchedule"("id") ON DELETE SET NULL ON UPDATE CASCADE;
