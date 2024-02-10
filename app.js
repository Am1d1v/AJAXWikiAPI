

const url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=javascript';
const btn = document.querySelector('.btn');
const output = document.querySelector('.output')
const inputVal = document.querySelector('.val');


//Event Listeners
//Fetch Data
btn.addEventListener('click', async() => {
    const fetchData = await fetch(url);
    const JSONData = await fetchData.json();
    
    search(JSONData);
});

// Make a search request
function search(data){
    console.log(data.query.search);
}

