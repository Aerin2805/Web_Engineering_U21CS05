const fetchData = async () => {
    const url = 'https://community-vesica.p.rapidapi.com/pieces?user_api_key=%3CREQUIRED%3E&account_api_key=%3CREQUIRED%3E';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0c3876aa9emshb6905ab28d9b12bp167883jsn70a680d29a53',
		'X-RapidAPI-Host': 'community-vesica.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	const formateresult = JSON.stringify(result,null,2);
    console.log(formateresult);
} catch (error) {
	console.error(error);
}
}

fetchData();