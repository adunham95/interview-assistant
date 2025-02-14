-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "company" TEXT,
ADD COLUMN     "salary" TEXT,
ADD COLUMN     "status" TEXT DEFAULT 'applied';
