function init(){
	const xhr = new XMLHttpRequest();

	function readJSON(){
		if(xhr.readyState === 4){
		
			let resObj = JSON.parse(xhr.responseText);
			let p1Wrap = document.getElementById("player1Wrapper");
			let p2Wrap = document.getElementById("player2Wrapper");
			//Pull Player Names 1st Time
			document.getElementById("player1Team").innerHTML = resObj.p1Team;
			document.getElementById("player1Name").innerHTML = resObj.p1Name;
			document.getElementById("player2Team").innerHTML = resObj.p2Team;
			document.getElementById("player2Name").innerHTML = resObj.p2Name;
			document.getElementById("player2Wrapper").style.fontSize = "98px";
			document.getElementById("player1Wrapper").style.fontSize = "98px";
			document.getElementById("player1Character").innerHTML = "<img id='p1IMG' src='../imgs/characters/SSBU_" + resObj.p1Character + ".png' height='900px' width='auto'>"; //using this to add images to the overlay
			document.getElementById("player2Character").innerHTML = "<img id='p2IMG' src='../imgs/characters/SSBU_" + resObj.p2Character + ".png' height='900px' width='auto'>"; //using this to add images to the overlay
			
			
			while(p1Wrap.scrollWidth > p1Wrap.offsetWidth || p1Wrap.scrollHeight > p1Wrap.offsetHeight){
				let newFontSize = (parseFloat($(p1Wrap).css('font-size').slice(0,-2)) * .95) + 'px';
				$(p1Wrap).css('font-size', newFontSize);
			}

			while(p2Wrap.scrollWidth > p2Wrap.offsetWidth || p2Wrap.scrollHeight > p2Wrap.offsetHeight){
				let newFontSize = (parseFloat($(p2Wrap).css('font-size').slice(0,-2)) * .95) + 'px';
				$(p2Wrap).css('font-size', newFontSize);
			}
		

			//Scoring for Player 1
			if(resObj.p1Score === "0" ){
				document.getElementById('p1SB1').style.backgroundColor = "#2d506e";
				document.getElementById('p1SB2').style.backgroundColor = "#2d506e";
				document.getElementById('p1SB3').style.backgroundColor = "#2d506e";
			} else if(resObj.p1Score === "1"){
				document.getElementById('p1SB1').style.backgroundColor = "#fecc08";
				document.getElementById('p1SB2').style.backgroundColor = "#2d506e";
				document.getElementById('p1SB3').style.backgroundColor = "#2d506e";
			} else if(resObj.p1Score === "2"){
				document.getElementById('p1SB1').style.backgroundColor = "#fecc08";
				document.getElementById('p1SB2').style.backgroundColor = "#fecc08";
				document.getElementById('p1SB3').style.backgroundColor = "#2d506e";
			} else if(resObj.p1Score === "3"){
				document.getElementById('p1SB1').style.backgroundColor = "#fecc08";
				document.getElementById('p1SB2').style.backgroundColor = "#fecc08";
				document.getElementById('p1SB3').style.backgroundColor = "#fecc08";
			}

			//Scoring for Player 2
			if(resObj.p2Score === "0" ){
				document.getElementById('p2SB1').style.backgroundColor = "#2d506e";
				document.getElementById('p2SB2').style.backgroundColor = "#2d506e";
				document.getElementById('p2SB3').style.backgroundColor = "#2d506e";
			} else if(resObj.p2Score === "1"){
				document.getElementById('p2SB1').style.backgroundColor = "#fecc08";
				document.getElementById('p2SB2').style.backgroundColor = "#2d506e";
				document.getElementById('p2SB3').style.backgroundColor = "#2d506e";
			} else if(resObj.p2Score === "2"){
				document.getElementById('p2SB1').style.backgroundColor = "#fecc08";
				document.getElementById('p2SB2').style.backgroundColor = "#fecc08";
				document.getElementById('p2SB3').style.backgroundColor = "#2d506e";
			} else if(resObj.p2Score === "3"){
				document.getElementById('p2SB1').style.backgroundColor = "#fecc08";
				document.getElementById('p2SB2').style.backgroundColor = "#fecc08";
				document.getElementById('p2SB3').style.backgroundColor = "#fecc08";
			}

					
		}
		
	};
	
	xhr.onload = readJSON;
	xhr.open('get', '../sc/streamcontrol.json', true);
	xhr.send();

	

}

window.onload = init;

setInterval(()=>{init()}, 500);