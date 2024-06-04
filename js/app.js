const submitBtn = document.getElementById("submit-btn");
const searchBar = document.getElementById("search-box");


const googleWebCache = "https://webcache.googleusercontent.com/search?q=cache:";

submitBtn.addEventListener("click", (event) => {
    const targetURL = searchBar.value;
    const url = encodeURI(`${googleWebCache}${targetURL}`);
    event.preventDefault();
    console.log(url);
    window.location.replace(url);
});