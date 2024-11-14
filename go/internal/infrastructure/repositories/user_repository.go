package repositories

import (
	"api/internal/domain/models"
	"api/internal/domain/repositories"
)

type UserRepositoryImpl struct{}

// check interface at compile time
var _ repositories.UserRepository = (*UserRepositoryImpl)(nil)

func (r *UserRepositoryImpl) FindAll() ([]models.User, error) {
	return []models.User{
		{ID: 1, Name: "John"},
		{ID: 2, Name: "Doe"},
	}, nil
}
