//When the program starts loads the menu and connects to the server

$(window).load(initateApplication());
		
function initateApplication(){
	loadStatus();
	loadMainMenu();
	removeBackButton();
}

function loadStatus(){
	$("#infoLabel").load("status.html");
}

function showBackButton(){
	$("#backButton").show();
}

function removeBackButton(){
	$("#backButton").hide();
}

$("#backButton").click(function(){
	loadStatus();
	loadMainMenu();
	removeBackButton();
});

function splashScreen() {
	//navigator.splashscreen.show();
}

function testServerResponse(response){
	$("#serverResponse").text(response);
}


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

function connectToCharger(){
	$.ajax({
		type: 'POST',
		url: 'http://danu6.it.nuigalway.ie/bonstrom/project/server.php',
		data: {'request': "status"},
		timeout: 3000,
		success: function(response){
				printResponse(jQuery.parseJSON(response));				
			 },
		error: function(){ 
				printError("Failed to connect to server. <br> Try and reconnect."); 
				}
		   });
}



