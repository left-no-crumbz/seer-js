if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(reg => console.log('Service Worker registered', reg))
        .catch(err => console.log('Service Worker registration failed', err));
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const sharedUrl = urlParams.get('url');

    if (sharedUrl) {
        const archiveUrl = `https://archive.is/submit/?url=${encodeURIComponent(sharedUrl)}`;
        fetchAndDisplayContent(archiveUrl);
    }
});

function fetchAndDisplayContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching content:', error);
            const contentDiv = document.getElementById('content');
            contentDiv.textContent = 'Error loading content. Please try again.';
        });
}