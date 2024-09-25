function vibrateDevice() {
    if ("vibrate" in navigator) {
      // Vibrate for 200ms
      navigator.vibrate(200);
  
      // Vibrate with a pattern
      // navigator.vibrate([100, 30, 100, 30, 100]); // Vibrate, pause, vibrate, pause, vibrate
    } else {
      console.log("Vibration not supported");
    }
  }
  
  // Usage
  vibrateDevice();