/*
  Warnings:

  - You are about to drop the column `roomNumber` on the `requests` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `requests` DROP COLUMN `roomNumber`,
    ADD COLUMN `room_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `requests` ADD CONSTRAINT `requests_room_id_fkey` FOREIGN KEY (`room_id`) REFERENCES `rooms`(`room_id`) ON DELETE SET NULL ON UPDATE CASCADE;
