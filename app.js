document.getElementById("search").addEventListener("click", function () {
	fetch("superheroes.php")
		.then(response => {
			if (response.ok) {
				return response.text()
			} else {
				return Promise.reject("something went wrong!")
			}
		})
		.then(data => {
			alert(data.join ("\n"));
		})
		.catch(error => {
			console.log("There was an error with the fecth operation: ", + error):
			alert("Failed to fetch superheroes.");
		});
});
			
		