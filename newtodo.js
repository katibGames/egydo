function showdata() {
  var newtodo = $("#newtodo").val();
    $("ol").prepend("<li>" +
     newtodo +
    "<span>"
    +"&times;"
    +"</span>"
     +"</l1>");
}

span.onclick = function() {
  modal.style.display = "none";
}