-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 01, 2026 at 07:07 AM
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
-- Database: `lo_bali_event`
--

-- --------------------------------------------------------

--
-- Table structure for table `nota`
--

CREATE TABLE `nota` (
  `id` int NOT NULL,
  `nomor_nota` varchar(50) NOT NULL,
  `tanggal` date NOT NULL,
  `kepada` varchar(100) NOT NULL,
  `item_detail` text NOT NULL,
  `total` decimal(15,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nota`
--

INSERT INTO `nota` (`id`, `nomor_nota`, `tanggal`, `kepada`, `item_detail`, `total`, `created_at`) VALUES
(1, 'REN-3220', '2026-06-16', 'LEOMANG TECH', '[{\"nama\":\"TES\",\"harga\":\"10000\"},{\"nama\":\"YES\",\"harga\":\"20000\"}]', '30000.00', '2026-06-08 15:56:41'),
(2, '1416f073', '2026-06-09', 'Ayu Meilani', '[{\"nama\":\"HT Baofeng BF-888 (30)\",\"harga\":\"150000\"}]', '150000.00', '2026-06-09 15:42:49'),
(3, 'RENT-29973', '2026-06-28', 'The Given Seminar & Workshop Tahun 2026', '[{\"nama\":\"HT Baofeng BF-888s\",\"harga\":\"95000\"}]', '95000.00', '2026-06-29 04:03:50'),
(4, 'RENT-32133', '2026-06-28', 'The Given Seminar & Workshop', '[{\"nama\":\"HT Baofeng BF-888s\",\"qty\":\"19\",\"harga\":\"5000\"}]', '95000.00', '2026-06-29 04:21:37'),
(5, 'NOTA-4434-3393', '2026-06-30', 'ee', '[{\"nama\":\"sss\",\"qty\":\"1\",\"harga\":\"2000\"}]', '2000.00', '2026-06-29 14:23:36'),
(6, 'RENT-5848-0904', '2026-06-29', 'wwww', '[{\"nama\":\"tess\",\"qty\":\"1\",\"harga\":\"1000\"}]', '1000.00', '2026-06-29 14:28:19'),
(7, 'RENT-3264-1073', '2026-06-29', 'sddd', '[{\"nama\":\"dddff\",\"qty\":\"10\",\"harga\":\"200\"}]', '2000.00', '2026-06-29 14:42:33'),
(8, 'RENT-3935-1401', '2026-06-29', 'dd', '[{\"nama\":\"dddd\",\"qty\":\"19\",\"harga\":\"666\"},{\"nama\":\"dddd\",\"qty\":\"1\",\"harga\":\"666\"}]', '13320.00', '2026-06-29 14:43:02'),
(9, 'RENT-3244-7404', '2026-06-29', 'AGUS', '', '8000.00', '2026-06-29 14:53:14'),
(10, 'RENT-5390-1269', '2026-06-29', 'BDDD', '', '40000.00', '2026-06-29 14:57:22'),
(11, 'RENT-8826-1935', '2026-06-29', 'd', '', '20000.00', '2026-06-29 14:59:03'),
(12, 'RENT-1286-8775', '2026-06-29', 'j', '', '6000.00', '2026-06-29 15:01:25'),
(13, 'RENT-5018-0141', '2026-07-01', 'Made Aditya Artha Putra', '', '140000.00', '2026-07-01 07:02:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `nota`
--
ALTER TABLE `nota`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `nota`
--
ALTER TABLE `nota`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
