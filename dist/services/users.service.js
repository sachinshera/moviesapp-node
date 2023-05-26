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
const _bcrypt = require("bcrypt");
const _databases = _interop_require_default(require("../databases"));
const _HttpException = require("../exceptions/HttpException");
const _util = require("../utils/util");
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
let UserService = class UserService {
    async findAllUser() {
        const allUser = await this.users.findAll();
        return allUser;
    }
    async findUserById(userId) {
        if ((0, _util.isEmpty)(userId)) throw new _HttpException.HttpException(400, 'UserId is empty');
        const findUser = await this.users.findByPk(userId);
        if (!findUser) throw new _HttpException.HttpException(409, "User doesn't exist");
        return findUser;
    }
    async createUser(userData) {
        if ((0, _util.isEmpty)(userData)) throw new _HttpException.HttpException(400, 'userData is empty');
        const findUser = await this.users.findOne({
            where: {
                email: userData.email
            }
        });
        if (findUser) throw new _HttpException.HttpException(409, `This email ${userData.email} already exists`);
        const hashedPassword = await (0, _bcrypt.hash)(userData.password, 10);
        const createUserData = await this.users.create(_object_spread_props(_object_spread({}, userData), {
            password: hashedPassword
        }));
        return createUserData;
    }
    async updateUser(userId, userData) {
        if ((0, _util.isEmpty)(userData)) throw new _HttpException.HttpException(400, 'userData is empty');
        const findUser = await this.users.findByPk(userId);
        if (!findUser) throw new _HttpException.HttpException(409, "User doesn't exist");
        const hashedPassword = await (0, _bcrypt.hash)(userData.password, 10);
        await this.users.update(_object_spread_props(_object_spread({}, userData), {
            password: hashedPassword
        }), {
            where: {
                id: userId
            }
        });
        const updateUser = await this.users.findByPk(userId);
        return updateUser;
    }
    async deleteUser(userId) {
        if ((0, _util.isEmpty)(userId)) throw new _HttpException.HttpException(400, "User doesn't existId");
        const findUser = await this.users.findByPk(userId);
        if (!findUser) throw new _HttpException.HttpException(409, "User doesn't exist");
        await this.users.destroy({
            where: {
                id: userId
            }
        });
        return findUser;
    }
    constructor(){
        _define_property(this, "users", _databases.default.Users);
    }
};
const _default = UserService;

//# sourceMappingURL=users.service.js.map