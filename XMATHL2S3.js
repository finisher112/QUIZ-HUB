
function populate(){
    if(quiz.isEnded() ){
        showscores();

    }
    else{
        var element=document.getElementById("question");
        element.innerHTML=quiz.getQuestionIndex().text;

        var choices=quiz.getQuestionIndex().choices;
        for(var i=0;i<choices.length;i++){
        var element= document.getElementById("choice"+i);
        element.innerHTML=choices[i];
        guess("bt"+i,choices[i]);
        
        }
        showProgress();
    }
};
function guess(id,guess){
    var button=document.getElementById(id);
    button.onclick=function(){
        quiz.guess(guess);
        populate();
    }
};

function showProgress(){
    var currentQuestionNumber=quiz.questionIndex+1;
    var element=document.getElementById("progress");
    element.innerHTML="Question "+currentQuestionNumber+"of "+quiz.questions.length;

};

function showscores(){
    var gameoverHTML="<h1>Result</h1>";
    gameoverHTML+="<h2 id='score'> Your Scores:"+ quiz.score + "</h2>";
   
    var element=document.getElementById("quiz");
    element.innerHTML=gameoverHTML;
    
};
const newLocal = ", ";


//create questions
var question=
[
    new Question("If x3 + 11 is divided by x² - 3, then the possible degree of remainder is", ["0", "  1", " 2", "less than 2"], "less than 2"),
    new Question(" If x4 + 3x² + 7 is divided by 3x + 5, then the possible degrees of quotient and remainder are:", ["3, 0", " 4, 0", "  3, 1", " 4, 1"], "3, 0"),
    new Question(" If x5 + 2x4 + x + 6 is divided by g(x), and quotient is x² + 5x + 7, then the possible degree of g(x) is:", ["4", " 2", "3", " 5"], "3"),
    new Question("If x5 + 2x4 + x + 6 is divided by g(x) and quotient is x² + 5x + 7, then the possible degree of remainder is:", [" less than 1", " less than 2", "less than 3", " less than 4"], "less than 3"),
    new Question("What is the number of zeroes that a linear poly-nomial has/have:", ["0", "1", " 2", " 3"], "1"),
    new Question("What is the number(s) of zeroes that a quadratic polynomial has/have:", ["0", " 1", "2", " 3"], "2"),
    new Question("What is the number(s) of zeores that a cubic polynomial has/have:", ["0", "  1", " 2", "3"], "3"),
    new Question("If one of the zeroes of the cubic polynomial x3 + px² + qx + r is -1, then the product of the other two zeroes is", ["p + q + 1", " p-q- 1", "q - p + 1", " q - p - 1"], "q - p + 1"),
    new Question("If one zero of the quadratic polynomial x² + 3x + b is 2, then the value of b is", ["10", " -8", "  9", "-10"], "-10"),
    new Question(" If 1 is one of the zeroes of the polynomial x² + x + k, then the value of k is:", ["2", "-2", " 4", " -4"], "-2"),
    
    ];
var quiz=new Quiz(question);
populate();


function showNext(){
    quiz.next();
    populate();
}

function showPerv(){
    quiz.prev();
    populate();
}
