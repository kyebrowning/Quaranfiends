function init(){
	const xhr = new XMLHttpRequest();

	function readJSON(){
		if(xhr.readyState === 4){
		
			let resObj = JSON.parse(xhr.responseText);
			let p1Wrap = document.getElementById("player1Box");
			let p2Wrap = document.getElementById("player2Box");
			//Pull Player Names 1st Time
			document.getElementById("p1Team").innerHTML = resObj.p1Team;
			document.getElementById("p1Name").innerHTML = resObj.p1Name;
			document.getElementById("p2Team").innerHTML = resObj.p2Team;
			document.getElementById("p2Name").innerHTML = resObj.p2Name;
			document.getElementById("p2Score").innerHTML = resObj.p1Score;
			document.getElementById("p1Score").innerHTML = resObj.p2Score;
			document.getElementById("player2Box").style.fontSize = "98px";
			document.getElementById("player1Box").style.fontSize = "98px";
			document.getElementById("p1Character").innerHTML = "<img id='p1IMG' src='../imgs/characters/SSBU_" + resObj.p1Character + ".png' height='900px' width='auto'>"; //using this to add images to the overlay
			document.getElementById("p2Character").innerHTML = "<img id='p2IMG' src='../imgs/characters/SSBU_" + resObj.p2Character + ".png' height='900px' width='auto'>"; //using this to add images to the overlay
			
			
			while(p1Wrap.scrollWidth > p1Wrap.offsetWidth || p1Wrap.scrollHeight > p1Wrap.offsetHeight){
				let newFontSize = (parseFloat($(p1Wrap).css('font-size').slice(0,-2)) * .95) + 'px';
				$(p1Wrap).css('font-size', newFontSize);
			}

			while(p2Wrap.scrollWidth > p2Wrap.offsetWidth || p2Wrap.scrollHeight > p2Wrap.offsetHeight){
				let newFontSize = (parseFloat($(p2Wrap).css('font-size').slice(0,-2)) * .95) + 'px';
				$(p2Wrap).css('font-size', newFontSize);
			}
					
		}
		
	};
	
	xhr.onload = readJSON;
	xhr.open('get', '../sc/streamcontrol.json', true);
	xhr.send();

	

}

window.onload = init;

setInterval(()=>{init()}, 500);