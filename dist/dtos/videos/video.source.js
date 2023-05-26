"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addVideosSourceDto", {
    enumerable: true,
    get: function() {
        return addVideosSourceDto;
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
let addVideosSourceDto = class addVideosSourceDto {
    constructor(){
        _define_property(this, "videos_id", void 0);
        _define_property(this, "source", void 0);
        _define_property(this, "status", void 0);
    }
};
__decorate([
    (0, _classvalidator.IsString)(),
    __metadata("design:type", String)
], addVideosSourceDto.prototype, "videos_id", void 0);
__decorate([
    (0, _classvalidator.IsUrl)(),
    __metadata("design:type", String)
], addVideosSourceDto.prototype, "source", void 0);
__decorate([
    (0, _classvalidator.IsString)(),
    __metadata("design:type", String)
], addVideosSourceDto.prototype, "status", void 0);

//# sourceMappingURL=video.source.js.map