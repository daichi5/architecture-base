package handlers

import (
	"api/internal/domain/models"
	"api/internal/domain/repositories"
	"context"
)

type UserHandler struct {
	userRepository repositories.UserRepository
}

func NewUserHandler(repository repositories.UserRepository) *UserHandler {
	return &UserHandler{userRepository: repository}
}

func (h *UserHandler) FindAll(ctx context.Context) []models.User {
	users, _ := h.userRepository.FindAll(ctx)

	// TODO: handle error

	return users
}
