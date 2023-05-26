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
const _searchcontroller = require("../../controllers/search/search.controller");
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
let SearchRoutes = class SearchRoutes {
    initializeRoutes() {
        this.router.get(`${this.path}/:query`, _searchcontroller.SearchController.search);
    }
    constructor(){
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "path", '/search');
        this.initializeRoutes();
    }
};
const _default = SearchRoutes;

//# sourceMappingURL=search.routes.js.map