#!/bin/bash
cd kano
# Create the archive to be merged 
tar cvf kano.tgz -C ../../configs/kano .
# Build the image
docker build --pull --force-rm --build-arg TAG=$KANO_TAG --build-arg SUBDOMAIN --build-arg NODE_APP_INSTANCE --build-arg NODE_ENV -f dockerfile -t localhost:5000/kano:$KANO_TAG .
docker push localhost:5000/kano:$KANO_TAG
