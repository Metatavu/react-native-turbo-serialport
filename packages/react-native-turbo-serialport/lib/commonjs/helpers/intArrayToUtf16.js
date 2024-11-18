"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intArrayToUtf16 = void 0;
const intArrayToUtf16 = intArray => {
  let str = '';
  if (Array.isArray(intArray)) {
    for (let i = 0; i < intArray.length; i++) {
      str += String.fromCharCode(intArray[i]);
    }
  }
  return str;
};
exports.intArrayToUtf16 = intArrayToUtf16;
//# sourceMappingURL=intArrayToUtf16.js.map