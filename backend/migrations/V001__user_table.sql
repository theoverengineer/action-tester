-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(80) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `username` VARCHAR(30) NOT NULL,
    `password_hash` VARCHAR(1024) NOT NULL,
    `is_app_admin` TINYINT NOT NULL DEFAULT 0,
    `is_deleted` TINYINT NOT NULL DEFAULT 0,
    `created` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `is_email_validated` TINYINT NOT NULL DEFAULT 0,
    `email_validation_str` VARCHAR(100) NOT NULL,
    `email_validation_sent_dt` TIMESTAMP(0) NULL,
    `email_validation_received_dt` TIMESTAMP(0) NULL,

    UNIQUE INDEX `email_UNIQUE`(`email`),
    UNIQUE INDEX `username_UNIQUE`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
