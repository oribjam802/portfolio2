# Portfolio Development Makefile

.PHONY: help install dev build preview clean docker-build docker-up docker-down k8s-deploy k8s-clean

help: ## Show this help message
	@echo "Available commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	yarn install

dev: ## Start development server
	yarn dev

build: ## Build for production
	yarn build

preview: ## Preview production build
	yarn preview

clean: ## Clean build artifacts
	rm -rf dist
	rm -rf node_modules

docker-build: ## Build Docker images
	docker-compose build

docker-up: ## Start development environment with Docker
	docker-compose up

docker-up-prod: ## Start production environment with Docker
	docker-compose --profile production up

docker-down: ## Stop Docker containers
	docker-compose down

k8s-deploy: ## Deploy to Kubernetes/Rancher
	./scripts/deploy.sh

k8s-clean: ## Clean Kubernetes resources
	kubectl delete -f k8s/

setup: ## Initial setup
	./scripts/setup.sh

lint: ## Run ESLint
	yarn lint

test: ## Run tests (if available)
	yarn test
