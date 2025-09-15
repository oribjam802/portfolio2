#!/bin/bash

# Portfolio Development Environment Setup Script

echo "🚀 Setting up Portfolio Development Environment..."

# Check if yarn is installed
if ! command -v yarn &> /dev/null; then
    echo "❌ Yarn is not installed. Please install Yarn first."
    echo "   Install with: npm install -g yarn"
    exit 1
fi

# Check if docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if docker-compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

echo "✅ Prerequisites check passed"

# Install dependencies
echo "📦 Installing dependencies with Yarn..."
yarn install

# Build Docker images
echo "🐳 Building Docker images..."
docker-compose build

echo "✅ Setup complete!"
echo ""
echo "📋 Available commands:"
echo "  yarn dev          - Start development server"
echo "  yarn build        - Build for production"
echo "  yarn preview      - Preview production build"
echo "  docker-compose up - Start development environment with Docker"
echo "  docker-compose up --profile production - Start production environment"
echo ""
echo "🌐 Development server will be available at: http://localhost:3000"
echo "🌐 Production server will be available at: http://localhost:8080"

