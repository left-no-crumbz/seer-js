const submitBtn = document.getElementById("submit-btn");
const searchBox = document.getElementById("search-box");


const targetUrl = "http://webcache.googleusercontent.com/search?q=cache%3Ahttps%3A%2F%2Fmedium.com%2Fwrite-a-catalyst%2Fi-made-a-graph-of-medium-this-is-what-i-found-73bd560b111e&newwindow=1&sxsrf=ADLYWIJMojOS2naKCrX9me3W0u7Ni31oAA%3A1717471752464&iflsig=AL9hbdgAAAAAZl6YGGxih9SfhQZ0YI0wYzKPhAzc7qKK&uact=5";
// const proxyUrl = "https://proxy.cors.sh/";
// const url = `${proxyUrl}${encodeURIComponent(targetUrl)}`;

submitBtn.addEventListener("click", fetchData);

async function fetchData(event) {
    event.preventDefault();
    try {
        const response = await fetch(targetUrl);

        if (!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}