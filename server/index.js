const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const { createProxyMiddleware } = require('http-proxy-middleware');
const { BACKEND_API } = require('../config');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
const path = require('path');
app.use(express.static(path.join(__dirname, '..', 'build')));


const options = {
    target: BACKEND_API || "localhost:8080", // target host
    changeOrigin: true, // needed for virtual hosted sites
    ws: true, // proxy websockets
    pathRewrite: {
        '^/api': '', // rewrite path
    }
};

const backendProxy = createProxyMiddleware(options);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});


app.use('/api', backendProxy);
// Express will serve up index.html file, If it does not recognize the route
app.use('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
  });

app.listen(5000, () =>
  console.log('Express server is running on localhost:5000')
);
