var leapYear = function(year) {
  if (isNaN(year)) {
    alert("Enter number in field")
  } else if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
    return true;
  } else {
  return false;
  }
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result).show();
  });
});
