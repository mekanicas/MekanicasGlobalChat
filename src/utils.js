// utils.js
const { fileURLToPath } = require("url");
const { dirname } = require("path");

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

module.exports = __dirname;
