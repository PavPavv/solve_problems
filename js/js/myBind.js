var obj = {
  name: 'Pav',
};

function getName() {
  return this.name;
}

var test = getName.bind(obj);

Function.prototype.myCall = function (o) {
  o = new Object(o);
  o.t = this;
  const res = o.t();
  delete o.t;
  return res;
};

Function.prototype.myBind = function (o) {
  var self = this;
  return self.myCall(o);
};

var test1 = getName.myBind(obj);

console.log(test());
console.log(test1);
