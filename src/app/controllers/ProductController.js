import * as Yup from 'yup';
import Product from '../models/Product.js';
import Category from '../models/Category.js';

class ProductController {
  async store(request, response) {
    const schema = Yup.object({
      name: Yup.string().required(),
      price: Yup.number().required(),
      category_id: Yup.number().required(),
      offer: Yup.boolean(),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    if (!request.file) {
      return response.status(400).json({ error: 'Imagem é obrigatória.' });
    }

    const { name, price, category_id, offer } = request.body;
const { filename } = request.file;

const product = await Product.create({
  name,
  price,
  category_id,
  offer,        // ✅ estava faltando
  path: filename, // ✅ provavelmente o campo é "path" no model
});

return response.status(201).json(product); // ✅ era "newProduct" (inexistente)

  async update(request, response) {
    const schema = Yup.object({
      name: Yup.string(),
      price: Yup.number(),
      category_id: Yup.number(),
      offer: Yup.boolean(),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { name, price, category_id, offer } = request.body;
    const { id } = request.params;

    let newPath;
    if (request.file) {
      const { filename } = request.file;
      newPath = filename;  // ← só o nome do arquivo
    }

    await Product.update(
      { name, price, category_id, path: newPath, offer },
      { where: { id } }
    );

    return response.status(200).json({ message: 'Produto atualizado' });
  }

  async index(_request, response) {
    const products = await Product.findAll({
      include: {
        model: Category,
        as: 'category',
        attributes: ['id', 'name'],
      },
    });

    return response.status(200).json(products);
  }
}

export default new ProductController();
