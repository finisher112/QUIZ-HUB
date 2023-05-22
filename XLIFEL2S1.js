
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
    new Question("If one zero of the quadratic polynomial x² + 3x + k is 2, then the value of k is", ["10", " -10", " 5", " -5"], " -10"),
    new Question("Given that two of the zeroes of the cubic poly-nomial ax3 + bx² + cx + d are 0, the third zero is", [" -b/a ", " b/a ", " c/a ", " -d/a "], " -b/a "),
    new Question("If one of the zeroes of the quadratic polynomial (k - 1) x² + kx + 1 is - 3, then the value of k is", ["4/3", "-4/3", "2/3", "-2/3"], "4/3"),
    new Question("If the zeroes of the quadratic polynomial x2 + (a + 1) x + b are 2 and -3, then", ["a = -7, b = -1", " a = 5, b = -1", " a = 2, b = -6", "a = 0, b = -6"], "a - 0, b = -6"),
    new Question("The number of polynomials having zeroes as -2 and 5 is", ["1", " 2", " 3", "more than 3"], "more than 3"),
    new Question("Given that one of the zeroes of the cubic polynomial ax3 + bx² + cx + d is zero, the product of the other two zeroes is", ["-c/a", "c/a", "0", "-b/a"], "c/a"),
    new Question("If one of the zeroes of the cubic polynomial x3 + ax² + bx + c is -1, then the product of the other two zeroes is", ["b - a + 1", "b - a - 1", "a - b + 1", "a - b - 1"], "b - a + 1"),
    new Question("The zeroes of the quadratic polynomial x2 + 99x + 127 are", ["both positive", "both negative", "one positive and one negative", "both equal"], "both negative"),
    new Question("The zeroes of the quadratic polynomial x² + kx + k, k? 0,", ["cannot both be positive", "cannot both be negative", "are always unequal", "are always equal"], "cannot both be positive"),
    new Question(" If the zeroes of the quadratic polynomial ax² + bx + c, c # 0 are equal, then", ["c and a have opposite signs", " c and b have opposite signs", "c and a have the same sign", "c and b have the same sign"], "c and a have the same sign"),
    
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
