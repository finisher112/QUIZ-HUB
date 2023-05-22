
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
    new Question("There is a circular path around a sports field. Priya takes 18 minutes to drive one round of the field. Harish takes 12 minutes. Suppose they both start at the same point and at the same time and go in the same direction. After how many minutes will they meet ?", ["36 minutes", "18 minutes", "6 minutes", "They will not meet"], "36 minutes"),
    new Question(" Express 98 as a product of its primes", ["2² × 7", "2² × 7²", "2 × 7²", " 23 × 7"], "2 × 7²"),
    new Question("Three farmers have 490 kg, 588 kg and 882 kg of wheat respectively. Find the maximum capacity of a bag so that the wheat can be packed in exact number of bags.", ["98 kg", " 290 kg", " 200 kg", " 350 kg"], "98 kg"),
    new Question("For some integer p, every even integer is of the form", ["2p + 1", "2p", " p + 1", " p"], "2p"),
    new Question("For some integer p, every odd integer is of the form", ["2p + 1", " 2p", "  p + 1", "  p"], "2p + 1"),
    new Question("m² - 1 is divisible by 8, if m is", ["an even integer", "an odd integer", " a natural number", " a whole number"], "an odd integer"),
    new Question("If two positive integers A and B can be ex-pressed as A = xy3 and B = xiy2z; x, y being prime numbers, the LCM (A, B) is", ["xy²", "x4y²z", " x4y3", "x4y3z"], "x4y3z"),
    new Question("The product of a non-zero rational and an irrational number is", ["always rational", "rational or irrational", "always irrational", "zero"], "always irrational"),
    new Question("The largest number which divides 60 and 75, leaving remainders 8 and 10 respectively, is", ["260", " 75", " 65", " 13"], "13"),
    new Question("The least number that is divisible by all the numbers from 1 to 5 (both inclusive) is", ["5", "60", " 20", " 100"], "60"),
    new Question("The least number that is divisible by all the numbers from 1 to 8 (both inclusive) is", ["840", " 2520", " 8", " 420"], "840"),
    
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
