FROM node:lts-alpine

EXPOSE 3000

WORKDIR /opt/cogna/sag/app

COPY . .

RUN  yarn install \
     && yarn build \
     && rm -rf yarn cache dir \
     && rm -rf /root/.cache

CMD ["yarn", "start"]
