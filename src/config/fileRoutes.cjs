const { resolve } = require('path')
const express = require('express')

const uploadPath = resolve(process.cwd(), 'uploads')

module.exports = express.static(uploadPath)
