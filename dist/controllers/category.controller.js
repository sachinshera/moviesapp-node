"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CategoryController;
    }
});
const _categoryassocservice = _interop_require_default(require("../services/category/category.assoc.service"));
const _categoryservice = _interop_require_default(require("../services/category/category.service"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let CategoryController = class CategoryController {
    static async AddAssoc(req, res) {
        let data = req.body;
        if (data.type != 'movie' && data.type != 'series') {
            return res.status(400).json({
                message: 'invalid type!'
            });
        }
        try {
            let add = await _categoryassocservice.default.AddAssoc(data);
            res.status(200).json(add);
        } catch (e) {
            console.log('err', e);
            res.status(500).json({
                message: e.toString()
            });
        }
    }
    static async getAllAssoc(req, res) {
        let get = await _categoryassocservice.default.getAll();
        res.status(200).json(get);
    }
    static async deleteAssoc(req, res) {
        let id = req.params.id;
        try {
            let del = await _categoryassocservice.default.delete(id);
            res.status(200).json({
                message: 'deleted'
            });
        } catch (error) {
            res.status(500).json({
                message: error.toString()
            });
        }
    }
    static async updateAssoc(req, res) {
        let body = req.body;
        try {
            let update = await _categoryassocservice.default.update(body);
            res.status(200).json(update);
        } catch (error) {
            res.status(500).json({
                message: error.toString()
            });
        }
    }
    static async createCategory(req, res) {
        try {
            const { name  } = req.body;
            const category = await _categoryservice.default.createCategory(name);
            res.status(201).json(category);
        } catch (err) {
            if (err.message === 'Category already exists') {
                res.status(409).json({
                    message: err.message
                });
            } else {
                res.status(500).json({
                    message: 'Something went wrong'
                });
            }
        }
    }
    static async getAllCategories(req, res) {
        const categories = await _categoryservice.default.getAllCategories();
        res.status(200).json(categories);
    }
    static async getCategoryById(req, res) {
        const { id  } = req.params;
        const category = await _categoryservice.default.getCategoryById(id);
        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({
                message: 'Category not found'
            });
        }
    }
    static async updateCategory(req, res) {
        try {
            const { id  } = req.params;
            const { name  } = req.body;
            const category = await _categoryservice.default.updateCategory(id, name);
            res.status(200).json(category);
        } catch (err) {
            if (err.message === 'Category already exists') {
                res.status(409).json({
                    message: err.message
                });
            } else {
                res.status(500).json({
                    message: 'Something went wrong'
                });
            }
        }
    }
    static async deleteCategory(req, res) {
        try {
            const { id  } = req.params;
            await _categoryservice.default.deleteCategory(id);
            res.status(200).json({
                message: 'Category deleted'
            });
        } catch (err) {
            res.status(500).json({
                message: 'Something went wrong'
            });
        }
    }
};

//# sourceMappingURL=category.controller.js.map