
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
    new Question("The number of polynomials having zeroes as 4 and 7 is", ["2", " 3", "4", "more than 4"], "more than 4"),
    new Question("A quadratic polynomial, whose zeores are -4 and -5, is", ["x²-9x + 20", "x² + 9x + 20", "x²-9x- 20", "x² + 9x- 20"], "x² + 9x + 20"),
    new Question ("The zeroes of the quadratic polynomial x² + 1750x + 175000 are ", ["both negative", "one positive and one negative", " both positive", " both equal"], "both negative"),
    new Question("The zeroes of the quadratic polynomial x² - 15x + 50 are", ["both negative", " one positive and one negative", "both positive", "both equal"], "both positive"),
    new Question("The zeroes of the quadratic polynomial 3x² - 48 are", ["both negative", "one positive and one negative", "both positive", " both equal"], "one positive and one negative"),
    new Question("The zeroes of the quadratic polynomial x² - 18x + 81 are", ["both negative", " one positive and one negative", " both positive and unequal", "both equal and positive"], "both equal and positive"),
    new Question("The zeroes of the quadratic polynomial x² + px + p, p ≠ 0 are", ["both equal", "both cannot be positive", "both unequal", " both cannot be negative"], "both cannot be positive"),
    new Question("If one of the zeroes of the quadratic polynomial (p - l)x² + px + 1 is -3, then the value of p is", ["3/4", "4/3", "-3/4", "-4/3"], "4/3"),
    new Question("If the zeroes of the quadratic polynomial Ax² + Bx + C, C # 0 are equal, then", ["A and B have the same sign", "A and C have the same sign", " B and C have the same sign", " A and C have opposite signs"], "A and C have the same sign"),
    new Question("If x3 + 1 is divided by x² + 5, then the possible degree of quotient is", ["0", "1", " 2", " 3"], "1"),
    
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
