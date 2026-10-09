$(document).ready(function(){
  function updateTimer(){
    var target = moment.tz("2026-11-16 12:00", "Asia/Kolkata");
    var now = moment.tz("Asia/Kolkata");
    var diff = target.diff(now);
    if(diff <= 0){
      $("#clean-timer").html("We are Married! ❤️");
      return;
    }
    var d = moment.duration(diff);
    var days = Math.floor(d.asDays());
    var hrs = d.hours();
    var mins = d.minutes();
    var secs = d.seconds();
    // NO RS T - ONLY NUMBERS WITH COLON
    $("#clean-timer").html(days + " : " + hrs + " : " + mins + " : " + secs);
  }
  updateTimer();
  setInterval(updateTimer, 1000);
});
