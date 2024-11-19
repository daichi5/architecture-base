package router

import (
	"api/ent"
	"api/internal/infrastructure/repositories"
	"api/internal/presentation/handlers"
	"net/http"

	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

func NewRouter() *gin.Engine {
	r := gin.Default()

	client, err := ent.Open("postgres", "host=db port=5432 user=postgres dbname=dbname password=password sslmode=disable")

	if err != nil {
		panic(err)
	}

	userRepository := repositories.NewUserRepository(client)
	newUserHandler := handlers.NewUserHandler(userRepository)
	r.GET("/users", func(c *gin.Context) {
		users := newUserHandler.FindAll(c)

		c.JSON(http.StatusOK, gin.H{"users": users})
	})

	return r
}
