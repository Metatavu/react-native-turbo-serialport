"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSerialport = initSerialport;
var _TurboSerialport = require("./TurboSerialport");
var _types = require("./types");
function initSerialport(consfig) {
  const {
    autoConnect,
    mode,
    params
  } = consfig || {};
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
  _TurboSerialport.TurboSerialport.init(autoConnect ?? false, mode ?? _types.Mode.ASYNC, driver, portInterface, returnedDataType, baudRate, dataBit, stopBit, parity, flowControl);
}
//# sourceMappingURL=initSerialport.js.map