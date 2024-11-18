"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSerialport = useSerialport;
var _react = require("react");
var _Serialport = require("./Serialport");
function useSerialport(params) {
  const serialport = (0, _react.useRef)(new _Serialport.Serialport());
  (0, _react.useEffect)(() => {
    serialport.current.startListening(({
      type,
      deviceId,
      portInterface,
      errorCode,
      errorMessage,
      data
    }) => {
      switch (type) {
        case 'onReadData':
          params.onReadData?.({
            deviceId,
            portInterface,
            data
          });
          break;
        case 'onError':
          params.onError?.({
            errorCode,
            errorMessage
          });
          break;
        case 'onConnected':
          params.onConnected?.({
            deviceId,
            portInterface
          });
          break;
        case 'onDisconnected':
          params.onDisconnected?.({
            deviceId,
            portInterface
          });
          break;
        case 'onDeviceAttached':
          params.onDeviceAttached?.({
            deviceId
          });
          break;
        case 'onDeviceDetached':
          params.onDeviceDetached?.({
            deviceId
          });
          break;
      }
    });
    return () => {
      serialport.current.stopListening();
    };
  }, []);
  return {
    setParams: serialport.current.setParams,
    listDevices: serialport.current.listDevices,
    connect: serialport.current.connect,
    disconnect: serialport.current.disconnect,
    isConnected: serialport.current.isConnected,
    isServiceStarted: serialport.current.isServiceStarted,
    writeBytes: serialport.current.writeBytes,
    writeString: serialport.current.writeString,
    writeBase64: serialport.current.writeBase64,
    writeHexString: serialport.current.writeHexString
  };
}
//# sourceMappingURL=useSerialport.js.map