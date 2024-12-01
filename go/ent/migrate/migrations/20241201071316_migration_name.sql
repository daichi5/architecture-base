-- Create "organizations" table
CREATE TABLE "organizations" ("id" uuid NOT NULL, "name" character varying NOT NULL, PRIMARY KEY ("id"));
-- Create index "organizations_name_key" to table: "organizations"
CREATE UNIQUE INDEX "organizations_name_key" ON "organizations" ("name");
-- Modify "users" table
ALTER TABLE "users" ADD COLUMN "organization_users" uuid NULL, ADD CONSTRAINT "users_organizations_users" FOREIGN KEY ("organization_users") REFERENCES "organizations" ("id") ON UPDATE NO ACTION ON DELETE SET NULL;
