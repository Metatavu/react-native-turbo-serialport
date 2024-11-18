"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LINKING_ERROR = void 0;
var _reactNative = require("react-native");
const LINKING_ERROR = exports.LINKING_ERROR = `The package 'react-native-turbo-sensors' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- Not supported for iOS'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
//# sourceMappingURL=errors.js.map