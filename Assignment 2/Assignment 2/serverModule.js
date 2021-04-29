var definedPaths = [];

class Request {
  constructor(verb, route) {
    this.verb = verb;
    this.route = route;
  }
}

module.exports.get = function(route, fn) {
  definedPaths.push({
    req: new Request("GET", route),
    fn: fn
  });
};

function func(req) {

}

module.exports.testRoutes = function() {
  definedPaths[0].fn(definedPaths[0].req);
};
