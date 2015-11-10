var normal = require('./distributions/normal.js');
var uniform = require('./distributions/uniform.js');
var studentt = require('./distributions/studentt.js');

var distributions = [normal, uniform, studentt];

for (var i = 0, l = distributions.length; i < l; i++) {
  var fns = distributions[i];
  var keys = Object.keys(fns);

  for (var n = 0, r = keys.length; n < r; n++) {
    exports[ keys[n] ] = fns[keys[n]];
  }
}
