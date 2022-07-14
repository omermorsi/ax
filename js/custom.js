
// Start general functions

// Make links active
function activelink(link) {
    var links = document.getElementById(link).children, // Get links
        active = document.getElementById(link).getElementsByClassName("active"); // Get the active link

    for (var i = 0; i < links.length; i++) { // Loop through links
        links[i].addEventListener("click", function () { // When link clicked
            active[0].classList.remove("active"); // Make current active link not active
            this.classList.add("active"); // Make clicked link active
        });
    }
}

//End general functions

// Start nav bar

// Show links
function showlinks() {
    var links = document.getElementById('links'); // Get links
    links.classList.toggle('showlinks'); // Show/Hide links
}

// Nav bar links active
activelink("links");

// End navbar

// Start galery

// Show tab
function showtab(tabnum) {
    var tabs = document.getElementsByClassName('discrib'); // Get tabs
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none"; // Make current active link not active
        tabs[tabnum].style.display = "block"; // Make clicked link actives
    }
}

// Galery tabs active
activelink("bul");

// End galery