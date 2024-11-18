export const intArrayToUtf16 = intArray => {
  let str = '';
  if (Array.isArray(intArray)) {
    for (let i = 0; i < intArray.length; i++) {
      str += String.fromCharCode(intArray[i]);
    }
  }
  return str;
};
//# sourceMappingURL=intArrayToUtf16.js.map