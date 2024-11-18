import type { ParamsType } from './types';
export declare class Device {
    #private;
    constructor(data: any);
    get isSupported(): boolean;
    get deviceId(): number;
    get deviceName(): string;
    get deviceClass(): number;
    get deviceSubclass(): number;
    get deviceProtocol(): number;
    get vendorId(): number;
    get productId(): number;
    get manufacturerName(): string;
    get productName(): string;
    get serialNumber(): string;
    get interfaceCount(): number;
    setParams: (params?: ParamsType) => void;
    connect: () => void;
    disconnect: () => void;
    isConnected: () => Promise<boolean>;
    writeBytes: (message: Array<number>, portInterface?: number) => void;
    writeString: (message: string, portInterface?: number) => void;
    writeBase64: (message: string, portInterface?: number) => void;
    writeHexString: (message: string, portInterface?: number) => void;
}
//# sourceMappingURL=Device.d.ts.map