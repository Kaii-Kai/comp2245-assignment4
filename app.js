document.getElementById("search").addEventListener("click", function () {
	const query= document.getElementById("search").value.trim();
	const resultDiv = document.getElementById("result");
	
	resultDiv.innerHTML = "Loading....";
	
	const encodeQuery = encodeURIComponent(query);
	
	fetch("superheroes.php?query=${encodedQuery}")
		.then(response => {
			if (response.ok) {
				return response.text()
			} else {
				return Promise.reject("something went wrong!")
			}
		})
		.then(data => {
			resultDiv.iinerHTML="";
			
			if (data.error) {
				resultDiv.innerHTML = `<p class="error">${data.error}</p>`;
				
			}else if (Array.isArray(data)){
				const list = data.map(superhero => `<p>${superhero}>/p>`).join("");
				resultDiv.innerHtml = `<h3>Result</h3>${list}`;
				
			}else {
				resultDiv.innerHTML=`
					<h3>${data.alias}</h3>
					<h4>${data.name}</h4>
					<p>${data.biography}</p>`;
			}
		})
		.catch(error => {
			console.log("There was an error with the fecth operation: ", + error):
			resultDiv.innerHTML =`<p class="error">Superhero not found."</p>`;
		});
});
			
		