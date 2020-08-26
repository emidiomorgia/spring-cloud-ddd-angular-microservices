docker login --username=%DOCKER_HUB_USERNAME% --password=%DOCKER_HUB_PASSWORD%
docker build -t emidio78/counters-service .
docker push emidio78/counters-service