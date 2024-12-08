package repositories

import (
	"api/internal/domain/models"
	"context"
)

type UserRepository interface {
	FindAll(context.Context) ([]models.User, error)
	Save(context.Context, models.User) (models.User, error)
}
