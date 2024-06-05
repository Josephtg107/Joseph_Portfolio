document.addEventListener('DOMContentLoaded', () => {
    // Function to simulate typing animation
    function typeText(element, text, speed) {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex < text.length) {
                element.textContent += text.charAt(currentIndex);
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);
    }

    // Text elements and their corresponding text and typing speeds
    const textElements = [
        { element: document.querySelector(".home-content h1"), text: "Hello, my name is José García", speed: 100 },
        { element: document.querySelector(".home-content h2 span"), text: "Ted.", speed: 100 },
        { element: document.querySelector(".home-content h3"), text: "iOS Developer", speed: 100 },
        { element: document.querySelector(".home-content p"), text: "iOS Developer | Mobile App Developer | Tech Enthusiast | Continuous Learner | Aspiring Traveler.", speed: 50 }
    ];

    // Start typing animation for each text element
    textElements.forEach(item => {
        typeText(item.element, item.text, item.speed);
    });

    // Rest of your code remains unchanged
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
