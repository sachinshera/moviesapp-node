"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _app = _interop_require_default(require("./app"));
const _authroute = _interop_require_default(require("./routes/auth.route"));
const _indexroute = _interop_require_default(require("./routes/index.route"));
const _usersroute = _interop_require_default(require("./routes/users.route"));
const _loginroutes = _interop_require_default(require("./routes/login.routes"));
const _validateEnv = _interop_require_default(require("./utils/validateEnv"));
const _videosroutes = _interop_require_default(require("./routes/videos/videos.routes"));
const _videossourceroutes = _interop_require_default(require("./routes/videos/videos.source.routes"));
const _videosthumnailroutes = _interop_require_default(require("./routes/videos/videos.thumnail.routes"));
const _moviesroutes = _interop_require_default(require("./routes/movies/movies.routes"));
const _moviesbannerroutes = _interop_require_default(require("./routes/movies/movies.banner.routes"));
const _seriesroutes = _interop_require_default(require("./routes/series/series.routes"));
const _seriesseasonroutes = _interop_require_default(require("./routes/series/series.season.routes"));
const _seriesseasonvideoroutes = _interop_require_default(require("./routes/series/series.season.video.routes"));
const _categoryroutes = _interop_require_default(require("./routes/category.routes"));
const _genresroutes = _interop_require_default(require("./routes/genres/genres.routes"));
const _trailerroutes = _interop_require_default(require("./routes/trailer/trailer.routes"));
const _searchroutes = _interop_require_default(require("./routes/search/search.routes"));
const _genrsassocroutes = _interop_require_default(require("./routes/genres/genrs.assoc.routes"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
(0, _validateEnv.default)();
const app = new _app.default([
    new _indexroute.default(),
    new _loginroutes.default(),
    new _videosroutes.default(),
    new _videossourceroutes.default(),
    new _authroute.default(),
    new _usersroute.default(),
    new _videosthumnailroutes.default(),
    new _moviesbannerroutes.default(),
    new _moviesroutes.default(),
    new _seriesseasonvideoroutes.default(),
    new _seriesseasonroutes.default(),
    new _seriesroutes.default(),
    new _categoryroutes.default(),
    new _genrsassocroutes.default(),
    new _genresroutes.default(),
    new _trailerroutes.default(),
    new _searchroutes.default()
]);
app.listen();

//# sourceMappingURL=server.js.map