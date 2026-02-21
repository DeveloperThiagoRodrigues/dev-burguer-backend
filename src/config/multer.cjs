const multer = require('multer');
const path = require('path');
const { v4 } = require('uuid');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(process.cwd(), 'uploads'), // ← usa process.cwd() = /app
        filename: (_request, file, callback) => {
            const uniqueName = v4().concat(`-${file.originalname}`);
            return callback(null, uniqueName);
        }
    }),
};
