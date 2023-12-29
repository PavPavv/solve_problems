Array.prototype.myForEach = function (cb) {
  for (var i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

[1, 2, 3].myForEach((e, i, a) => {
  console.log({ e, i, a });
});
