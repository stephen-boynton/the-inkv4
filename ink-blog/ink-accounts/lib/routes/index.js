const fs = require("fs");
const routePath = `${__dirname}/handlers/`;

exports.register = (server, options) => {
  let routes = [];

  fs.readdirSync(routePath).forEach(file => {
    routes = routes.concat(require(`${routePath}/${file}`));
  });

  server.route(routes);
};

exports.name = "paths";
