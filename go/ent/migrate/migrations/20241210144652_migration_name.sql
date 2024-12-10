-- Modify "users" table
ALTER TABLE "users" DROP CONSTRAINT "users_organizations_users", ALTER COLUMN "organization_users" SET NOT NULL, ADD CONSTRAINT "users_organizations_users" FOREIGN KEY ("organization_users") REFERENCES "organizations" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION;
