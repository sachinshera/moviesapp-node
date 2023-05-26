"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return GenresService;
    }
});
const _genresmodel = require("../../models/genres/genres.model");
const _nanoid = require("nanoid");
let GenresService = class GenresService {
    static async createGenres(name) {
        const genresExists = await _genresmodel.GenresModel.findOne({
            where: {
                name
            }
        });
        if (genresExists) {
            throw new Error('Genres already exists');
        }
        const genres = new _genresmodel.GenresModel();
        genres.id = (0, _nanoid.nanoid)(20);
        genres.name = name;
        await genres.save();
        return genres;
    }
    static async getAllGenres() {
        return await _genresmodel.GenresModel.findAll();
    }
    static async getGenresById(id) {
        return await _genresmodel.GenresModel.findOne({
            where: {
                id
            }
        });
    }
    static async updateGenres(id, name) {
        try {
            const genresExists = await _genresmodel.GenresModel.findOne({
                where: {
                    name
                }
            });
            if (genresExists) {
                throw new Error('Genres already exists');
            }
            await _genresmodel.GenresModel.update({
                name
            }, {
                where: {
                    id
                }
            });
            return await _genresmodel.GenresModel.findOne({
                where: {
                    id
                }
            });
        } catch (err) {
            throw new Error(err);
        }
    }
    static async deleteGenres(id) {
        const genres = await _genresmodel.GenresModel.findOne({
            where: {
                id
            }
        });
        if (genres) {
            await genres.destroy();
            return true;
        }
        return false;
    }
};

//# sourceMappingURL=genres.service.js.map