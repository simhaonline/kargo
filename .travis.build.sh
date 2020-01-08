#!/bin/bash

# Build express-gateway
EXPRESS_GATEWAY_VERSION=1.16.9
cd build/express-gateway
docker build --force-rm --build-arg TAG=$EXPRESS_GATEWAY_VERSION -f dockerfile -t kalisio/express-gateway:$EXPRESS_GATEWAY_VERSION .
RESULT_CODE=$?
if [ $RESULT_CODE -ne 0 ]; then
  echo "express-gateway generation failed [error: $RESULT_CODE]"
	exit 1
fi
docker login -u="$DOCKER_USER" -p="$DOCKER_PASSWORD"
docker push kalisio/express-gateway:$EXPRESS_GATEWAY_VERSION