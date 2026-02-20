const multer = require('multer');
const { resolve } = require('node:path');
const { v4 } = require('uuid');

module.exports = {
    app.use(
  '/product-file',
  express.static(path.resolve(__dirname, '..', 'uploads/products'))
);

app.use(
  '/category-file',
  express.static(path.resolve(__dirname, '..', 'uploads/categories'))
);
        filename: (_request, file, callback) => {
            const uniqueName = v4().concat(`-${file.originalname}`);
            return callback(null, uniqueName);
        }
    }),
};
