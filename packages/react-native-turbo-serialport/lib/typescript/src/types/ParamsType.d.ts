export declare enum DriverType {
    AUTO = "AUTO",
    CDC = "cdc",
    CH34x = "ch34x",
    CP210x = "cp210x",
    FTDI = "ftdi",
    PL2303 = "pl2303"
}
export type BaudRate = 300 | 600 | 1200 | 2400 | 4800 | 9600 | 19200 | 38400 | 57600 | 115200 | 230400 | 460800 | 921600;
export declare enum DataBit {
    DATA_BITS_5 = 5,
    DATA_BITS_6 = 6,
    DATA_BITS_7 = 7,
    DATA_BITS_8 = 8
}
export declare enum StopBit {
    STOP_BITS_1 = 1,
    STOP_BITS_2 = 2,
    STOP_BITS_15 = 3
}
export declare enum Parity {
    PARITY_NONE = 0,
    PARITY_ODD = 1,
    PARITY_EVEN = 2,
    PARITY_MARK = 3,
    PARITY_SPACE = 4
}
export declare enum FlowControl {
    FLOW_CONTROL_OFF = 0,
    FLOW_CONTROL_RTS_CTS = 1,
    FLOW_CONTROL_DSR_DTR = 2,
    FLOW_CONTROL_XON_XOFF = 3
}
export declare enum ReturnedDataType {
    INTARRAY = 1,
    HEXSTRING = 2,
    UTF8 = 3
}
export interface ParamsType {
    driver?: DriverType;
    portInterface?: number;
    baudRate?: BaudRate;
    dataBit?: DataBit;
    stopBit?: StopBit;
    parity?: Parity;
    flowControl?: FlowControl;
    returnedDataType?: ReturnedDataType;
}
export declare enum Mode {
    ASYNC = 0,
    SYNC = 1
}
//# sourceMappingURL=ParamsType.d.ts.map