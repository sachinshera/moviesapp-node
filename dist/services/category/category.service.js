"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CategoryService;
    }
});
const _categorymodel = require("../../models/category/category.model");
const _nanoid = require("nanoid");
let CategoryService = class CategoryService {
    static async createCategory(name) {
        const categoryExists = await _categorymodel.CategoryModel.findOne({
            where: {
                name
            }
        });
        if (categoryExists) {
            throw new Error('Category already exists');
        }
        const category = new _categorymodel.CategoryModel();
        category.id = (0, _nanoid.nanoid)(20);
        category.name = name;
        await category.save();
        return category;
    }
    static async getAllCategories() {
        return await _categorymodel.CategoryModel.findAll();
    }
    static async getCategoryById(id) {
        return await _categorymodel.CategoryModel.findOne({
            where: {
                id
            }
        });
    }
    static async updateCategory(id, name) {
        try {
            const categoryExists = await _categorymodel.CategoryModel.findOne({
                where: {
                    name
                }
            });
            if (categoryExists) {
                throw new Error('Category already exists');
            }
            await _categorymodel.CategoryModel.update({
                name
            }, {
                where: {
                    id
                }
            });
            return await _categorymodel.CategoryModel.findOne({
                where: {
                    id
                }
            });
        } catch (err) {
            throw new Error(err);
        }
    }
    static async deleteCategory(id) {
        try {
            await _categorymodel.CategoryModel.destroy({
                where: {
                    id
                }
            });
            return true;
        } catch (err) {
            throw new Error(err);
        }
    }
};

//# sourceMappingURL=category.service.js.map