$(function(){
    var result = '';
    $("form").submit(function(event){
        var fullName = $("#fullName").val();
        alert("Hey " + fullName + " your quiz has been received");
        var input = $("form").serializeArray();
        result = gradeExam(input);
        $("#gradedresult").html('<p style="text-align:clearInterval;">Your Result QuizBoard is: </p>' + result);
        $("#ex1").fadeIn(6000).modal();
        $(".closemodal").click(() =>{
            window.location.href = "computerclub.html";
        });
        event.preventDefault();
    });
});

function gradeExam(formElements){
    alert("Well received");
    console.log(formElements);
    var correctAnswers = ['JavaScript is a scripting language used to make the website interactive','Yes, perfectly','All of the mentioned','Function/Method'];
    var count = 0;
    
    formElements.forEach(formElement => {
        
        console.log(formElement['value']);
        if(correctAnswers[0].includes(formElement['value']) || correctAnswers[1].includes(formElement['value']) || correctAnswers[2].includes(formElement['value']) || correctAnswers[3].includes(formElement['value'])){
            count += 1;
        }
        else{
            //do nothing
        }
    });
    console.log(count);
    // each mark is 25%
    return (25*count);
}