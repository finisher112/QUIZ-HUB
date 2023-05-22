
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
    new Question("HCF of 8, 9, 25 is", [" 8", " 9", " 25", "1"], "1"),
new Question("Which of the following is not irrational?", ["(2-√3)2", " (√2 + √3)2", "(√2 -√3)(√2 + √3)", " (27√7)/7"], "(√2 -√3)(√2 + √3)"),
new Question(" The product of a rational and irrational number is", ["rational", "irrational", " both of above", " none of above"], "irrational"),
new Question("The sum of a rational and irrational number is", ["rational", "irrational", "  both of above", " none of above"], "irrational"),
new Question("The sum of two irrational numbers is always", ["irrational", " rational", "  rational or irrational", " one"], "irrational"),
new Question("If b = 3, then any integer can be expressed as a =", ["3q, 3q+ 1, 3q + 2", " 3q", " none of the above", " 3q+ 1"], "3q, 3q+ 1, 3q + 2"),
new Question("The product of three consecutive positive integers is divisible by", [" 4", "6", " no common factor", " only 1"], "6"),
new Question("The set A = {0,1, 2, 3, 4, …} represents the set of", ["whole numbers", " integers", " natural numbers", " even numbers"], "whole numbers"),
new Question(" Which number is divisible by 11?", ["1516", "1452", " 1011", " 1121"], "1452"),
new Question("LCM of the given number x and y where y is a multiple of x is given by", ["x", "y", "xy", "  x/y"], "y"),
new Question("The largest number that will divide 398,436 and 542 leaving remainders 7,11 and 15 respectively is", ["17", " 11", "  34", " 45"], "17"),
 


    
    
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
