#!/bin/bash

# Portfolio Deployment Script for Rancher/Kubernetes

echo "🚀 Deploying Portfolio to Rancher/Kubernetes..."

# Check if kubectl is installed
if ! command -v kubectl &> /dev/null; then
    echo "❌ kubectl is not installed. Please install kubectl first."
    exit 1
fi

# Build production Docker image
echo "🐳 Building production Docker image..."
docker build -t portfolio:latest .

# Tag image for registry (replace with your registry)
echo "🏷️  Tagging image..."
docker tag portfolio:latest your-registry.com/portfolio:latest

# Push to registry (uncomment when ready)
# echo "📤 Pushing image to registry..."
# docker push your-registry.com/portfolio:latest

# Apply Kubernetes manifests
echo "📋 Applying Kubernetes manifests..."
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml

echo "✅ Deployment complete!"
echo ""
echo "📊 Check deployment status:"
echo "  kubectl get pods -n portfolio"
echo "  kubectl get services -n portfolio"
echo "  kubectl get ingress -n portfolio"
echo ""
echo "🌐 Access the application at: http://portfolio.local"

