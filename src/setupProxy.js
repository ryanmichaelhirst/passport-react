const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(proxy('/auth', { target: 'http://localhost:5000/' }));
};

