const pageViewsCount = document.getElementById('pageviews-count'); // Corrected variable name
pageViewsCount.textContent = '100'; // Updated variable name in setting text content

const visitsCount = document.getElementById('visits-count');
visitsCount.textContent = '50';

if (sessionStorage.getItem('visit') === null) {
    // New visit and pageview
    updateCounter('type=visit-pageview');
} else {
    updateCounter('type=pageview');
}

function updateCounter(type) {
    fetch('http://127.0.0.1:3002/api?' + type) // Added '/api' in the fetch URL
        .then(res => res.json())
        .then(data => {
            pageViewsCount.textContent = data.pageviews;
            visitsCount.textContent = data.visits;
        })
        .catch(error => console.error('Error:', error)); // Added error handling
}

sessionStorage.setItem('visit', 'x');
