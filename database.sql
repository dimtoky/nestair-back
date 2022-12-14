/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES  */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE=NO_AUTO_VALUE_ON_ZERO */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE IF NOT EXISTS Incidents (
	id INTEGER DEFAULT ,
	title VARCHAR(255) NULL DEFAULT NULL,
	description VARCHAR(255) NULL DEFAULT NULL,
	status INTEGER,
	priority INTEGER,
	dueDate TIMESTAMP,
	createdAt TIMESTAMP,
	updatedAt TIMESTAMP,
	closedAt TIMESTAMP NULL DEFAULT NULL,
	userId INTEGER,
	PRIMARY KEY (id),
	CONSTRAINT Incidents_userId_fkey FOREIGN KEY (userId) REFERENCES public.Users (id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS Picture (
	id INTEGER DEFAULT ,
	url VARCHAR(255) NULL DEFAULT NULL,
	createdAt TIMESTAMP,
	updatedAt TIMESTAMP,
	incidentId INTEGER,
	PRIMARY KEY (id),
	CONSTRAINT Picture_incidentId_fkey FOREIGN KEY (incidentId) REFERENCES public.Incidents (id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS Users (
	id INTEGER DEFAULT ,
	username VARCHAR(255) NULL DEFAULT NULL,
	password VARCHAR(255) NULL DEFAULT NULL,
	email VARCHAR(255) NULL DEFAULT NULL,
	createdAt TIMESTAMPTZ,
	updatedAt TIMESTAMPTZ,
	PRIMARY KEY (id)
);

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, ) */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
