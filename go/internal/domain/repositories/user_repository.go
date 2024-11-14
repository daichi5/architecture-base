package repositories

import "api/internal/domain/models"

type UserRepository interface {
	FindAll() ([]models.User, error)
}
