var correctAnswers = 0;
var incorrectAnswers = 0;
var timeLeft = 50;


$(document).ready(function() {
    
    var timer = setInterval(function(){
        timeLeft -= 1;
        // console.log(timeLeft);
        $("#timer").text("Time Remaining: " + timeLeft);
        if(timeLeft == 0){
            alert("Times Up!")
            $("#submitbutton").click()
        }
    },1000);    

    $("#submitbutton").on("click", function(event){
        event.preventDefault();

        clearInterval(timer);

        let questionOne = $("input[name='question1']:checked").val();
        let questionTwo = $("input[name='question2']:checked").val();
        let questionThr = $("input[name='question3']:checked").val();
        let questionFou = $("input[name='question4']:checked").val();
        let questionFiv = $("input[name='question5']:checked").val();
        let questionSix = $("input[name='question6']:checked").val();

        let answerArr = [questionOne, questionTwo, questionThr, questionFou, questionFiv, questionSix];
        for(let i = 0; i < answerArr.length; i++){
            if(answerArr[i] == "correct"){
                correctAnswers++;
            }
        }
        alert(correctAnswers);
        $("#resultDiv").empty();
        $("section").empty();
        $("#resultDiv").html("<div class='row'><div class='col'>Congratulations! You got: <b>" + correctAnswers + "</b> correct answers and <b>" + incorrectAnswers + "</b> incorrect answers.</div></div>")
    });
});
