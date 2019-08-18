# Host: localhost  (Version: 5.5.53)
# Date: 2019-06-14 15:54:27
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "usertab"
#

CREATE TABLE `usertab` (
  `username` varchar(30) NOT NULL,
  `userpass` varchar(16) NOT NULL,
  `usersex` char(2) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "usertab"
#

INSERT INTO `usertab` VALUES ('zhangjun',' 123456',NULL),('zhangjun123',' 123456',NULL),('zhangjun3',' 123456',NULL),('zhangjun33',' 123456',NULL),('zhangjun333',' 123456',NULL);
