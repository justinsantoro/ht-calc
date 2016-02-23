$(document).ready(function () {

	$("#mCalcButton").click(function(){
		
		$("#panel").show();
		$("#panelTitle").html("<p>Enter values below to calculate mortgage:</p>");
		$("#mCalc").show();
		$("#mCalcButton").hide();
		$("#mCalcButtonDead").show();
		$("#gameStart").show();
		$("#gameStop").hide();
		$("#gamePanel").hide();
		$("#bInfo").hide();
		$("#goodBrowser").hide();
	});
	
	$("#gameStart").click(function (){
		$("#panel").show();
		$("#panelTitle").html("<p>Game Running:</p>");
		$("#mCalc").hide();
		$("#mCalcButton").show();
		$("#mCalcButtonDead").hide();
		$("#gameStart").hide();
		$("#gameStop").show();
		$("#gamePanel").show();
		$("#bInfo").hide();
		$("#goodBrowser").hide();


	});
	$("#gameStop").click(function (){
		$("#gameStart").show();
		$("#gameStop").hide();
		$("#panelTitle").html("<p>Game Stopped:</p>");
		$("#gamePanel").hide();
	});
			
			
				
	$("#browserInfo").click(function() {
		$("#panel").show();
		$("#panelTitle").html("<p>browser Info:</p>");
		$("#mCalc").hide();
		$("#mCalcButton").show();
		$("#mCalcButtonDead").hide();
		$("#gameStart").show();
		$("#gameStop").hide();
		$("#gamePanel").hide();
		$("#bInfo").show();
		$("#goodBrowser").hide();

		var browser=navigator.appName;
		var b_version=navigator.appVersion;
		var version=parseFloat(b_version);

		
		//bInfo.innerHTML="";
		bInfo.innerHTML="CodeName=" + navigator.appCodeName;
		bInfo.innerHTML+="<br />";
		bInfo.innerHTML+="MinorVersion=" + navigator.appMinorVersion;
		bInfo.innerHTML+="<br />";
		bInfo.innerHTML+="Name=" + navigator.appName;
		bInfo.innerHTML+="<br />";
		bInfo.innerHTML+="Version=" + navigator.appVersion;
		bInfo.innerHTML+="<br />";
		bInfo.innerHTML+="CookieEnabled=" + navigator.cookieEnabled;
		bInfo.innerHTML+="<br />";
		bInfo.innerHTML+="CPUClass=" + navigator.cpuClass;
		bInfo.innerHTML+="<br />";
		bInfo.innerHTML+="OnLine=" + navigator.onLine;
		bInfo.innerHTML+="<br />";
		bInfo.innerHTML+="Platform=" + navigator.platform;
		bInfo.innerHTML+="<br />";
		bInfo.innerHTML+="UA=" + navigator.userAgent;
		bInfo.innerHTML+="<br />";
		bInfo.innerHTML+="BrowserLanguage=" + navigator.browserLanguage;
		bInfo.innerHTML+="<br />";
		bInfo.innerHTML+="SystemLanguage=" + navigator.systemLanguage;
		bInfo.innerHTML+="<br />";
		bInfo.innerHTML+="UserLanguage=" + navigator.userLanguage;
				
		if ((browser=="Netscape"||browser=="Microsoft Internet Explorer") && (version>=4))
		{
			goodBrowser.style.display="block";
		}
		else
		{
			alert("It's time to upgrade your browser!");
		}
	});
	$("#goodBrowser").click(function (){
		goodBrowser.style.display="none";
	});

	$("#calcButton").click(function(){ //start calculate

	var principal = document.getElementsByName('principle')[0].value * 1; // If empty then mutlipling by 1 will set it to zero
	var interest = document.getElementsByName('interestRate')[0].value / 100 / 12;
	var years = document.getElementsByName('years')[0].value * 12;
	var months = document.getElementsByName('months')[0].value * 1;
	var payments = years + months;
	var monthly = 0;
	// Now compute the monthly

		// Check that all inputs are filled
		if((principal === 0) || (interest === 0) || (payments === 0)) {
			ClearResults();
			alert("Please enter all values");
			return false;
		}

		// Now compute the monthly			
		var x = Math.pow(1+ interest, payments);
		monthly = (principal*x*interest)/(x-1);
		//validation			
		var re5digit=/^\d*$/;  //regular expression defining a digit number
                
		if (document.getElementsByName('principle')[0].value.search(re5digit) == -1) //if match failed
			alert("Please enter a digit number inside principal");

			// check if the result is a finite number			
			if (!isNaN(monthly) && (monthly != Number.POSITIVE_INFINITY) && (monthly != Number.NEGATIVE_INFINITY)) {
				document.getElementById('TotalMonthSpan').innerText = "Total per Month..: $" + round(monthly) + "  (" + payments + " payments)";
				document.getElementById('TotalMortgageSpan').innerText = "Total Mortgage ...: $" + round(monthly * payments);
				document.getElementById('TotalInterestSpan').innerText = "Total Interest........: $" + round((monthly * payments) - principal);
			}
			// The user's input was prabably bad.		
			else {
                alert("Years or Interest value(s) is too large!");
				ClearResults();
			}
		

	}); // end function calculate();
	$("")

});
window.getList = function round(x) { return Math.round(x * 100) / 100; };
window.getList =function ClearResults() {
		document.getElementById('TotalMonthSpan').innerText = "";
		document.getElementById('TotalMortgageSpan').innerText = "";
		document.getElementById('TotalInterestSpan').innerText = "";
	};