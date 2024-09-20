// Function to filter farmers based on search input
function filterFarmers() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        const farmerName = cards[i].getAttribute('data-name').toLowerCase();
        const farmerLocation = cards[i].getAttribute('data-location').toLowerCase();

        // Show or hide card based on matching name or location
        if (farmerName.includes(searchInput) || farmerLocation.includes(searchInput)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// Collapsible content functionality
const collapseButtons = document.getElementsByClassName('collapse-btn');
for (let i = 0; i < collapseButtons.length; i++) {
    collapseButtons[i].addEventListener('click', function () {
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}