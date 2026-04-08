echo "Bajando conteendor..."
docker compose down

echo "Construyendo nuevocontenedor..."
docker compose up -d --build

echo "Contenedores arriba..."
docker ps