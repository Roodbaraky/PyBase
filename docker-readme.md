# Dockerising the Application

## Containers

1. Database (Postgres)
2. Backend (FastAPI/Gunicorn)
3. Frontend (React)
4. Pub/Sub (Redict(?))
5. Reverse Proxy (Nginx)
6. DB Admin (Pgadmin4)

## Database

* Need a way to do the initial setup of the application, which will effectively be running the migrations. Alternatively, could build this into CI and build a new docker image with the migrations built in. New image every push, that way if there's a change, all you'd need to do is update the image and reboot the containers.

## Backend 

## Frontend

## Pub/Sub

Opting to use pub/sub type application to handle most of the message storage. Redis is not open source, Redict could be a good alternative.

## Reverse Proxy

* Using Nginx is standard, very easy to configure.
* Use LetsEncrypt to generate SSL certificates on the fly for HTTPS.

## DB Admin

* Pgadmin4 for database management, could omit this for the PROD environment, or instead, only allow local network access to the interface.
* Very useful while developing, less useful in production.