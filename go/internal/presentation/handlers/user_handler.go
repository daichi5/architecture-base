package handlers

import (
	"api/internal/domain/models"
	"api/internal/domain/repositories"
)

type UserHandler struct {
	userRepository repositories.UserRepository
}

func NewUserHandler(repository repositories.UserRepository) *UserHandler {
	return &UserHandler{userRepository: repository}
}

func (h *UserHandler) FindAll() []models.User {
	users, _ := h.userRepository.FindAll()

	return users
}
