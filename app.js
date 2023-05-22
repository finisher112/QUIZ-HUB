
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

var question=[
new Question("Which is the following gas helps in the depletion of ozone in the ozone layer? ", ["CO2", "Ar", "CFC", "He"], " CFC "),
new Question("What is the value of PV for 4g of H2 gas at STP?(H=1)", ["RT", "2 RT" , "4 RT", "0.5 RT"], "2 RT"),
new Question("How many grams of O₂ will be required to make CO, by burning 12 g of C completely? (C= 12, O= 16)", ["32 g", " 12 g", " 16 g", " 44 g"], "32 g "),
new Question("How many types of thermal expansion coefficients are there for a liquid? ", ["0", "1", "2", "3"], "1"),
new Question("In the case of refraction of white light through a prism, the light of colour which deviates the least is", ["yellow ", "orange ", " red", "violet"], "red"),
new Question("If a reflected ray from a concave mirror makes an angle of 45° with the normal, the angle of incidence will be ", ["90° ", "22.5 ", "135° ", "45° "], "45° "),
new Question("What is the unit of conductivity? ", ["mho metre ", "ohm metre¹ " , " mho metre ", " ohm metre "], " mho metre "),
new Question("If a current of 0.2 ampere flows through a conductor of resistance 40 ohm, what is the potential difference between the two ends of the conductor? ", ["0.5 volt ", "2 volt " , "6 volt ", "8 volt"], "8 volt"),
new Question("How many elements are there in the fourth period of a long periodic table? ", ["8", "32" , "16", "18"], "18"),
new Question("In the formation of CaO how many electrons are transferred from Ca atom to O atom? (Atomic numbers of oxygen and calcium are 8 and 20 respectively) ", ["0", "1" , "2", "3"], "2"),
new Question("In the extraction of aluminium by the process of electrolysis, the fused mixture used contains which of the following along with cryolite and fluorspar?", ["anhydrous aluminium chloride ", "aluminium hydroxide " , "aluminium sulfate ", " pure alumina "]," pure alumina"),
new Question("For the preparation of N₂ gas in the laboratory, the mixed aqueous solution of Which of the following two compounds is used? ", [" NaNO2 and NH,CI ", " NaNO3 and NH.CI " , " NaCl and NH.NO", " NaNO, and NH.NO, "], " ) NaNO2 and NH,CI "),
new Question("Which of the following is the formula of zinc blende, an ore of zinc? ", ["ZnO ", " ZnS " , " ZnCO, ", " ZnSO "], " ZnS "),
new Question("Which of the following is an alcohol? ", ["CHOCH, ", " CH, CHO " , " CH,COOH ", " CH,CH,OH "], " CH,CH,OH "),
new Question("Name a gas in present in atomosphere which is not a greenhouse gas?", ["O3", "N2O" , " CO2", "N2"], " N2"),

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
