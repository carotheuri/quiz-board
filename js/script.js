$(function(){
    $("form").submit(function(event){
        var fullName = $("#fullName").val();
        alert(fullName);
        
        event.preventDefault();
        $(this).checked = false;
    });

});