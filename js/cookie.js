$(document).ready(function () {

	$("#cookieCheck").click(function ()
	{
		checkCookie();
		$("#cookieCheck").hide();
		$("#cookieVerify").show();
	});
	$("#cookieVerify").click(function ()
	{
		checkCookie();
		$("#cookieVerify").hide();
		$("#cookieClear").show();
	});
	$("#cookieClear").click(function ()
	{
		setCookie("username", null, 0);
		$("#cookieClear").hide();
		$("#cookieCheck").show();
	});
	$("#greeting").click(function ()
	{
		$("#greeting").hide();
	});

	function getCookie(c_name)
	{
		if (document.cookie.length>0)
		{
		
			var c_start=document.cookie.indexOf(c_name + "=");
				if (c_start!==-1)
				{
				
					var c_start=c_start + c_name.length+1 ;
					var c_end=document.cookie.indexOf(";",c_start);
					if (c_end==-1)
					{
						c_end=document.cookie.length;
						return unescape(document.cookie.substring(c_start,c_end));
					}
					
				}
				
			return "";
		}
	}

	function checkCookie()
	{
		var username=getCookie('username');
		if (username!=null && username!="")
		{
			$("#greeting").show();
			$("#username").text(username);
		}
		else
		{
			username=prompt('Please enter your name:',"");
			if (username!=null && username!="")
			{
				setCookie('username',username,20);
			}
		}
	}

	function setCookie(c_name,value,expiredays)
	{
		var exdate=new Date();
		exdate.setDate(exdate.getDate()+expiredays);
		document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : "; expires="+exdate.toGMTString());
	}
});