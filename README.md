# CRA-RisingStack-Docker-GraphQL
Build CRA, RisingStack, Docker, and GraphQL setup from scratch

# Getting Started
- After cloning the repo, run the commands below in the project directory to authorize bash to run the scripts
    `chmod -x docker_bash.sh`
    `chmod -x docker_clean.sh`
    `chmod -x wait-for-it.sh`
- Run `docker-compose up` to start the Docker servers
- In a new terminal, run `./docker_bash.sh` to enter the node container
- Run `yarn start:web` to start the web client, and `yarn start:api` to start the api server