$("#manualCharge").click(function()
		{
			$("#content").load("manualCharge.html");
		});

$("#timedCharge").click(function()
		{
			$("#content").load("timedCharge.html");
		});

$("#esbnCharge").click(function()
		{
			$("#content").load("esbnCharge.html");
		});


function convertTime(timeLeft){
	var hours = Math.floor(timeLeft);
	var minutes = Math.round(60*(timeLeft-hours));
	
	if(hours>=1)
		return hours + "h " + minutes + "min";
	else 
		return minutes + "min";;
}

function loadChargeButtons(){
	$("#content").empty();
	
	var statsButton = $("<button class='mainButton'> Charger Statistics </button>")
					.click(function () { 
						loadStats();	
						showBackButton();	
						});
	
	var chargeButton = $("<button class='mainButton'> Set Charging Type </button>")
					.click(function () { 
						loadChargeButton();
						showBackButton();	
						});
	
	$("#content").append(statsButton);
	$("#content").append(chargeButton);
}
