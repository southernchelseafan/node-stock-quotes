#!/usr/bin/env bash

DEV_DIRECTORY="/put/your/directory/here";
cd $DEV_DIRECTORY;
docker build -t stockquotesapi .
docker-compose up
