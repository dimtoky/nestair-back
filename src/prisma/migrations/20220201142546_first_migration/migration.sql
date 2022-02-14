-- CreateTable
CREATE TABLE "article" (
    "id" SERIAL NOT NULL,
    "nom" VARCHAR NOT NULL,
    "description" VARCHAR,
    "prix" INTEGER,
    "image" VARCHAR,
    "created_at" DATE NOT NULL,
    "updated_at" DATE,

    CONSTRAINT "article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "nom" VARCHAR,
    "prenom" VARCHAR,
    "email" VARCHAR NOT NULL,
    "tel" VARCHAR,
    "adresse" VARCHAR,
    "password" VARCHAR NOT NULL,
    "created_at" DATE,
    "updated_at" DATE,
    "forgot_password_token" DATE,
    "role" INTEGER,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
