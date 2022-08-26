#!/bin/sh
docker build -t circsay .
docker run --rm -p 80:80 circsay
