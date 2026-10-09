$(document).ready(function() {
  let clock;

  // ✅ REMOVE RS T - Set labels to blank
  FlipClock.Lang.Custom = { 
    days: '', 
    hours: '', 
    minutes: '', 
    seconds: '' 
  };

  let now = moment.tz("Asia/Kolkata");
  // Change to Nov 16 for Ranjith - Next month
  let targetDate = moment.tz("2026-11-16 12:00", "Asia/Kolkata");

  let diff = targetDate.diff(now, 'seconds');

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
