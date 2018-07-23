FROM node:10.7.0
ENV NODE_ENV dev
WORKDIR /
COPY . .
RUN npm install -g yarn swagger nodemon babel-cli
RUN yarn install
EXPOSE 2333 2334 2335 3000
RUN echo "Dockerfile successfully built"