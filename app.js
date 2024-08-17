let currentQuestion = 1;
const totalQuestions = 10;
let score = 0;
function showQuestion(questionNumber) {
    for (let i=1;i<=totalQuestions;i++) {
        document.getElementById(`question${i}`).style.display ="none";              // Hide all questions
    }
    document.getElementById(`question${questionNumber}`).style.display ="block";   // Show the current question
}
document.getElementById('next').addEventListener('click',function(){
    const options=document.querySelectorAll(`input[name="a${currentQuestion}"]`);
    let answered=false;
    options.forEach(option=>{
        if (option.checked){
            answered =true;
            if (option.value ==="Correct") {
                score +=1;
                document.getElementById('score').innerText =score;
            }
        }
    });
    if (answered){
        currentQuestion++;
        if(currentQuestion<=totalQuestions){                                    // Move to the next question
            showQuestion(currentQuestion);
        }else{
            document.getElementById('result').innerHTML="Quiz Completed";
            document.getElementById('qa_body').style.display= "none";                   // Hide quiz body after completion
        }
    }else{
        alert("Please select an option");
    }
});
document.getElementById('skip').addEventListener('click', function() {
    currentQuestion++;
    if (currentQuestion <= totalQuestions) {
        showQuestion(currentQuestion);                                          // Move to the next question
    } else {
        document.getElementById('result').innerHTML = "Quiz Completed";
        document.getElementById('qa_body').style.display = 'none';       // Hide quiz body after completion
    }
});
showQuestion(currentQuestion);                                              // Initialize the first question
