# CO2e calculator client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup and configuration

The values for the API host url and the API Token (needed for authorization) are defined in the file `.env`.

** Important **
Storing secrets like the API Token in this `.env` file should not be done in production, as these values will be compiled into the final javascript bundle and therefore will be accessible through the browser.

For local development, you can use an alternative file called `.env.local`. The variables defined here will override those in the `.env` file.

### Install dependencies

```bash
$ npm install
```

## Start the app

```bash
$ npm start
```

Navigate to `http://localhost:3000/`.

## Show footprint data

You can select a route and calculate the footprint for different vehicles under `http://localhost:3000`.

## Author

David Unzué  
[davidunzue.com](https://davidunzue.com)
