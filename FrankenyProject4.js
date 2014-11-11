// JavaScript File
/*
    Filename:  Loopiness
    Written by: Steven Frankeny
    Purpose: Learning and Having Fun
    Date: 6 Oct. 2014
    Modification History: None
    Last Modified: N/A
*/
$(document).ready(function(){
	var timer = new Date();
	var startTime = 0;
	var gameSquareNum = 1;
	var gameSquareID = "SquareOne";
	var numSquaresTapped = 0;
	var timeBetweenSquares = 2000;
	var gameNotOver = true;
	$("#instructionsScreen").hide();
	$("#gameScreen").hide();
	$("#btnStartGame").bind("touchstart",startGame);
	$("#btnInstructions").bind("touchstart",displayInstructions);
	$("#btnBack").bind("touchstart",showMainMenu);
	$("#btnTryAgain").bind("touchstart",startGame);
	$(".gameSquare").bind("touchstart",hideSquare);
	function hideSquare(){
		if (gameNotOver)
			if ($(this).is(':visible')){
				$(this).hide();
				numSquaresTapped += 1;
				$(this).toggleClass("notTapped isTapped");
				timer = new Date();
				$("#squareCount").html("Squares Tapped: " + numSquaresTapped + "<br/> Taps per Second: " + (1000*numSquaresTapped/(timer.getTime() - startTime)).toFixed(3));
				
			}
	}
		
	function startGame(){
		timer = new Date();
		startTime = timer.getTime()+2000;
		$("#menuScreen").hide();
		$("#gameScreen").show();
		$("#btnTryAgain").hide();
		$("td").css("height",$("td").width() + "px");
		$(".gameSquare").css("height",$("td").height() + "px");
		$(".gameSquare").hide();
		$(".gameSquare").attr("class","gameSquare isAvailable isTapped");
		$(".gameSquare").css("background-color","#FF0000");
		gameNotOver = true;
		numSquaresTapped = 0;
		$("#squareCount").html("Squares Tapped: 0<br/>Taps per Second: 0");
		timeBetweenSquares = 2000;
		setTimeout(timeout_trigger, timeBetweenSquares);
		
	}
	function displayInstructions(){
		$("#menuScreen").hide();
		$("#instructionsScreen").show();
	}
	function showMainMenu(){
		$("#menuScreen").show();
		$("#instructionsScreen").hide();
	}
	function timeout_trigger(){
		if (gameNotOver)
		{
			do{
				gameSquareNum = Math.floor((Math.random() * 9) + 1);
				switch(gameSquareNum){
					case 1:
						gameSquareID = "#SquareOne";
						break;
					case 2:
						gameSquareID = "#SquareTwo";
						break;
					case 3:
						gameSquareID = "#SquareThree";
						break;
					case 4:
						gameSquareID = "#SquareFour";
						break;
					case 5:
						gameSquareID = "#SquareFive";
						break;
					case 6:
						gameSquareID = "#SquareSix";
						break;
					case 7:
						gameSquareID = "#SquareSeven";
						break;
					case 8:
						gameSquareID = "#SquareEight";
						break;
					case 9:
						gameSquareID = "#SquareNine";
						break;
				}
			}while($(gameSquareID).attr("class").indexOf("isNotAvailable") >= 0);
			$(gameSquareID).toggleClass("isNotAvailable isAvailable notTapped isTapped");
			$(gameSquareID).show();
			if (timeBetweenSquares > 100)
				timeBetweenSquares = Math.floor(timeBetweenSquares*.99);
			
			setTimeout(timeout_trigger, timeBetweenSquares);
			$(gameSquareID).fadeOut(timeBetweenSquares*3, checkTapped);
		}
	}
	function checkTapped(){
		if (gameNotOver)
			if($(this).attr("class")=="gameSquare isNotAvailable notTapped"){
				$(this).show();
				$(this).css("background-color","#000000");
				gameNotOver = false;
				$("#btnTryAgain").show();
			}
		$(this).toggleClass("isNotAvailable isAvailable");
	}
 
	
});

	