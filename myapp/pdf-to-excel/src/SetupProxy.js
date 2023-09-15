// src/setupProxy.js
// const { createProxyMiddleware } = require('http-proxy-middleware');
import {createProxyMiddleware}from 'http-proxy-middleware';

module.exports = function (app) {
  app.use(
    '/', // Specify the API endpoint to proxy
    createProxyMiddleware({
      target: 'http://localhost:8000', // The address of your Express server
      changeOrigin: true,
    })
  );
};