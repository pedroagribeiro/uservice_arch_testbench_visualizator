FROM ubuntu:18.04

# Install necessary packages
RUN apt update && apt -y upgrade
RUN apt install nodejs

# Create folder for the project
RUN mkdir /app

# Copy app folder
COPY  build /app/.

# Set workdir
WORKDIR /app

# Install serve
RUN npm install -g serve

# Run the app
ENTRYPOINT [ "serve", "-s", "build" ]
