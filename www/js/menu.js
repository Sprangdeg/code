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

	//Creates buttons in the content divider
	$("#content").append("<button class='mainButton'> Charger Statistics </button>")
					.click(function () { 
						loadStats();	
						showBackButton();	
						});
	
	$("#content").append("<button class='mainButton' id='chargeButton'>  Set Charging Type	</button>").click(function () { alert('1'); }); 	
	$("#content").append("<button class='mainButton' id='test'>		   Test Server			</button>").click(function () { alert('2'); });
	$("#content").append("<button class='mainButton' id='connectServer'> Connect to server	</button>").click(function () { alert('3'); });
}
		