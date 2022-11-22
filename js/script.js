$(function(){
    $("form").submit(function(event){
        var fullName = $("#fullName").val();
        alert(fullName);
        var input = $("form").serializeArray();
        var result = gradeExam(input);
        event.preventDefault();
    });

});

function gradeExam(formElements){
    alert("Well received");
    console.log(formElements);
    var correctAnswers = ['JavaScript is a scripting language used to make the website interactive','Yes, perfectly','All of the mentioned','Function/Method'];
    var count = 0;
    var output = '';
    formElements.forEach(formElement => {
        console.log(formElement['value']);
        if(correctAnswers.indexOf(formElement['value'])){
            count += 1;
        }
    });
    // each mark is 25%
    return (25*count);
}