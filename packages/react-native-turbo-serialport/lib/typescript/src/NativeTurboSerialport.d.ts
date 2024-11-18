import type { TurboModule } from 'react-native';
export interface Spec extends TurboModule {
    init(autoConnect: boolean, mode: number, driver: string, portInterface: number, returnedDataType: number, baudRate: number, dataBit: number, stopBit: number, parity: number, flowControl: number): void;
    setParams(deviceId: number, driver: string, portInterface: number, returnedDataType: number, baudRate: number, dataBit: number, stopBit: number, parity: number, flowControl: number): void;
    addListener(eventName: string): void;
    removeListeners(count: number): void;
    listDevices(): Promise<any>;
    connect(deviceId: number): void;
    disconnect(deviceId: number): void;
    isConnected(deviceId: number): Promise<any>;
    isServiceStarted(): Promise<any>;
    writeBytes(deviceId: number, portInterface: number, message: Array<number>): void;
    writeString(deviceId: number, portInterface: number, message: string): void;
    writeBase64(deviceId: number, portInterface: number, message: string): void;
    writeHexString(deviceId: number, portInterface: number, message: string): void;
}
declare const _default: Spec;
export default _default;
//# sourceMappingURL=NativeTurboSerialport.d.ts.map