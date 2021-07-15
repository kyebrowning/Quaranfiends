function init(){
	const xhr = new XMLHttpRequest();

	function readJSON(){
		if(xhr.readyState === 4){
		
			let resObj = JSON.parse(xhr.responseText);
			let p1Wrap = document.getElementById("player1Wrapper");
			let p2Wrap = document.getElementById("player2Wrapper");
			let bestOfObj = document.getElementById("bestOfTextBox");

			//Pull Player Names 1st Time
			document.getElementById("player1Team").innerHTML = resObj.p1Team;
			document.getElementById("player1Name").innerHTML = resObj.p1Name;
			document.getElementById("player2Team").innerHTML = resObj.p2Team;
			document.getElementById("player2Name").innerHTML = resObj.p2Name;
			document.getElementById("bestOfTextBox").innerHTML = resObj.round + "|" + resObj.bestOf;
			document.getElementById("player2Wrapper").style.fontSize = "38px";
			document.getElementById("player1Wrapper").style.fontSize = "38px";
			document.getElementById("bestOfTextBox").style.fontSize = "32px";
			
			//Scoring for Player 1
			document.getElementById("player1Score").innerHTML = resObj.p1Score;

			//Scoring for Player 2
			document.getElementById("player2Score").innerHTML = resObj.p2Score;

			while(p1Wrap.scrollWidth > p1Wrap.offsetWidth || p1Wrap.scrollHeight > p1Wrap.offsetHeight){
				let newFontSize = (parseFloat($(p1Wrap).css('font-size').slice(0,-2)) * .95) + 'px';
				$(p1Wrap).css('font-size', newFontSize);
			}

			while(p2Wrap.scrollWidth > p2Wrap.offsetWidth || p2Wrap.scrollHeight > p2Wrap.offsetHeight){
				let newFontSize = (parseFloat($(p2Wrap).css('font-size').slice(0,-2)) * .95) + 'px';
				$(p2Wrap).css('font-size', newFontSize);
			}

			while(bestOfObj.scrollWidth > bestOfObj.offsetWidth || bestOfObj.scrollHeight > bestOfObj.offsetHeight){
				let newFontSize = (parseFloat($(bestOfObj).css('font-size').slice(0,-2)) * .95) + 'px';
				$(bestOfObj).css('font-size', newFontSize);
			}
		
					
		}
		
	};
	
	xhr.onload = readJSON;
	xhr.open('get', '../sc/streamcontrol.json', true);
	xhr.send();

	

}

window.onload = init;

setInterval(()=>{init()}, 500);