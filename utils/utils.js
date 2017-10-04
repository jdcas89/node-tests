module.exports.add = (a, b) => {
  return a + b
}

module.exports.asyncAdd  = (a, b, callback) => {
  setTimeout(function() {
    callback(a + b)
  }, 1000);
}

module.exports.square = (a) => {
  return a  * a
}

module.exports.asyncSquare  = (a, callback) => {
  setTimeout(function() {
    callback(a * a)
  }, 1000);
}


module.exports.setName = (user, fullName) => {
  var names = fullName.split(' ')
  user.firstName = names[0]
  user.lastName = names[1]
  return user
};