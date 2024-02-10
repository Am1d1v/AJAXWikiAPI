

const url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=';
const btn = document.querySelector('.btn');
const output = document.querySelector('.output')
const inputVal = document.querySelector('.val');


//Event Listeners



//Fetch Data
btn.addEventListener('click', async() => {

    let searchTerm = inputVal.value || 'Wiki';

    const fetchData = await fetch(url + searchTerm);
    const JSONData = await fetchData.json();
    
    search(JSONData.query.search);
});

// Make a search request
function search(data){
    output.innerHTML = '<h3>Results for: </h3>';

    data.forEach((dataItem) => {
        console.log(dataItem);

        // inner content
        const div = document.createElement('div');
        div.innerHTML += `<a href='https://en.wikipedia.org/wiki?curid=${dataItem.pageid}'>
                            <h4>${dataItem.title}</h4>
                         </a>`;
        div.innerHTML += `<span>${dataItem.snippet}</span>`;

        // add class for style
        div.classList.add('box');

        output.appendChild(div);
    });

    
}

