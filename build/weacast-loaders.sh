#!/bin/bash
for WEACAST_MODEL in $WEACAST_MODELS; do
  WEACAST_LOADER_TAG_NAME=${WEACAST_MODEL^^}_LOADER_TAG
  WEACAST_LOADER_TAG_NAME=${WEACAST_LOADER_TAG_NAME//-/_}
  WEACAST_LOADER_TAG=${!WEACAST_LOADER_TAG_NAME}
  GIT_URL=https://github.com/weacast/weacast-loader.git
  GIT_BRANCH=$WEACAST_LOADER_TAG
  if [ "$GIT_BRANCH" != "latest" ]; then
    GIT_URL=$GIT_URL#$GIT_BRANCH
  fi
  docker build --pull --force-rm --build-arg TAG=$WEACAST_LOADER_TAG --build-arg SYNC_DB_URL="WEACAST_LOADERS_SYNC_DB_URL" -f dockerfile.$WEACAST_MODEL -t localhost:5000/$WEACAST_MODEL-loader:$WEACAST_LOADER_TAG $GIT_URL
  docker push localhost:5000/$WEACAST_MODEL-loader:$WEACAST_LOADER_TAG
done
