import { Component, OnInit } from '@angular/core';

import quizz_question from '../../../assets/data/quizz_questions.json'
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-qizz',
  templateUrl: './qizz.component.html',
  styleUrls: ['./qizz.component.css']
})
export class QizzComponent implements OnInit{

  title:string = '';

  questions:any ;
  questionSelected:any;

  answers:string[] = [];
  answersSelected:string = '';

  questionIndex:number = 0;
  questionMaxIndex:number = 0;

  finished:boolean = false;

  constructor() { }
  ngOnInit(): void {
    if(quizz_question){
      this.finished = false;
      this.title = quizz_question.title;

      this.questions = quizz_question.questions;

      this.questionIndex = 0;
      this.questionMaxIndex = this.questions.length;

      this.questionSelected = quizz_question.questions[this.questionIndex]
    }
  }

  playerChoose(alias:string){
    this.answers.push(alias);
    //console.log(this.answers);
    this.nextStep();
  }

  async nextStep() {
    this.questionIndex += 1;
    if(this.questionMaxIndex > this.questionIndex){
      this.questionSelected = this.questions[this.questionIndex]
    } else {
      const finalAnswer:string = await this.checkResult(this.answers)
      this.finished = true;
      this.answersSelected = quizz_question.results[finalAnswer as keyof
      typeof quizz_question.results]
    }
  }

  checkResult(answers:string[]){
    const result = answers.reduce((prev, curr, i, arr) => {
      if( arr.filter(item => item === prev).length >
          arr.filter(item => item === curr).length
        ){
          return prev;
        } else {
          return curr;
        }
    })
    return result;
  }

}
