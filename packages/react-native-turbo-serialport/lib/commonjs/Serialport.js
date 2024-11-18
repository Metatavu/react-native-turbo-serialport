"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Serialport = void 0;
var _reactNative = require("react-native");
var _Device = require("./Device");
var _TurboSerialport = require("./TurboSerialport");
var _types = require("./types");
class Serialport {
  #subscription;
  setParams = (params, deviceId) => {
    const {
      driver = _types.DriverType.AUTO,
      portInterface = -1,
      returnedDataType = _types.ReturnedDataType.UTF8,
      baudRate = 9600,
      dataBit = _types.DataBit.DATA_BITS_8,
      stopBit = _types.StopBit.STOP_BITS_1,
      parity = _types.Parity.PARITY_NONE,
      flowControl = _types.FlowControl.FLOW_CONTROL_OFF
    } = params || {};
    _TurboSerialport.TurboSerialport.setParams(deviceId ?? -1, driver, portInterface, returnedDataType, baudRate, dataBit, stopBit, parity, flowControl);
  };
  startListening = listener => {
    const eventEmitter = new _reactNative.NativeEventEmitter(_TurboSerialport.TurboSerialport);
    this.#subscription = eventEmitter.addListener(`serialportEvent`, params => {
      listener(params);
    });
  };
  stopListening = () => {
    this.#subscription?.remove();
  };
  listDevices = () => {
    return _TurboSerialport.TurboSerialport.listDevices().then(devices => {
      return devices.map(device => new _Device.Device(device));
    });
  };
  connect = deviceId => {
    _TurboSerialport.TurboSerialport.connect(deviceId ?? -1);
  };
  disconnect = deviceId => {
    _TurboSerialport.TurboSerialport.disconnect(deviceId ?? -1);
  };
  isConnected = deviceId => {
    return _TurboSerialport.TurboSerialport.isConnected(deviceId ?? -1);
  };
  isServiceStarted = () => {
    return _TurboSerialport.TurboSerialport.isServiceStarted();
  };
  writeBytes = (message, deviceId, portInterface) => {
    _TurboSerialport.TurboSerialport.writeBytes(deviceId ?? -1, portInterface ?? 0, message);
  };
  writeString = (message, deviceId, portInterface) => {
    _TurboSerialport.TurboSerialport.writeString(deviceId ?? -1, portInterface ?? 0, message);
  };
  writeBase64 = (message, deviceId, portInterface) => {
    _TurboSerialport.TurboSerialport.writeBase64(deviceId ?? -1, portInterface ?? 0, message);
  };
  writeHexString = (message, deviceId, portInterface) => {
    _TurboSerialport.TurboSerialport.writeHexString(deviceId ?? -1, portInterface ?? 0, message);
  };
}
exports.Serialport = Serialport;
//# sourceMappingURL=Serialport.js.map