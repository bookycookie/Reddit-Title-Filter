// Define your filters here
var filters = ['Reddit is killing third-party applications'];

// Every time the page loads or changes
window.addEventListener('load', removePosts);
window.addEventListener('popstate', removePosts);

function removePosts() {
    var titles = document.getElementsByClassName('title');
    for (var i = 0; i < titles.length; i++) {
        var titleText = titles[i].innerText || titles[i].textContent;
        filters.forEach(function(filter) {
            if (titleText.toLowerCase().includes(filter.toLowerCase())) {
                // Hide the entire post
                titles[i].closest('.thing').style.display = 'none';
            }
        });
    }
}