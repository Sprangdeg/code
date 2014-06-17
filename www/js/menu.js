$("#statsButton").click(function()
		{
			alert("hi");
			loadStats();	
			showBackButton();		
		});

$("#chargeButton").click(function()
		{
			showBackButton();			
			$("#content").load("setCharge.html");
		});
		
$("#connectServer").click(function()
		{
		$.ajax({
		type: 'POST',
		data: {'request': "status"},
		url: 'http://danu6.it.nuigalway.ie/bonstrom/project/server.php',
		timeout: 3000,
		success: function(response){
					printResponse(response);
			 },
		error: function(){ printError("Failed to connect to server. <br> Try and reconnect."); }
		   });
		});
		
$("#test").click(function()
		{
			
		$.ajax({
		type: 'POST',
		data: {'request': "statistics"},
		url: 'http://danu6.it.nuigalway.ie/bonstrom/project/server.php',
		timeout: 3000,
		success: function(response){
					$("#serverResponse").text(response);
			 },
		error: function(){ printError("Failed to connect to server. <br> Try and reconnect."); }
		   });		
		});
		
function loadMainMenu(){
	$("#content").empty();

	//Creates buttons
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
	$("#content").append(charge);
	$("#content").append(charge);
}
		