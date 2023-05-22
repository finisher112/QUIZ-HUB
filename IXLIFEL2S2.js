
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
    new Question("The number of polynomials having zeroes as -2 and 5 is", ["1", " 2", " 3", "more than 3"], "more than 3"),
    new Question("Given that one of the zeroes of the cubic polynomial ax3 + bx² + cx + d is zero, the product of the other two zeroes is", ["-c/a", "c/a", "0", "-b/a"], "c/a"),
    new Question("If one of the zeroes of the cubic polynomial x3 + ax² + bx + c is -1, then the product of the other two zeroes is", ["b - a + 1", "b - a - 1", "a - b + 1", "a - b - 1"], "b - a + 1"),
    new Question("The zeroes of the quadratic polynomial x2 + 99x + 127 are", ["both positive", "both negative", "one positive and one negative", "both equal"], "both negative"),
    new Question("The zeroes of the quadratic polynomial x² + kx + k, k? 0,", ["cannot both be positive", "cannot both be negative", "are always unequal", "are always equal"], "cannot both be positive"),
    new Question(" If the zeroes of the quadratic polynomial ax² + bx + c, c # 0 are equal, then", ["c and a have opposite signs", " c and b have opposite signs", "c and a have the same sign", "c and b have the same sign"], "c and a have the same sign"),
    new Question("The number of polynomials having zeroes as 4 and 7 is", ["2", " 3", "4", "more than 4"], "more than 4"),
    new Question("A quadratic polynomial, whose zeores are -4 and -5, is", ["x²-9x + 20", "x² + 9x + 20", "x²-9x- 20", "x² + 9x- 20"], "x² + 9x + 20"),
    new Question ("The zeroes of the quadratic polynomial x² + 1750x + 175000 are ", ["both negative", "one positive and one negative", " both positive", " both equal"], "both negative"),
    new Question("The zeroes of the quadratic polynomial x² - 15x + 50 are", ["both negative", " one positive and one negative", "both positive", "both equal"], "both positive"),
    new Question("The zeroes of the quadratic polynomial 3x² - 48 are", ["both negative", "one positive and one negative", "both positive", " both equal"], "one positive and one negative"),
      
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
