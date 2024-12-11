include .env

.PHONY: build migrate_diff migrate_apply generate_model

build:
	@echo "to be implemented"

migrate_diff:
	atlas migrate diff migration_name \
  --dir "file://ent/migrate/migrations" \
  --to "ent://ent/schema" \
  --dev-url "docker://postgres/16/test?search_path=public"

migrate_apply:
	atlas migrate apply \
  --dir "file://ent/migrate/migrations" \
  --url $(DATABASE_URL)

generate_model:
	go generate ./ent
