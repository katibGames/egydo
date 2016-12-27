function showdata() {
  var newtodo = $("#newtodo").val();
    $("ol").prepend("<li>" + newtodo +"</l1>");
  $("#btn2").click(function(){
        $("ol").$("li").append("<li>newtodo</li>");
    });
}
$(document).ready(function(){
    $("#btn2").click(function(){
        $("ol").prepend("<li>Appended item</li>");
    });
});