package com.serserm.turboserialport;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;

import android.util.Base64;

public class TurboSerialportModule extends TurboSerialportSpec {
  public static final String NAME = "TurboSerialport";

  private ReactApplicationContext reactContext;
  private int listenerCount = 0;
  private UsbSerialport usbSerialport;

  TurboSerialportModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
    usbSerialport = new UsbSerialport(context);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  @ReactMethod
  public void addListener(String eventName) {
    if (listenerCount == 0) {
      // Set up any upstream listeners or background tasks as necessary
      usbSerialport.startListening();
    }
    listenerCount += 1;
  }

  @ReactMethod
  public void removeListeners(double count) {
    listenerCount -= (int) count;
    if (listenerCount <= 0) {
      listenerCount = 0;
      // Remove upstream listeners, stop unnecessary background tasks
      usbSerialport.stopListening();
    }
  }

  @ReactMethod
  public void setParams(
    String driver,
    boolean autoConnect,
    double portInterface,
    double returnedDataType,
    double baudRate,
    double dataBit,
    double stopBit,
    double parity,
    double flowControl
   ) {
    usbSerialport.setParams(
      driver,
      autoConnect,
      (int) portInterface,
      (int) returnedDataType,
      (int) baudRate,
      (int) dataBit,
      (int) stopBit,
      (int) parity,
      (int) flowControl
    );
  }

  @ReactMethod
  public void listDevices(Promise promise) {
    promise.resolve(usbSerialport.listDevices());
  }

  @ReactMethod
  public void connect(double deviceId) {
    if (listenerCount > 0) {
      usbSerialport.connect((int) deviceId);
    }
  }

  @ReactMethod
  public void disconnect() {
    usbSerialport.disconnect();
  }

  @ReactMethod
  public void isConnected(Promise promise) {
    promise.resolve(usbSerialport.isConnected());
  }

  @ReactMethod
  public void isServiceStarted(Promise promise) {
    promise.resolve(listenerCount > 0);
  }

  @ReactMethod
  public void writeBytes(ReadableArray message) {
    int length = message.size();
    if (length < 1) {
      return;
    }
    byte[] bytes = new byte[length];
    for (int i = 0; i < length; i++) {
      bytes[i] = (byte) message.getInt(i);
    }
    if (listenerCount > 0) {
      usbSerialport.write(bytes);
    }
  }

  @ReactMethod
  public void writeString(String message) {
    if (message.length() < 1) {
      return;
    }
    byte[] bytes = message.getBytes();
    if (listenerCount > 0) {
      usbSerialport.write(bytes);
    }
  }

  @ReactMethod
  public void writeBase64(String message) {
    if (message.length() < 1) {
      return;
    }
    byte[] bytes = Base64.decode(message, Base64.DEFAULT);
    if (listenerCount > 0) {
      usbSerialport.write(bytes);
    }
  }

  @ReactMethod
  public void writeHexString(String message) {
    if (message.length() < 1) {
      return;
    }
    String msg = message.toUpperCase();
    byte[] bytes = new byte[msg.length() / 2];
    for (int i = 0; i < bytes.length; i++) {
      int index = i * 2;
      String hex = msg.substring(index, index + 2);
      if (Definitions.hexChars.indexOf(hex.substring(0, 1)) == -1
          || Definitions.hexChars.indexOf(hex.substring(1, 1)) == -1) {
        return;
      }
      bytes[i] = (byte) Integer.parseInt(hex, 16);
    }
    if (listenerCount > 0) {
      usbSerialport.write(bytes);
    }
  }
}
