-- CreateTable
CREATE TABLE `events` (
    `event_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` VARCHAR(191) NULL,
    `title` TEXT NULL,
    `content` TEXT NULL,
    `is_active` BOOLEAN NULL DEFAULT false,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`event_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rooms` (
    `room_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `title` TEXT NULL,
    `status` ENUM('idle', 'singing', 'battle') NULL DEFAULT 'idle',
    `tag` JSON NULL,
    `viewer_count` INTEGER NULL DEFAULT 0,
    `host_id` VARCHAR(191) NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `host_id`(`host_id`),
    PRIMARY KEY (`room_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shop_items` (
    `items_id` VARCHAR(20) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `category` ENUM('popular', 'interactive', 'luxury', 'special') NULL,
    `price` INTEGER NOT NULL,
    `description` TEXT NULL,
    `image_url` VARCHAR(255) NULL,
    `is_active` BOOLEAN NULL DEFAULT false,
    `stock` INTEGER NULL DEFAULT -1,

    PRIMARY KEY (`items_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_items` (
    `transaction_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` VARCHAR(191) NOT NULL,
    `item_id` VARCHAR(20) NOT NULL,
    `quantity` INTEGER NULL DEFAULT 1,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `item_id`(`item_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`transaction_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `user_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `bio` TEXT NULL,
    `level` INTEGER NULL DEFAULT 1,
    `coins` INTEGER NULL DEFAULT 100,
    `avatar_url` VARCHAR(255) NULL,
    `stealth` BOOLEAN NULL DEFAULT false,
    `accept_match` BOOLEAN NULL DEFAULT false,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `room_id` INTEGER NULL,

    INDEX `room_id`(`room_id`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `events` ADD CONSTRAINT `events_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rooms` ADD CONSTRAINT `rooms_ibfk_1` FOREIGN KEY (`host_id`) REFERENCES `users`(`user_id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_items` ADD CONSTRAINT `user_items_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_items` ADD CONSTRAINT `user_items_ibfk_2` FOREIGN KEY (`item_id`) REFERENCES `shop_items`(`items_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `rooms`(`room_id`) ON DELETE SET NULL ON UPDATE NO ACTION;

