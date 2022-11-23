$(function(){
    var result = '';
    $("form").submit(function(event){
        var fullName = $("#fullName").val();
        alert("Hey " + fullName + " your quiz has been received");
        var input = $("form").serializeArray();
        result = gradeExam(input);
        checkPerformance(result);
        $("#ex1").fadeIn(3000).modal();
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
    var outputResult = "";
    formElements.forEach(formElement => {
        
        console.log(formElement['value']);
        if(correctAnswers[0].includes(formElement['value']) || correctAnswers[1].includes(formElement['value']) || correctAnswers[2].includes(formElement['value']) || correctAnswers[3].includes(formElement['value'])){
            count += 1;
        }
        else{
            //do nothing
        }
    });
    outputResult = count * 25;
    return outputResult;
    //return (25*count);
}
function checkPerformance(gradedrslt){
    alert(gradedrslt);
    if(gradedrslt <= 75){
        alert("chae");
        $("#gradedresult").html('<p style="text-align:clearInterval;">Your Result QuizBoard is: </p>' + gradedrslt+ '/100' + '<br><a href="quiz.html" style="border-radius:10%;">Re-take Test</a>');
    }
    else{
        alert("voii");
        $("#gradedresult").html('<p style="text-align:clearInterval;">Your Result QuizBoard is: </p>' + gradedrslt + '<br> Congratulations');
    }
    
}