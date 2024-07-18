document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchType = document.getElementById('searchType').value;
    const location = document.getElementById('location').value;
    const departureDate = document.getElementById('departureDate').value;
    const returnDate = document.getElementById('returnDate').value;

    const queryParams = new URLSearchParams({
        searchType,
        location,
        departureDate,
        returnDate
    }).toString();

    window.location.href = `search-results.html?${queryParams}`;
});

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchType = urlParams.get('searchType');
    const location = urlParams.get('location');
    const departureDate = urlParams.get('departureDate');
    const returnDate = urlParams.get('returnDate');

    if (searchType && location && departureDate && returnDate) {
        const resultsDiv = document.getElementById('results');
        const resultItem = document.createElement('div');
        resultItem.textContent = `${searchType.charAt(0).toUpperCase() + searchType.slice(1)} in ${location} from ${departureDate} to ${returnDate}`;
        resultsDiv.appendChild(resultItem);
    }
});
