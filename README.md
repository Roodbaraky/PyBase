# PyBase

## Prerequisites
- Python >= 3.8
- Node >= 18.19.1
- Npm >= 9.2.0 *(or equivalent package manager)*

## Instructions

### To Run the FastAPI Development Mode
Ensure you're in the ./server directory.

For Linux:

    pip install -r requirements.txt
    fastapi dev main.py

For Windows:

    pip install -r requirements_windows.txt
    fastapi dev main.py


### To Run React + Vite Development Mode (frontend)
- Navigate to the ./client directory: 
  - `cd client`
- Install dependencies:
  - `npm install`
- Run the development server:
  - `npm run dev`


## MVP
- live chat
- one-to-one
- group chat
- login / auth
- signup (w/ email verification)

## Stretch goals
- file sharing
- screen sharing
- audio calls