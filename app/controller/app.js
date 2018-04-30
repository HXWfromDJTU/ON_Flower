exports.index = function* (ctx) {
    yield ctx.render('app/app.js', { url: this.url.replace(/\/app/, '') });
};