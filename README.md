# Inventory Management App

This repository contains the client and server components of the Inventory Management App.

## Prerequisites

To run this application, you'll need the following tools installed on your system:

- [Docker](https://www.docker.com/get-started/)

## Getting Started

Follow these steps to clone and run the application:

1. Clone the repositories into a single directory:

`git clone https://github.com/yatochkaaa/dzencode_inventory-server.git`  
`git clone https://github.com/yatochkaaa/dzencode_inventory.git`

2. Open a terminal and navigate to the dzencode_inventory directory:

`cd dzencode_inventory`

3. Start the application using Docker Compose:

`docker-compose up`

This command will build and run the containers necessary for both the client and the server components. Make sure Docker is running on your machine before executing this command.

4. Once the containers are up and running, open your web browser and access the application at http://localhost.

## Stopping the Application

To stop the application and terminate the Docker containers, press Ctrl+C in the terminal where the docker-compose up command was executed. This will gracefully shut down the containers.

## Notes

The client application will be available at http://localhost, and the server will be accessible at http://localhost:3001.
