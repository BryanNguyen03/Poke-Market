# Poke-Market

## Project Overview

Poke-Market is a web application developed by Bryan Nguyen and Ricky Tran. It allows users to sign up/login to collect four daily Pokemon cards. Users can browse their collection of Pokemon cards and filter through them. Pokemon information is retrieved from the RESTful API, PokeAPI.

### Features

- User authentication (sign up and login)
- Daily collection of Pokemon cards
- Browse and filter your collection
- Data pulled from PokeAPI

## Setup & Installation

To get started, follow these steps:

1. **Set Up MongoDB Database**: Ensure you have set up your MongoDB database. If you haven't, you can refer to the [MongoDB Atlas documentation](https://www.mongodb.com/atlas/database).

2. **Create a `.env` File**: In the `backend` directory, create a `.env` file with the following variables:

   - `PORT`: This is the port where your backend server will be hosted. Make sure it matches the proxy setting in the `package.json` file in the `frontend` directory.
   - `MONGO_URI`: The connection URI to your MongoDB database.
   - `SECRET`: Create a string to be used in the JWT authentication process.

3. Clone the repository and install dependencies:

```bash
git clone https://github.com/BryanNguyen03/Poke-Market.git
cd Poke-Market
npm install

cd backend
npm start

cd frontend
npm start
```
