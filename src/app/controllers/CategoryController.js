import * as Yup from 'yup';
import Category from '../models/Category.js';

class CategoryController {
  async store(request, response) {
    const schema = Yup.object({
      name: Yup.string().required(),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    if (!request.file) {
      return response.status(400).json({ error: 'Imagem é obrigatória.' });
    }

    const { name } = request.body;
    const { filename } = request.file;

    const existingCategory = await Category.findOne({ where: { name } });

    if (existingCategory) {
      return response.status(400).json({ error: 'A categoria já existe.' });
    }

    const newCategory = await Category.create({
      name,
      path: filename,  // ← só o nome do arquivo
    });

    return response.status(201).json(newCategory);
  }

  async update(request, response) {
    const schema = Yup.object({
      name: Yup.string(),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { id } = request.params;
    const { name } = request.body;
    const category = await Category.findByPk(id);

    if (!category) {
      return response.status(404).json({ error: 'Categoria não encontrada.' });
    }

    let newPath = category.path;
    if (request.file) {
      const { filename } = request.file;
      newPath = filename;  // ← só o nome do arquivo
    }

    await category.update({
      name: name ?? category.name,
      path: newPath,
    });

    return response.status(200).json(category);
  }

  async index(_request, response) {
    const categories = await Category.findAll();
    return response.status(200).json(categories);
  }
}

export default new CategoryController();
