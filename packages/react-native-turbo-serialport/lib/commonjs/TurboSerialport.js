"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TurboSerialport = void 0;
var _reactNative = require("react-native");
var _errors = require("./errors");
// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;
const TurboSerialportModule = isTurboModuleEnabled ? require('./NativeTurboSerialport').default : _reactNative.NativeModules.TurboSerialport;
const TurboSerialport = exports.TurboSerialport = _reactNative.Platform.OS === 'android' && TurboSerialportModule ? TurboSerialportModule : new Proxy({}, {
  get() {
    throw new Error(_errors.LINKING_ERROR);
  }
});
//# sourceMappingURL=TurboSerialport.js.map