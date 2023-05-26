"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _categorycontroller = _interop_require_default(require("../controllers/category.controller"));
const _categorydto = require("../dtos/category.dto");
const _authmiddleware = _interop_require_default(require("../middlewares/auth.middleware"));
const _validationmiddleware = _interop_require_default(require("../middlewares/validation.middleware"));
const _express = require("express");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let CategoryRoutes = class CategoryRoutes {
    initializeRoutes() {
        this.router.post(`${this.path}/Assoc`, _authmiddleware.default, (0, _validationmiddleware.default)(_categorydto.addCateAssoc, 'body'), _categorycontroller.default.AddAssoc);
        this.router.put(`${this.path}/Assoc`, _authmiddleware.default, (0, _validationmiddleware.default)(_categorydto.addCateAssoc, 'body'), _categorycontroller.default.updateAssoc);
        this.router.get(`${this.path}/Assoc`, _categorycontroller.default.getAllAssoc);
        this.router.delete(`${this.path}/Assoc/:id`, _authmiddleware.default, _categorycontroller.default.deleteAssoc);
        this.router.post(`${this.path}`, _authmiddleware.default, (0, _validationmiddleware.default)(_categorydto.categoryDto, 'body'), _categorycontroller.default.createCategory);
        this.router.get(`${this.path}`, _categorycontroller.default.getAllCategories);
        this.router.get(`${this.path}/:id`, _authmiddleware.default, _categorycontroller.default.getCategoryById);
        this.router.delete(`${this.path}/:id`, _authmiddleware.default, _categorycontroller.default.deleteCategory);
        this.router.put(`${this.path}/:id`, _authmiddleware.default, (0, _validationmiddleware.default)(_categorydto.categoryDto, 'body', true), _categorycontroller.default.updateCategory);
    }
    constructor(){
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "path", '/category');
        this.initializeRoutes();
    }
};
const _default = CategoryRoutes;

//# sourceMappingURL=category.routes.js.map