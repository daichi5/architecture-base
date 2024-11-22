-- Create "users" table
CREATE TABLE "users" ("id" uuid NOT NULL, "name" character varying NOT NULL, PRIMARY KEY ("id"));
-- Create index "users_name_key" to table: "users"
CREATE UNIQUE INDEX "users_name_key" ON "users" ("name");
