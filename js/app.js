const submitBtn = document.getElementById("submit-btn");
const searchBar = document.getElementById("search-box");
const iframe = document.getElementById("iframe");

const googleWebCache = "https://webcache.googleusercontent.com/search?q=cache:";
const archiveCache = "https://archive.is/submit/?url=";

// TODO: 
// - Use diff caches
// - improve styling prolly
// - endgame how to display the text instead of just redirecting

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const targetURL = searchBar.value;
    const url = encodeURI(`${archiveCache}${targetURL}`);
    window.open(url, "_blank");
});
