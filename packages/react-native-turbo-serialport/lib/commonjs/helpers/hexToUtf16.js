"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hexToUtf16 = void 0;
const hexToUtf16 = hex => {
  let str = '';
  const radix = 16;
  if (hex) {
    for (let i = 0; i < hex.length && hex.substring(i, 2) !== '00'; i += 2) {
      str += String.fromCharCode(parseInt(hex.substring(i, 2), radix));
    }
  }
  return str;
};
exports.hexToUtf16 = hexToUtf16;
//# sourceMappingURL=hexToUtf16.js.map