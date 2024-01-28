const fetchData = async () => {
	const url = 'https://hotels-com-provider.p.rapidapi.com/v2/domains';
	const options = {
	  method: 'GET',
	  headers: {
		'X-RapidAPI-Key': '0c3876aa9emshb6905ab28d9b12bp167883jsn70a680d29a53',
		'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
	  }
	};
  
	try {
	  const response = await fetch(url, options);
	  const result = await response.json();
  
	  // Update HTML content with hotel information using Bootstrap cards
	  const countriesContainer = document.getElementById('countriesContainer');
	  for (const countryCode in result) {
		const countryInfo = result[countryCode];
  
		const countryCard = document.createElement('div');
		countryCard.className = 'col-md-4';
  
		// Use a complete URL for the 'Visit Website' link
		const websiteUrl = `http://${countryInfo.url}`;
		
		countryCard.innerHTML = `
		  <div class="card country-card">
			<div class="card-body">
			  <h2 class="card-title">${countryCode} - ${countryInfo.url}</h2>
			  <p class="card-text"><strong>Domain:</strong> ${countryInfo.domain}</p>
			  <p class="card-text"><strong>Currency:</strong> ${countryInfo.currency}</p>
			  <!-- Add more information as needed -->
			  <a href="${websiteUrl}" class="card-link" target="_blank">Visit Website</a>
			</div>
		  </div>
		`;
  
		countriesContainer.appendChild(countryCard);
	  }
	} catch (error) {
	  console.error(error);
	}
  };
  
  // Call the async function
  fetchData();
  