import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import {
  intArrayToUtf16,
  useSerialport,
} from '@serserm/react-native-turbo-serialport';

export default function App() {
  const [device, setDevice] = useState('');
  const [data, setData] = useState('');
  const serialport = useSerialport({
    onError: ({ errorMessage }) => {
      Alert.alert('Error', `${errorMessage}`);
    },
    onConnected: ({ data }) => {
      Alert.alert('Connected', `${data}`);
    },
    onDeviceAttached: ({ data }) => {
      if (data) {
        const {
          isSupported,
          deviceId,
          deviceName,
          deviceClass,
          deviceSubclass,
          deviceProtocol,
          vendorId,
          productId,
          manufacturerName,
          productName,
          serialNumber,
          interfaceCount,
        } = data;
        setDevice(
          `${isSupported}
          ${deviceId}
          ${deviceName}
          ${deviceClass}
          ${deviceSubclass}
          ${deviceProtocol}
          ${vendorId}
          ${productId}
          ${interfaceCount}
          ${manufacturerName}
          ${productName}
          ${serialNumber}`,
        );
      }
    },
    onReadData: ({ data }) => {
      setData(intArrayToUtf16(data));
    },
  });

  useEffect(() => {
    serialport.listDevices().then(res => {
      if (res?.length) {
        const { isSupported, deviceId, deviceName, manufacturerName } = res[0];
        setDevice(
          `${isSupported}\n${deviceId}\n${deviceName}\n${manufacturerName}`,
        );
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>{`Result\n${device}`}</Text>
      <Text style={{ textAlign: 'center' }}>{`${data}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
