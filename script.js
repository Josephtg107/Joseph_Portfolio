

document.addEventListener('DOMContentLoaded', () => {
    // Function to change name
    const names = ["Ted.", "Joe.", "Theodore", "Joseph.", "Teddy.", "Josepho.", "Theo.", "Jouse."];
    let currentIndex = 0;
    const nameElement = document.getElementById("changingName");

    function changeName() {
        // Fade out
        nameElement.style.opacity = 0;
        setTimeout(() => {
            // Change text
            nameElement.textContent = names[currentIndex];
            // Fade in
            nameElement.style.opacity = 1;
            // Update index
            currentIndex = (currentIndex + 1) % names.length;
        }, 350); // Half of the transition time to change the text in between the fade-out and fade-in
    }

    setInterval(changeName, 350); // Adjust the interval to 2850ms to better reflect the change timing
    changeName();

    // Mobile navbar toggle
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbar = document.querySelector('.navbar');

    if (navbarToggle) {
        navbarToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }
});
