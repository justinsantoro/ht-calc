$(document).ready(function ()
{

	$("#herbCalcButton").click(function(){
		
		$("#panel").show();
		$("#panelTitle").html("<p>Enter values below to calculate havest total for <strong><em>Herbs:</em></strong></p>");
		$("#herbCalc").show();
		$("#herbCalcButton").hide();
		$("#herbCalcButtonDead").show();
	});
					

	$("#calcButton").click(function()
	{ //start herb calculate

		


		
		var plants = document.getElementsByName('plants')[0].value;
		var price = document.getElementsByName('price')[0].value;
		var  micrograins = $("#micrograinsCheck").prop('checked');
		var plantsPer = 0;
		var ht = 0;
		var sfTotal = document.getElementsByName('squarefoot')[0].value;
		
		// Now compute plantsPer

		//check for micrograins
		if(micrograins === true){
			var sf = document.getElementsByName('squarefoot')[0].value / 2;
		}
		else
		{
			var sf = document.getElementsByName('squarefoot')[0].value;
		}

		// Check that all inputs are filled
		if((sfTotal === 0) || (plants === 0) || (price === 0)) 
		{
			ClearResults();
			alert("Please enter all values");
			return false;
		}

		// Now compute the ht
		plantsPer = (plants * sf); 			
		ht = round((plantsPer*price));
	
		//validation			
		var re5digit=/^\d*$/;  //regular expression defining a digit number
                
		if (document.getElementsByName('squarefoot')[0].value.search(re5digit) === -1 || document.getElementsByName('plants')[0].value.search(re5digit) === -1 || document.getElementsByName('price')[0].value.search(price) === -1)
		{ //if match failed
			alert("something is wrong");
			$('#Calc input').each(function () 
			{
   				$(this).val("");
         		x=1;
    		});
        $('#Calc input').first().focus();
		}	
			// The user's input was prabably bad.		
			else
			{
               $("#inputs").show();
				$("#clearButton").show();

				document.getElementById("sfSpan").innerText = "Total Square Feet = " + sfTotal;
				document.getElementById("plantSpan").innerText = "Plants/SqFoot = " + plants;
				document.getElementById("priceSpan").innerText = "Price/Unit =  " + price;
				
				$("#results").show();
				if(micrograins === true){
					document.getElementById("htSpan").innerText = "(" + (sf)  + " sq * " + plants + " plants)"  +price +" dollars/Oz = $" + ht;  
				}
				else
				{
					document.getElementById("htSpan").innerText = "(" + sf  + " sq * " + plants + " plants)"  +price +" dollars/plant = $" + ht;
				}

			}
	$("#clearButton").click(function ClearResults (){
		$("#results").hide();
		document.getElementsByName('principle').innerText = "";
		document.getElementsByName('nterestRate').innerText = "";
		document.getElementsByName('years').innerText = "";
		document.getElementsByName('months').innerText = "";
		$("#inputs").hide();
		$("#clearButton").hide();

		$('#Calc input').each(function () 
			{
   				$(this).val("");
         		x=1;
    		});
        $('#Calc input').first().focus();

		
	}); // end function clearCalc

	}); // end function calculate();
	
	function round(x) 
	{ 
		return Math.round(x * 100) / 100; 
	}

}); // end document.ready