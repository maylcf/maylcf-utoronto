function vibrate() {
  // enable vibration support
  navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

  if (navigator.vibrate) {
  	// vibration API supported
    navigator.vibrate(2000);
  }
}

function getBatteryStatus() {

  let batteryInfoContainer = $("#battery-status-info");

  let batteryIsCharging = false;

  navigator.getBattery().then(function(battery) {
    let batteryLevel = battery.level * 100 + "%";
    batteryIsCharging = battery.charging;
    batteryInfoContainer.text(batteryLevel);
  });
}
