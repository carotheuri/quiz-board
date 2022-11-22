$(function(){
    $("form").submit(function(event){
        var fullName = $("#fullName").val();
        alert(fullName);
        var input = $("form").serializeArray();
        console.log(input);
        event.preventDefault();
    });

});