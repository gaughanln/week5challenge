// Global variables
var nameEl = document.getElementById("project-name-input");
var typeEl = document.getElementById("project-type-input");
var dueEl = document.getElementById("project-date-input");
var timeDisplay = document.getElementById("#time-display");
var projectDisplay = document.getElementById("#project-display")

setInterval(function() {
  var currentTime = dayjs();
  $('#time-display').html(currentTime.format('MMMM D, YYYY h:mm:ss a'));
}, 1000);

function formInfo(event){
  event.defaultPrevented();
var nameEl.value = nameInput.val().trim();
var typeEl.value = typeInput.val();
var dueEl.value = dueInput.val();
console.log(nameValue, type.value, due.value)
}