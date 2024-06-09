VANTA.WAVES({
    el: "#vanta-bg",
    mouseControls: false,
    touchControls: false,
    gyroControls: false,
    minHeight: 100.00,
    minWidth: 100.00,
    scale: 3.00,
    scaleMobile: 1.00,
    color: 0x1f2335,
    shininess: 3.00,
    waveHeight: 15.00,
    waveSpeed: 0.3,
    zoom: 1.00,
    backgroundColor: 0x1f2335
});

document.addEventListener('DOMContentLoaded', function() {
    let dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        let button = dropdown.querySelector('.dropbtn');
        let content = dropdown.querySelector('.dropdown-content');

        button.addEventListener('click', function(event) {
            event.stopPropagation();
            content.classList.toggle('show');

            // Close other dropdowns
            dropdowns.forEach(function(otherDropdown) {
                if (otherDropdown !== dropdown) {
                    let otherContent = otherDropdown.querySelector('.dropdown-content');
                    otherContent.classList.remove('show');
                }
            });
        });
    });

    // Close dropdowns when clicking outside
    window.addEventListener('click', function() {
        dropdowns.forEach(function(dropdown) {
            let content = dropdown.querySelector('.dropdown-content');
            content.classList.remove('show');
        });
    });
});

let toggler = document.getElementsByClassName("caret");

for (let i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
        let nestedList = this.parentElement.querySelector(".nested");
        if (nestedList) {
            // Toggle the active class for the clicked nested list
            nestedList.classList.toggle("active");

            // Toggle the caret icon
            this.classList.toggle("caret-down");

            // Toggle the caret icon class
            let icon = this.querySelector("i");
            icon.classList.toggle("fa-caret-down");
            icon.classList.toggle("fa-caret-up");
        }
    });
}







