#!/bin/bash
set -a
. ./.env
set +a

SWARM_NETWORK=`docker network ls | grep swarm-network`
if [ "$SWARM_NETWORK" = "" ]; then
  docker network create -d overlay --attachable ${NETWORK}
fi
docker stack deploy -c tileservergl.yml -c tileservergl.swarm.yml -c mapproxy.yml -c mapproxy.swarm.yml kargo
