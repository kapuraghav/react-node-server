# React application with Node server

Bootstrapped from [Create React App](https://github.com/facebookincubator/create-react-app).

### Set Up Instructions

Note: for optimal development with hot-reloading you must run outside of Docker. Please make sure the latest nodejs is installed on your local machine. Anything > version 10.0 and 'LTS' should work.

You can download and install the latest node here https://nodejs.org/en/ .

Finally, install dependencies locally with:
```bash
npm install
```

### Configuration
By default routes backend-api calls with prefix /api to: localhost:8080
By default serves front-end on port 80

## Running on your local dev machine with webpack (for hot-reloading) and nodejs (for backend-api routing, also with hot-reload)

```bash
npm run dev [http://api-host(optional)] [port(optional)]
```

## Running as a deployed application (start just nodejs for serving the contents of the 'build' directory, without hot-reload):

```bash
npm run server [http://api-host(optional)] [port(optional)]
```

## Running locally in other modes:
#### React webpack app server only (no nodejs routing for the backend-api available):

```bash
npm start
```

#### Tests:
```
npm run test
```

