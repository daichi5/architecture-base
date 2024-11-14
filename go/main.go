package main

import (
	"api/internal/presentation/router"
)

func main() {
	r := router.NewRouter()
	r.Run(":8080")
}
