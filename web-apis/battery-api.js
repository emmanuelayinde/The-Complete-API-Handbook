function checkBattery() {
    if ("getBattery" in navigator) {
      navigator.getBattery().then((battery) => {
        console.log(`Battery level: ${battery.level * 100}%`);
        console.log(`Battery charging: ${battery.charging}`);
  
        battery.addEventListener("levelchange", () => {
          console.log(`Battery level changed: ${battery.level * 100}%`);
        });
  
        battery.addEventListener("chargingchange", () => {
          console.log(`Battery charging changed: ${battery.charging}`);
        });
      });
    } else {
      console.log("Battery Status API not supported");
    }
  }
  
// Usage
checkBattery();
