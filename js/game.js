var gameState = 0;
$(document).ready(function () 
{
				//start game code
			var f1 = null;
			var f2 = null;
			var f3 = null;
			var f4 = null;
			var f5 = null;
			var f6 = null;
			var f7 = null;
			var f8 = null;
			var totalTimes = 0;
			var timer;
			var flipflop = 0;
			var color = ["red", "green", "blue", "orange", "purple"];
			var colorcount = 0;
			
			// object 
		function doMove() 
		{
			if (totalTimes++ > 25)
			{	
				totalTimes = 0;
				if(flipflop == 0)
				{ 
					flipflop = 1;
				}
				else
				{
					flipflop = 0;
				}
				clearTimeout(timer);
		
			}
				
			colorcount += 1;
			if(colorcount % 5 == 0)
			{
				colorcount = 0;
			}
			if(totalTimes % 10 == 0)
			{
				if(colorcount == 0 || colorcount == 5)
				{
					f1.style.backgroundColor=color[colorcount];
					f2.style.backgroundColor=color[colorcount];
					f3.style.backgroundColor=color[colorcount];
					f4.style.backgroundColor=color[colorcount];
					f5.style.backgroundColor=color[colorcount];
					f6.style.backgroundColor=color[colorcount];
					f7.style.backgroundColor=color[colorcount];
					f8.style.backgroundColor=color[colorcount];
				}
				else
				{
					f1.style.backgroundColor=color[colorcount + 1];
					f2.style.backgroundColor=color[colorcount - 1];
					f3.style.backgroundColor=color[colorcount + 1];
					f4.style.backgroundColor=color[colorcount - 1];
					f5.style.backgroundColor=color[colorcount + 1];
					f6.style.backgroundColor=color[colorcount - 1];
					f7.style.backgroundColor=color[colorcount + 1];
					f8.style.backgroundColor=color[colorcount - 1];
				}
			}	
				
			if(flipflop == 0)
			{
				f1.style.left = parseInt(f1.style.left)+1+'px';
				f1.style.width = parseInt(f1.style.width)+1+'px';
				f1.style.height = parseInt(f1.style.height)+1+'px';
				
				f2.style.left = parseInt(f2.style.left)-1+'px';
				f2.style.width = parseInt(f2.style.width)+1+'px';
				f2.style.height = parseInt(f2.style.height)+1+'px';
				
				f3.style.top = parseInt(f3.style.top)+1+'px';
				f3.style.width = parseInt(f3.style.width)+1+'px';
				f3.style.height = parseInt(f3.style.height)+1+'px';
				
				f4.style.top = parseInt(f4.style.top)-1+'px';
				f4.style.width = parseInt(f4.style.width)+1+'px';
				f4.style.height = parseInt(f4.style.height)+1+'px';
				
				f5.style.top = parseInt(f5.style.top)-1+'px';
				f5.style.left = parseInt(f5.style.left)-1+'px';
				f5.style.width = parseInt(f5.style.width)+1+'px';
				f5.style.height = parseInt(f5.style.height)+1+'px';
				
				f6.style.top = parseInt(f6.style.top)-1+'px';
				f6.style.left = parseInt(f6.style.left)+1+'px';
				f6.style.width = parseInt(f6.style.width)+1+'px';
				f6.style.height = parseInt(f6.style.height)+1+'px';
				
				f7.style.top = parseInt(f7.style.top)+1+'px';
				f7.style.left = parseInt(f7.style.left)-1+'px';
				f7.style.width = parseInt(f7.style.width)+1+'px';
				f7.style.height = parseInt(f7.style.height)+1+'px';
				
				f8.style.top = parseInt(f8.style.top)+1+'px';
				f8.style.left = parseInt(f8.style.left)+1+'px';
				f8.style.width = parseInt(f8.style.width)+1+'px';
				f8.style.height = parseInt(f8.style.height)+1+'px';
				
			}	
			else
			{
				f1.style.left = parseInt(f1.style.left)-1+'px';
				f1.style.width = parseInt(f1.style.width)-1+'px';
				f1.style.height = parseInt(f1.style.height)-1+'px';
				
				f2.style.left = parseInt(f2.style.left)+1 +'px';
				f2.style.width = parseInt(f2.style.width)-1+'px';
				f2.style.height = parseInt(f2.style.height)-1+'px';
				
				f3.style.top = parseInt(f3.style.top)-1+'px';
				f3.style.width = parseInt(f3.style.width)-1+'px';
				f3.style.height = parseInt(f3.style.height)-1+'px';
				
				f4.style.top = parseInt(f4.style.top)+1+'px';
				f4.style.width = parseInt(f4.style.width)-1+'px';
				f4.style.height = parseInt(f4.style.height)-1+'px';
				
				f5.style.top = parseInt(f5.style.top)+1+'px';
				f5.style.left = parseInt(f5.style.left)+1+'px';
				f5.style.width = parseInt(f5.style.width)-1+'px';
				f5.style.height = parseInt(f5.style.height)-1+'px';
				
				f6.style.top = parseInt(f6.style.top)+1+'px';
				f6.style.left = parseInt(f6.style.left)-1+'px';
				f6.style.width = parseInt(f6.style.width)-1+'px';
				f6.style.height = parseInt(f6.style.height)-1+'px';
				
				f7.style.top = parseInt(f7.style.top)-1+'px';
				f7.style.left = parseInt(f7.style.left)+1+'px';
				f7.style.width = parseInt(f7.style.width)-1+'px';
				f7.style.height = parseInt(f7.style.height)-1+'px';
				
				f8.style.top = parseInt(f8.style.top)-1+'px';
				f8.style.left = parseInt(f8.style.left)-1+'px';
				f8.style.width = parseInt(f8.style.width)-1+'px';
				f8.style.height = parseInt(f8.style.height)-1+'px';	
			}
			
			timer = setTimeout(doMove,30); // call doMove in 20msec
		}	
			
		$("#gameStart").click(function (){

			gameState++;
			//buttons
			$("#mCalcButton").show();
			$("#mCalcButtonDead").hide();
			$("#gameStart").hide();
			$("#gameStop").show();
			//divs
			$("#panel").hide();
			$("#panelTitle").html("<p>Game Running:</p>");
			$("#mCalc").hide();
			$("#gamePanel").show();
			$("#bInfo").hide();
			//alerts
			$("#goodBrowser").hide();
			$("#greeting").hide();
			$("#gameRunning").show(); 
			//foos
			$("#startfoo").hide();

				
				f1 = document.getElementById("f1");
				f1.style.display = "inline-block";
				f1.style.left = "45%";
				f1.style.top = "120%";
				f1.style.height = "10px";
				f1.style.width = "10px"; 
				
				f2 = document.getElementById("f2");
				f2.style.display = "inline-block";
				f2.style.left = "45%"; 
				f2.style.top = "120%";
				f2.style.height = "10px";
				f2.style.width = "10px"; 
				
				f3 = document.getElementById("f3");
				f3.style.display = "inline-block";
				f3.style.left = "45%"; 
				f3.style.top = "120%";
				f3.style.height = "10px";
				f3.style.width = "10px"; 
				
				f4 = document.getElementById("f4");
				f4.style.display = "inline-block";
				f4.style.left = "45%"; 
				f4.style.top = "120%";
				f4.style.height = "10px";
				f4.style.width = "10px"; 
				
				f5 = document.getElementById("f5");
				f5.style.display = "inline-block";
				f5.style.left = "45%";
				f5.style.top = "120%"; 
				f5.style.height = "10px";
				f5.style.width = "10px"; 
				
				f6 = document.getElementById("f6");
				f6.style.display = "inline-block";
				f6.style.left = "45%"; 
				f6.style.top = "120%";
				f6.style.height = "10px";
				f6.style.width = "10px"; 
				
				f7 = document.getElementById("f7");
				f7.style.display = "inline-block";
				f7.style.left = "45%"; 
				f7.style.top = "120%";
				f7.style.height = "10px";
				f7.style.width = "10px"; 
				
				f8 = document.getElementById("f8");
				f8.style.display = "inline-block";
				f8.style.left = "45%"; 
				f8.style.top = "120%";
				f8.style.height = "10px";
				f8.style.width = "10px"; 
				
				doMove();
				// start animating
				
		}); 
			 
		$("#gameStopped").click(function(){
			$("#gameStopped").hide();
		});
		
		$("#gameStop").click(function ()
		{
			gameState = 0;
			$("#gameStart").show();
			$("#gameStop").hide();
			$("#gameStopped").show();
			$("#gameRunning").hide();
				

				clearTimeout(timer);
				flipflop = 0;
				totalTimes = 0;
				colorcount = 0;
				
				f1 = document.getElementById("f1");
				f2 = document.getElementById("f2");
				f3 = document.getElementById("f3");
				f4 = document.getElementById("f4");
				f5 = document.getElementById("f5");
				f6 = document.getElementById("f6");
				f7 = document.getElementById("f7");
				f8 = document.getElementById("f8");
				
				f1.style.display = "none";
				f2.style.display = "none";
				f3.style.display = "none";
				f4.style.display = "none";
				f5.style.display = "none";
				f6.style.display = "none";
				f7.style.display = "none";
				f8.style.display = "none";
		});
});