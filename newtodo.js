function showdata() {
    var newtodo = $("#newtodo").val();
    if ($("#newtodo").val() == 0) {
    }
    else {
      $("#ol").append('<li class"batodo" >' + newtodo + '<span class="deltodo">' +"&times;" + '</span>' + "</li>");
      modal.style.display = "none";
    }

    $(".deltodo").click(function(){
            $(this).parents("li:first").remove();
        });
};
