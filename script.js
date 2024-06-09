document.addEventListener('DOMContentLoaded', () => {
    // Function to simulate typing animation
    function typeText(element, text, speed, callback) {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex < text.length) {
                element.textContent += text.charAt(currentIndex);
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                if (callback) callback();
            }
        }, speed);
    }

    // Text elements and their corresponding text and typing speeds
    const textElements = [
        { element: document.querySelector(".home-content h1"), text: "Hello, my name is José García", speed: 45 },
        { element: document.querySelector(".home-content h2 span"), text: "Ted.", speed: 65 },
        { element: document.querySelector(".home-content h3"), text: "iOS Developer", speed: 90 },
        { element: document.querySelector(".home-content p"), text: "iOS Developer | Mobile App Developer | Tech Enthusiast | Continuous Learner | Aspiring Traveler.", speed: 15 }
    ];

    // Counter to track the completion of typing animations
    let completedAnimations = 0;
    const totalAnimations = textElements.length;

    // Function to start name changing animation
    function startNameChangingAnimation() {
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

        setInterval(changeName, 350); // Adjust the interval to 3500ms to better reflect the change timing
        changeName();
    }

    // Function to check if all animations are complete
    function checkAllAnimationsComplete() {
        completedAnimations++;
        if (completedAnimations === totalAnimations) {
            startNameChangingAnimation();
        }
    }

    // Start typing animation for each text element simultaneously
    textElements.forEach(item => {
        typeText(item.element, item.text, item.speed, checkAllAnimationsComplete);
    });

    // Mobile navbar toggle
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbar = document.querySelector('.navbar');

    if (navbarToggle) {
        navbarToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }
});
