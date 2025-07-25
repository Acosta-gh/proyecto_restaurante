const { Categoria } = require('../models');

// Obtener todas las categorías
exports.getAllCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.findAll();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las categorías', error });
    }
};

// Obtener una categoría por ID
exports.getCategoriaById = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);
        if (!categoria) return res.status(404).json({ message: 'Categoría no encontrada' });
        res.json(categoria);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la categoría', error });
    }
};

// Crear una nueva categoría
exports.createCategoria = async (req, res) => {
    try {
        const nuevaCategoria = await Categoria.create(req.body);
        res.status(201).json(nuevaCategoria);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear la categoría', error });
    }
};

// Actualizar una categoría
exports.updateCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);
        if (!categoria) return res.status(404).json({ message: 'Categoría no encontrada' });
        await categoria.update(req.body);
        res.json(categoria);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar la categoría', error });
    }
};

// Eliminar una categoría
exports.deleteCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);
        if (!categoria) return res.status(404).json({ message: 'Categoría no encontrada' });
        await categoria.destroy();
        res.json({ message: 'Categoría eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la categoría', error });
    }
};