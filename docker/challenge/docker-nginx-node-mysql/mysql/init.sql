CREATE DATABASE IF NOT EXISTS `fullcycle-db`;
USE `fullcycle-db`;
CREATE TABLE IF NOT EXISTS people (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(250)
);