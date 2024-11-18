"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Device = void 0;
var _TurboSerialport = require("./TurboSerialport");
var _types = require("./types");
class Device {
  #isSupported;
  #deviceId;
  #deviceName;
  #deviceClass;
  #deviceSubclass;
  #deviceProtocol;
  #vendorId;
  #productId;
  #manufacturerName;
  #productName;
  #serialNumber;
  #interfaceCount;
  constructor(data) {
    this.#isSupported = data.isSupported ?? false;
    this.#deviceId = data.deviceId ?? 0;
    this.#deviceName = data.deviceName ?? '';
    this.#deviceClass = data.deviceClass ?? 0;
    this.#deviceSubclass = data.deviceSubclass ?? 0;
    this.#deviceProtocol = data.deviceProtocol ?? 0;
    this.#vendorId = data.vendorId ?? 0;
    this.#productId = data.productId ?? 0;
    this.#manufacturerName = data.manufacturerName ?? '';
    this.#productName = data.productName ?? '';
    this.#serialNumber = data.serialNumber ?? '';
    this.#interfaceCount = data.interfaceCount ?? 0;
  }
  get isSupported() {
    return this.#isSupported;
  }
  get deviceId() {
    return this.#deviceId;
  }
  get deviceName() {
    return this.#deviceName;
  }
  get deviceClass() {
    return this.#deviceClass;
  }
  get deviceSubclass() {
    return this.#deviceSubclass;
  }
  get deviceProtocol() {
    return this.#deviceProtocol;
  }
  get vendorId() {
    return this.#vendorId;
  }
  get productId() {
    return this.#productId;
  }
  get manufacturerName() {
    return this.#manufacturerName;
  }
  get productName() {
    return this.#productName;
  }
  get serialNumber() {
    return this.#serialNumber;
  }
  get interfaceCount() {
    return this.#interfaceCount;
  }
  setParams = params => {
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
    _TurboSerialport.TurboSerialport.setParams(this.#deviceId, driver, portInterface, returnedDataType, baudRate, dataBit, stopBit, parity, flowControl);
  };
  connect = () => {
    _TurboSerialport.TurboSerialport.connect(this.#deviceId);
  };
  disconnect = () => {
    _TurboSerialport.TurboSerialport.disconnect(this.#deviceId);
  };
  isConnected = () => {
    return _TurboSerialport.TurboSerialport.isConnected(this.#deviceId);
  };
  writeBytes = (message, portInterface) => {
    _TurboSerialport.TurboSerialport.writeBytes(this.#deviceId, portInterface ?? 0, message);
  };
  writeString = (message, portInterface) => {
    _TurboSerialport.TurboSerialport.writeString(this.#deviceId, portInterface ?? 0, message);
  };
  writeBase64 = (message, portInterface) => {
    _TurboSerialport.TurboSerialport.writeBase64(this.#deviceId, portInterface ?? 0, message);
  };
  writeHexString = (message, portInterface) => {
    _TurboSerialport.TurboSerialport.writeHexString(this.#deviceId, portInterface ?? 0, message);
  };
}
exports.Device = Device;
//# sourceMappingURL=Device.js.map