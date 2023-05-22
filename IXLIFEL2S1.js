
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
    new Question("The largest number which divides 60 and 75, leaving remainders 8 and 10 respectively, is", ["260", " 75", " 65", " 13"], "13"),
new Question("The least number that is divisible by all the numbers from 1 to 5 (both inclusive) is", ["5", "60", " 20", " 100"], "60"),
new Question("The least number that is divisible by all the numbers from 1 to 8 (both inclusive) is", ["840", " 2520", " 8", " 420"], "840"),
new Question("The decimal expansion of the rational number 14587/250 will terminate after:", [" one decimal place", " two decimal places", "three decimal places", " four decimal places"], "three decimal places"),
new Question("The decimal expansion of the rational number 9/(72X54 )will terminate after:",["one decimal place", "two decimal places", "three decimal places", "four decimal places"], "four decimal places"),
new Question("The product of two consecutive natural numbers is always:", ["prime number", "even number", " odd number", " even or odd"], "even number"),
new Question(" If the HCF of 408 and 1032 is expressible in the form 1032 x 2 + 408 x p, then the value of p is", ["5", "-5", " 4", " -4"], "-5"),
new Question("The number in the form of 4p + 3, where p is a whole number, will always be", ["even", "odd", " even or odd", " multiple of 3"], "odd"),
new Question("When a number is divided by 7, its remainder is always: ", ["greater than 7", "at least 7", " less than 7", " at most 7"], "less than 7"),
new Question("(6 + 5 √3) - (4 - 3 √3) is", ["a rational number", "an irrational number", " a natural number", " an integer"], "an irrational number"),
new Question(" If HCF (16, y) = 8 and LCM (16, y) = 48, then the value of y is", ["24", " 16", "8", "48"], "24"),
new Question("If one zero of the quadratic polynomial x² + 3x + k is 2, then the value of k is", ["10", " -10", " 5", " -5"], " -10"),
new Question("Given that two of the zeroes of the cubic poly-nomial ax3 + bx² + cx + d are 0, the third zero is", [" -b/a ", " b/a ", " c/a ", " -d/a "], " -b/a "),
new Question("If one of the zeroes of the quadratic polynomial (k - 1) x² + kx + 1 is - 3, then the value of k is", ["4/3", "-4/3", "2/3", "-2/3"], "4/3"),

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
