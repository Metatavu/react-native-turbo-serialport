import type { ListenerType, ParamsType } from './types';
export declare class Serialport {
    #private;
    setParams: (params?: ParamsType, deviceId?: number) => void;
    startListening: (listener: ListenerType) => void;
    stopListening: () => void;
    listDevices: () => any;
    connect: (deviceId?: number) => void;
    disconnect: (deviceId?: number) => void;
    isConnected: (deviceId?: number) => Promise<boolean>;
    isServiceStarted: () => Promise<boolean>;
    writeBytes: (message: Array<number>, deviceId?: number, portInterface?: number) => void;
    writeString: (message: string, deviceId?: number, portInterface?: number) => void;
    writeBase64: (message: string, deviceId?: number, portInterface?: number) => void;
    writeHexString: (message: string, deviceId?: number, portInterface?: number) => void;
}
//# sourceMappingURL=Serialport.d.ts.map