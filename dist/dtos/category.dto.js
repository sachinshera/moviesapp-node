"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    categoryDto: function() {
        return categoryDto;
    },
    addCateAssoc: function() {
        return addCateAssoc;
    }
});
const _classvalidator = require("class-validator");
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
var __decorate = (void 0) && (void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (void 0) && (void 0).__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let categoryDto = class categoryDto {
    constructor(){
        _define_property(this, "name", void 0);
    }
};
__decorate([
    (0, _classvalidator.IsString)(),
    __metadata("design:type", String)
], categoryDto.prototype, "name", void 0);
let addCateAssoc = class addCateAssoc {
    constructor(){
        _define_property(this, "series_movie_id", void 0);
        _define_property(this, "type", void 0);
        _define_property(this, "status", void 0);
        _define_property(this, "categoryId", void 0);
    }
};
__decorate([
    (0, _classvalidator.IsString)(),
    __metadata("design:type", String)
], addCateAssoc.prototype, "series_movie_id", void 0);
__decorate([
    (0, _classvalidator.IsString)(),
    __metadata("design:type", String)
], addCateAssoc.prototype, "type", void 0);
__decorate([
    (0, _classvalidator.IsOptional)(),
    __metadata("design:type", Boolean)
], addCateAssoc.prototype, "status", void 0);
__decorate([
    (0, _classvalidator.IsString)(),
    __metadata("design:type", String)
], addCateAssoc.prototype, "categoryId", void 0);

//# sourceMappingURL=category.dto.js.map