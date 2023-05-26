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
    AddThumnnailDto: function() {
        return AddThumnnailDto;
    },
    UpdateThumnnailDto: function() {
        return UpdateThumnnailDto;
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
let AddThumnnailDto = class AddThumnnailDto {
    constructor(){
        _define_property(this, "video_id", void 0);
        _define_property(this, "thumbnail", void 0);
        _define_property(this, "quality", void 0);
        _define_property(this, "language", void 0);
    }
};
__decorate([
    (0, _classvalidator.IsString)(),
    __metadata("design:type", String)
], AddThumnnailDto.prototype, "video_id", void 0);
__decorate([
    (0, _classvalidator.IsUrl)(),
    __metadata("design:type", String)
], AddThumnnailDto.prototype, "thumbnail", void 0);
__decorate([
    (0, _classvalidator.IsString)(),
    __metadata("design:type", String)
], AddThumnnailDto.prototype, "quality", void 0);
__decorate([
    (0, _classvalidator.IsString)(),
    __metadata("design:type", String)
], AddThumnnailDto.prototype, "language", void 0);
let UpdateThumnnailDto = class UpdateThumnnailDto {
    constructor(){
        _define_property(this, "video_id", void 0);
        _define_property(this, "thumbnail", void 0);
        _define_property(this, "quality", void 0);
        _define_property(this, "language", void 0);
    }
};
__decorate([
    (0, _classvalidator.IsString)(),
    __metadata("design:type", String)
], UpdateThumnnailDto.prototype, "video_id", void 0);
__decorate([
    (0, _classvalidator.IsUrl)(),
    __metadata("design:type", String)
], UpdateThumnnailDto.prototype, "thumbnail", void 0);
__decorate([
    (0, _classvalidator.IsString)(),
    __metadata("design:type", String)
], UpdateThumnnailDto.prototype, "quality", void 0);
__decorate([
    (0, _classvalidator.IsString)(),
    __metadata("design:type", String)
], UpdateThumnnailDto.prototype, "language", void 0);

//# sourceMappingURL=videos.thumbnail.dto.js.map