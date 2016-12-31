function showdata() {
    var newtodo = $("#newtodo").val();
    $("ol").append('<li class"batodo" >' + newtodo + '<span class="deltodo">' +"&times;" + '</span>' + "</li>");
    $(".deltodo").click(function(){
            $(this).parents("li:first").remove();
        });
    modal.style.display = "none";
};
