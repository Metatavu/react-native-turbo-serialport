"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StopBit = exports.ReturnedDataType = exports.Parity = exports.Mode = exports.FlowControl = exports.DriverType = exports.DataBit = void 0;
let DriverType = exports.DriverType = /*#__PURE__*/function (DriverType) {
  DriverType["AUTO"] = "AUTO";
  DriverType["CDC"] = "cdc";
  DriverType["CH34x"] = "ch34x";
  DriverType["CP210x"] = "cp210x";
  DriverType["FTDI"] = "ftdi";
  DriverType["PL2303"] = "pl2303";
  return DriverType;
}({});
let DataBit = exports.DataBit = /*#__PURE__*/function (DataBit) {
  DataBit[DataBit["DATA_BITS_5"] = 5] = "DATA_BITS_5";
  DataBit[DataBit["DATA_BITS_6"] = 6] = "DATA_BITS_6";
  DataBit[DataBit["DATA_BITS_7"] = 7] = "DATA_BITS_7";
  DataBit[DataBit["DATA_BITS_8"] = 8] = "DATA_BITS_8";
  return DataBit;
}({});
let StopBit = exports.StopBit = /*#__PURE__*/function (StopBit) {
  StopBit[StopBit["STOP_BITS_1"] = 1] = "STOP_BITS_1";
  StopBit[StopBit["STOP_BITS_2"] = 2] = "STOP_BITS_2";
  StopBit[StopBit["STOP_BITS_15"] = 3] = "STOP_BITS_15";
  return StopBit;
}({});
let Parity = exports.Parity = /*#__PURE__*/function (Parity) {
  Parity[Parity["PARITY_NONE"] = 0] = "PARITY_NONE";
  Parity[Parity["PARITY_ODD"] = 1] = "PARITY_ODD";
  Parity[Parity["PARITY_EVEN"] = 2] = "PARITY_EVEN";
  Parity[Parity["PARITY_MARK"] = 3] = "PARITY_MARK";
  Parity[Parity["PARITY_SPACE"] = 4] = "PARITY_SPACE";
  return Parity;
}({});
let FlowControl = exports.FlowControl = /*#__PURE__*/function (FlowControl) {
  FlowControl[FlowControl["FLOW_CONTROL_OFF"] = 0] = "FLOW_CONTROL_OFF";
  FlowControl[FlowControl["FLOW_CONTROL_RTS_CTS"] = 1] = "FLOW_CONTROL_RTS_CTS";
  FlowControl[FlowControl["FLOW_CONTROL_DSR_DTR"] = 2] = "FLOW_CONTROL_DSR_DTR";
  FlowControl[FlowControl["FLOW_CONTROL_XON_XOFF"] = 3] = "FLOW_CONTROL_XON_XOFF";
  return FlowControl;
}({});
let ReturnedDataType = exports.ReturnedDataType = /*#__PURE__*/function (ReturnedDataType) {
  ReturnedDataType[ReturnedDataType["INTARRAY"] = 1] = "INTARRAY";
  ReturnedDataType[ReturnedDataType["HEXSTRING"] = 2] = "HEXSTRING";
  ReturnedDataType[ReturnedDataType["UTF8"] = 3] = "UTF8";
  return ReturnedDataType;
}({});
let Mode = exports.Mode = /*#__PURE__*/function (Mode) {
  Mode[Mode["ASYNC"] = 0] = "ASYNC";
  Mode[Mode["SYNC"] = 1] = "SYNC";
  return Mode;
}({});
//# sourceMappingURL=ParamsType.js.map