package repositories

import (
	"api/ent"
	"api/internal/domain/models"
	"api/internal/domain/repositories"
	"context"
	"fmt"
)

type UserRepositoryImpl struct {
	db *ent.Client
}

// check interface at compile time
var _ repositories.UserRepository = (*UserRepositoryImpl)(nil)

func toUserModel(u *ent.User) *models.User {
	return &models.User{
		ID:   u.ID,
		Name: u.Name,
	}
}

func NewUserRepository(db *ent.Client) *UserRepositoryImpl {
	return &UserRepositoryImpl{db: db}
}

func (r *UserRepositoryImpl) FindAll(ctx context.Context) ([]models.User, error) {
	u, err := r.db.User.Query().All(ctx)

	if err != nil {
		fmt.Println(err)
		return nil, fmt.Errorf("failed to find users: %w", err)
	}

	users := make([]models.User, len(u), len(u))

	for i, user := range u {
		users[i] = *toUserModel(user)
	}

	return users, nil
}

func (r *UserRepositoryImpl) Save(ctx context.Context, user models.User) (models.User, error) {
	// TODO: enable to update user
	u, err := r.db.User.Create().SetID(user.ID).SetName(user.Name).Save(ctx)

	if err != nil {
		fmt.Println(err)
		return models.User{}, fmt.Errorf("failed to save user: %w", err)
	}

	return *toUserModel(u), nil
}
