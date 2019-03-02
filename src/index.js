import "./style.css";
import Vue from 'vue/dist/vue.js';

var app = new Vue({
	el: '#app',
	data: {

		// This,is the dest of my attemt to try and explain lol, anyway the content below show is the different types
		// of edditable words, and cards that can be seen and flipped through.

		pageName: "home", 
		termlist: ["IL = He" , "Je = I", 'TU = You'],
		cardnumber: 1,
		quizlist: [ "You","Je", "He"],
		quiznumber: 1,
		quizanswers: [ 3, 1, 2], 
		// this hides the correct answer notification only when the correct button is clicked.
		DisplayCorrectAnswer: false
	},
	computed:{
		cardcount: function(){
			return this.termlist.length;
		},
		quizcount: function(){
			return this.quizlist.length;
		},
		term: function(){
			return this.termlist[this.cardnumber -1];
		},	
		quizquestion: function(){
			return this.quizlist[this.quiznumber-1]
		},
	},
	methods: {
		// This allows the next and previous buttons to work for the cards.
		scroll: function(direction) {
			this.cardnumber += direction;
	   		if(this.cardnumber > this.cardcount ){
	   			this.cardnumber=1;
	   		}
	   		if (this.cardnumber < 1){
	   			this.cardnumber = this.cardcount;
	   		}
		},
		// This allows just the next  buttons to work for the quizz only once.
		swipe : function(direction) {
			if(this.quiznumber == this.quizcount) {
				return;
			}
			this.quiznumber += direction;
			this.DisplayCorrectAnswer = false;
		},
		correctanswer: function (buttonNumber){
			if (this.quizanswers[this.quiznumber-1] == buttonNumber){
				this.DisplayCorrectAnswer= true; 
			}
			else{ 
				this.DisplayCorrectAnswer= false;
			}
		}
		// I really hope you like it I worked really, really hard on it. 
	}
   });

window.app = app;
