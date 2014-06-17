function loadStats()
{
    $.ajax({
        type: 'POST',
        data: {'request': 'statistics'},
		url: 'http://danu6.it.nuigalway.ie/bonstrom/project/server.php',
		timeout: 3000,
			 success: function(response){
				printStats(jQuery.parseJSON(response));			
			 },
			 error: function(){
				printResponse("Failed to connect to server");
			 }  
    });
}

function printStats(response){
	//Clear the content divider of previous information
	$("#content").empty();
	//Puts a divider inside the content divider and creates holders for the data from the response
	$("#content").append("<div class='statisticsLabel' id='statisticsLabel'> </div>");	
		$("#statisticsLabel").append("Charge Rate:  		<span id='rate'> 			</span>  <br>");	 	
		$("#statisticsLabel").append("Target Charge:		<span id='targetCharge'>	</span> %<br>");
		$("#statisticsLabel").append("Estimated Time Left: 	<span id='timeLeft'> 		</span>");
	//Populates the holders with the data from response
			$("#rate").text(response.chargingRate);
			$("#targetCharge").text(response.targetCharge);
			$("#timeLeft").text(convertTime(response.timeLeft));

}

//Returns the format: "xx h yy min" 
//The time arrives in hours with decimals.  
function convertTime(timeLeft){
	var hours = Math.floor(timeLeft);
	var minutes = Math.round(60*(timeLeft-hours));
	
	if(hours>=1)
		return hours + " h " + minutes + " min";
	else 
		return minutes + " min";;
}
