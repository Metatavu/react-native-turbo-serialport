import { NativeEventEmitter } from 'react-native';
import { Device } from './Device';
import { TurboSerialport } from './TurboSerialport';
import { DataBit, DriverType, FlowControl, Parity, ReturnedDataType, StopBit } from './types';
export class Serialport {
  #subscription;
  setParams = (params, deviceId) => {
    const {
      driver = DriverType.AUTO,
      portInterface = -1,
      returnedDataType = ReturnedDataType.UTF8,
      baudRate = 9600,
      dataBit = DataBit.DATA_BITS_8,
      stopBit = StopBit.STOP_BITS_1,
      parity = Parity.PARITY_NONE,
      flowControl = FlowControl.FLOW_CONTROL_OFF
    } = params || {};
    TurboSerialport.setParams(deviceId ?? -1, driver, portInterface, returnedDataType, baudRate, dataBit, stopBit, parity, flowControl);
  };
  startListening = listener => {
    const eventEmitter = new NativeEventEmitter(TurboSerialport);
    this.#subscription = eventEmitter.addListener(`serialportEvent`, params => {
      listener(params);
    });
  };
  stopListening = () => {
    this.#subscription?.remove();
  };
  listDevices = () => {
    return TurboSerialport.listDevices().then(devices => {
      return devices.map(device => new Device(device));
    });
  };
  connect = deviceId => {
    TurboSerialport.connect(deviceId ?? -1);
  };
  disconnect = deviceId => {
    TurboSerialport.disconnect(deviceId ?? -1);
  };
  isConnected = deviceId => {
    return TurboSerialport.isConnected(deviceId ?? -1);
  };
  isServiceStarted = () => {
    return TurboSerialport.isServiceStarted();
  };
  writeBytes = (message, deviceId, portInterface) => {
    TurboSerialport.writeBytes(deviceId ?? -1, portInterface ?? 0, message);
  };
  writeString = (message, deviceId, portInterface) => {
    TurboSerialport.writeString(deviceId ?? -1, portInterface ?? 0, message);
  };
  writeBase64 = (message, deviceId, portInterface) => {
    TurboSerialport.writeBase64(deviceId ?? -1, portInterface ?? 0, message);
  };
  writeHexString = (message, deviceId, portInterface) => {
    TurboSerialport.writeHexString(deviceId ?? -1, portInterface ?? 0, message);
  };
}
//# sourceMappingURL=Serialport.js.map