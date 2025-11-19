
 
  /* LIVE-TIME*/
	
		function updateTime() {
			const now = new Date();
			document.getElementById("current-time").textContent = now.toLocaleString();
		}
		updateTime();
		setInterval(updateTime, 1000);
		