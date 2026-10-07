$(document).ready(function() {
  let clock;

  // ✅ Custom labels (clean & official way)
  FlipClock.Lang.Custom = {
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds'
  };

  let currentDate = new Date();
  let targetDate = moment.tz("2026-07-05 12:30", "Asia/Kolkata");

  let diff = targetDate / 1000 - currentDate.getTime() / 1000;

  if (diff <= 0) {

    clock = $(".clock-fix").FlipClock(0, {
      clockFace: "DailyCounter",
      countdown: true,
      language: "Custom",
      autoStart: false
    });

    console.log("Date has already passed!");

  } else {

    clock = $(".clock-fix").FlipClock(diff, {
      clockFace: "DailyCounter",
      countdown: true,
      language: "Custom",
      callbacks: {
        stop: function() {
          console.log("Timer has ended!");
        }
      }
    });

  }
});
