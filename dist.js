"use strict";

var _, _obj$a, _obj$a$b;

var a = (_ = 3) !== null && _ !== void 0 ? _ : 5;
var obj = {
  a: {
    b: {
      c: 12
    }
  }
};

if (obj.a && obj.a.b && obj.a.b.c) {
  console.log(obj.a.b.c);
}

console.log(obj === null || obj === void 0 ? void 0 : (_obj$a = obj.a) === null || _obj$a === void 0 ? void 0 : (_obj$a$b = _obj$a.b) === null || _obj$a$b === void 0 ? void 0 : _obj$a$b.c);
