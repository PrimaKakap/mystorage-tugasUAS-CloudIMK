-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 08, 2026 at 10:28 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mystorage`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity_logs`
--

CREATE TABLE `activity_logs` (
  `id` bigint NOT NULL,
  `user_id` bigint DEFAULT NULL,
  `action` varchar(100) DEFAULT NULL,
  `file_id` bigint DEFAULT NULL,
  `folder_id` bigint DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `files`
--

CREATE TABLE `files` (
  `id` bigint NOT NULL,
  `folder_id` bigint DEFAULT NULL,
  `owner_id` bigint NOT NULL,
  `original_name` varchar(255) NOT NULL,
  `storage_name` varchar(255) NOT NULL,
  `extension` varchar(20) DEFAULT NULL,
  `mime_type` varchar(100) DEFAULT NULL,
  `file_size` bigint NOT NULL,
  `storage_path` varchar(500) NOT NULL,
  `bucket_name` varchar(100) DEFAULT NULL,
  `is_starred` tinyint(1) DEFAULT '0',
  `is_deleted` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `files`
--

INSERT INTO `files` (`id`, `folder_id`, `owner_id`, `original_name`, `storage_name`, `extension`, `mime_type`, `file_size`, `storage_path`, `bucket_name`, `is_starred`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 2, 1, 'cv.pdf', '1782809798025-cv.pdf', NULL, NULL, 125044, '/uploads/1782809798025-cv.pdf', NULL, 0, 0, '2026-06-30 00:56:38', '2026-06-30 00:56:38'),
(2, 1, 1, 'Backdrop WP Depan KKN REVISI BATCH 2.pdf', '1783389520904-Backdrop WP Depan KKN REVISI BATCH 2.pdf', NULL, NULL, 10773977, '/uploads/1783389520904-Backdrop WP Depan KKN REVISI BATCH 2.pdf', NULL, 0, 0, '2026-07-06 17:58:41', '2026-07-06 17:58:41'),
(3, 1, 1, 'Backdrop WP Panggung KKN.pdf', '1783389534107-Backdrop WP Panggung KKN.pdf', NULL, NULL, 19633700, '/uploads/1783389534107-Backdrop WP Panggung KKN.pdf', NULL, 0, 0, '2026-07-06 17:58:54', '2026-07-06 17:58:54'),
(4, 1, 1, 'cv.docx', '1783389767627-cv.docx', NULL, NULL, 29658, '/uploads/1783389767627-cv.docx', NULL, 0, 0, '2026-07-06 18:02:48', '2026-07-06 18:02:48'),
(5, 1, 1, 'nota.sql', '1783390134611-nota.sql', NULL, NULL, 3301, '/uploads/1783390134611-nota.sql', NULL, 0, 0, '2026-07-06 18:08:55', '2026-07-06 18:08:55'),
(6, 1, 1, 'sponsor rc.png', '1783391096388-sponsor rc.png', NULL, NULL, 2343130, '/uploads/1783391096388-sponsor rc.png', NULL, 0, 0, '2026-07-06 18:24:56', '2026-07-06 18:24:56');

-- --------------------------------------------------------

--
-- Table structure for table `file_shares`
--

CREATE TABLE `file_shares` (
  `id` bigint NOT NULL,
  `file_id` bigint DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `expired_at` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `folders`
--

CREATE TABLE `folders` (
  `id` bigint NOT NULL,
  `owner_id` bigint NOT NULL,
  `parent_id` bigint DEFAULT NULL,
  `folder_name` varchar(150) NOT NULL,
  `color` varchar(30) DEFAULT '#FFD54F',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `folders`
--

INSERT INTO `folders` (`id`, `owner_id`, `parent_id`, `folder_name`, `color`, `created_at`, `updated_at`) VALUES
(1, 1, NULL, 'Project Kuliah', '#FFD54F', '2026-06-30 08:39:50', '2026-06-30 08:39:50'),
(2, 1, NULL, 'PKM', '#42A5F5', '2026-06-30 08:39:50', '2026-06-30 08:39:50'),
(3, 1, NULL, 'Minipul', '#66BB6A', '2026-06-30 08:39:50', '2026-06-30 08:39:50');

-- --------------------------------------------------------

--
-- Table structure for table `storage_usage`
--

CREATE TABLE `storage_usage` (
  `id` bigint NOT NULL,
  `user_id` bigint DEFAULT NULL,
  `total_storage` bigint DEFAULT '107374182400',
  `used_storage` bigint DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint NOT NULL,
  `fullname` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `email`, `password`, `photo`, `created_at`, `updated_at`) VALUES
(1, 'I Komang Yoga Dinanta', 'yoga@gmail.com', '123456', NULL, '2026-06-30 07:58:42', '2026-06-30 07:58:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity_logs`
--
ALTER TABLE `activity_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `folder_id` (`folder_id`),
  ADD KEY `owner_id` (`owner_id`);

--
-- Indexes for table `file_shares`
--
ALTER TABLE `file_shares`
  ADD PRIMARY KEY (`id`),
  ADD KEY `file_id` (`file_id`);

--
-- Indexes for table `folders`
--
ALTER TABLE `folders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `owner_id` (`owner_id`),
  ADD KEY `parent_id` (`parent_id`);

--
-- Indexes for table `storage_usage`
--
ALTER TABLE `storage_usage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity_logs`
--
ALTER TABLE `activity_logs`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `files`
--
ALTER TABLE `files`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `file_shares`
--
ALTER TABLE `file_shares`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `folders`
--
ALTER TABLE `folders`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `storage_usage`
--
ALTER TABLE `storage_usage`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `activity_logs`
--
ALTER TABLE `activity_logs`
  ADD CONSTRAINT `activity_logs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `files`
--
ALTER TABLE `files`
  ADD CONSTRAINT `files_ibfk_1` FOREIGN KEY (`folder_id`) REFERENCES `folders` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `files_ibfk_2` FOREIGN KEY (`owner_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `file_shares`
--
ALTER TABLE `file_shares`
  ADD CONSTRAINT `file_shares_ibfk_1` FOREIGN KEY (`file_id`) REFERENCES `files` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `folders`
--
ALTER TABLE `folders`
  ADD CONSTRAINT `folders_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `folders_ibfk_2` FOREIGN KEY (`parent_id`) REFERENCES `folders` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `storage_usage`
--
ALTER TABLE `storage_usage`
  ADD CONSTRAINT `storage_usage_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
