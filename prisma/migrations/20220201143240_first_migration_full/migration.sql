/*
  Warnings:

  - Made the column `description` on table `article` required. This step will fail if there are existing NULL values in that column.
  - Made the column `prix` on table `article` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `article` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `article` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nom` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `prenom` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tel` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `adresse` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `forgot_password_token` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `role` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "article" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "prix" SET NOT NULL,
ALTER COLUMN "image" SET NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "nom" SET NOT NULL,
ALTER COLUMN "prenom" SET NOT NULL,
ALTER COLUMN "tel" SET NOT NULL,
ALTER COLUMN "adresse" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL,
ALTER COLUMN "forgot_password_token" SET NOT NULL,
ALTER COLUMN "role" SET NOT NULL;
