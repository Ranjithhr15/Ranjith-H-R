$(document).ready(function() {
  let clock;

  // REMOVE RS T - Blank labels
  FlipClock.Lang.Custom = {
    days: '',
    hours: '',
    minutes: '',
    seconds: ''
  };

  let currentDate = new Date();
  let targetDate = moment.tz("2026-11-16 12:00", "Asia/Kolkata");

  // FIXED DIFF CALCULATION
  let diff = targetDate.valueOf() / 1000 - currentDate.getTime() / 1000;

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
