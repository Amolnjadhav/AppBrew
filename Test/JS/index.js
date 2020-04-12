/*
function resetval() {
  var elements=document.getElementsByTagName("input");
  elements[0].value="Admin";
  elements[1].value="";
} */

$("button").click(function () {
  $("input")[0].value="Admin";
  $("input")[1].value="";
});
