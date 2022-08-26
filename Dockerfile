FROM node
WORKDIR /app
ADD . /app
RUN npm i
RUN apt-get update -y
RUN apt-get install -y cowsay fortune
CMD node .
