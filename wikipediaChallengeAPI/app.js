async function handlesubmit(event) {
    event.preventDefault();
    const inputValue = document.querySelector('.js-search-input').value;

    const searchQuery = inputValue.trim();

    try {
        const result = await searchWikipedia(searchQuery);
        displayResults(result);
    } catch (error) {
        console.log(error);
    }
}

function displayResults(results) {

    const searchResults = document.querySelector('.js-search-results');

    results.query.search.forEach(result => {
        const url = `https://en.wikipedia.org/wiki/${result.pageid}`;
        searchResults.insertAdjacentHTML(
            'beforeend',
            `
            <div class="result-item">
                <h3 class="result-title">
                    <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
                </h3>
                <span class="result-snippet">${result.snippet}</span><br>
                <a href="${url}" class="result-link" target="_blank" rel="noopener">${url}</a>
            </div>
            `
        );
    });

}

async function searchWikipedia(searchQuery) {
    document.querySelector('.js-search-results').innerHTML = '';
    const endpoint = `https://fr.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch=${searchQuery}`;
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw Error(response.statusText);
    }
    const json = await response.json();
    return json;
}

const form = document.querySelector('.js-search-form');
form.addEventListener('submit', handlesubmit);