const { resolve } = require('node:path');
const express = require('express');

const uploadPath = resolve(process.cwd(), 'uploads');

const fileRouteConfig = express.static(uploadPath);

module.exports = fileRouteConfig;
