package router

import (
	"api/internal/infrastructure/repositories"
	"api/internal/presentation/handlers"
	"net/http"

	"github.com/gin-gonic/gin"
)

func NewRouter() *gin.Engine {
	r := gin.Default()

	userRepository := handlers.NewUserHandler(&repositories.UserRepositoryImpl{})
	r.GET("/users", func(c *gin.Context) {
		users := userRepository.FindAll()
		c.JSON(http.StatusOK, users)
	})
	return r
}
