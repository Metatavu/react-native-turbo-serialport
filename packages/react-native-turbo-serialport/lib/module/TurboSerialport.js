import { NativeModules, Platform } from 'react-native';
import { LINKING_ERROR } from './errors';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;
const TurboSerialportModule = isTurboModuleEnabled ? require('./NativeTurboSerialport').default : NativeModules.TurboSerialport;
export const TurboSerialport = Platform.OS === 'android' && TurboSerialportModule ? TurboSerialportModule : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
//# sourceMappingURL=TurboSerialport.js.map