import "./style.css";
import Vue from 'vue/dist/vue.js';

var app = new Vue({
	el: '#app',
	data: {
		pageName: "home", 
		termlist: ["IL = He" , "JE = I", 'TU = You'],
		cardnumber: 1
	},
	computed:{
		cardcount: function(){
			return this.termlist.length;
		},
		term: function(){
			return this.termlist[this.cardnumber -1];
		}
	},
	methods: {
		scroll: function(direction) {
			this.cardnumber += direction;

	

	   		if(this.cardnumber > this.cardcount ){
	   			this.cardnumber=1;
	   		}

	   		if (this.cardnumber < 1){

	   			this.cardnumber = this.cardcount;
	   		}
		}
	}
});

window.app = app;
