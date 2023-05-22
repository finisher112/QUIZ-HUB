function Quiz(questions){
    this.score=0;
    this.questions=questions;
    this.questionIndex=0;
}

Quiz.prototype.getQuestionIndex=function(){
    return this.questions[this.questionIndex];
}
Quiz.prototype.guess=function(answer){
    if(this.getQuestionIndex().iscorrectAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}

Quiz.prototype.prev= function(){
    if( this.questionIndex < 1) {
        return
    }
    this.questionIndex--;
}

Quiz.prototype.next= function(){
    this.questionIndex++;
}

Quiz.prototype.isEnded=function(){
    return this.questionIndex===
    this.questions.length;
}