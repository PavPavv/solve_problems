var obj = {
  name: 'Pav',
};

function getName() {
  return this.name;
}

var test = getName.bind(obj);

Function.prototype.myBind = function (o) {
  var self = this;
  return self.call(o);
};

var test1 = getName.myBind(obj);

console.log(test());
console.log(test1);
