import { CountUp } from '../plugin/js/countUp.min.js';

var countUp1 = new CountUp('count1', 70);
var countUp2 = new CountUp('count2', 9);
var countUp3 = new CountUp('count3', 60);
var countUp4 = new CountUp('count4', 30);

$(document).ready(function(){

	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		anchors:['section1','section2','section3','section4'],
		scrollingSpeed: 1000,

		"afterLoad" : function(anchorLink,index){

			if(index == 4){
				setTimeout(function(){
					countUp1.start();
				})
				setTimeout(function(){
					countUp2.start();
				},250)
				setTimeout(function(){
					countUp3.start();
				},500)
				setTimeout(function(){
					countUp4.start();
				},750)
			}else{
				countUp1.reset();
				countUp2.reset();
				countUp3.reset();
				countUp4.reset();
			}
		}
	});

	$(".top-btn").click(function(){
		$.fn.fullpage.moveTo(1, 1); 
	});
});