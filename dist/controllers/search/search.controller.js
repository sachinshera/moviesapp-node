"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SearchController", {
    enumerable: true,
    get: function() {
        return SearchController;
    }
});
const _searchservice = _interop_require_default(require("../../services/search/search.service"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let SearchController = class SearchController {
    static async search(req, res) {
        let query = req.params.query;
        try {
            let search = await _searchservice.default.search(query);
            res.status(200).send(search);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
};

//# sourceMappingURL=search.controller.js.map