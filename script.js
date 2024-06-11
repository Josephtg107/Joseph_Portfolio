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
        { element: document.querySelector(".home-content h2 span"), text: "Ted.", speed: 45 },
        { element: document.querySelector(".home-content h3"), text: "iOS Developer", speed: 60 },
        { element: document.querySelector(".home-content p"), text: "iOS Developer | Mobile App Developer | Tech Enthusiast | Continuous Learner | Aspiring Traveler | Adventurer | Gym Enthusiast.", speed: 5 }
    ];

    // Function to start name changing animation
    function startNameChangingAnimation() {
        const names = ["Ted.", "Joe.", "Theodore.", "Joseph.", "Teddy.", "Josepho.", "Theo.", "Jouse."];
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

        setInterval(changeName, 850); // Adjust the interval to 3500ms to better reflect the change timing
        changeName();
    }

    // Start typing animation for each text element sequentially
    function startTypingAnimations(index) {
        if (index < textElements.length) {
            const item = textElements[index];
            typeText(item.element, item.text, item.speed, () => {
                if (index === 0) {
                    // Create and append "But you can call me..." part after the first text is typed
                    const callMeText = document.createElement("span");
                    callMeText.classList.add("fade-in");
                    callMeText.innerHTML = ' But you can call me <span id="changingName"></span>';
                    item.element.appendChild(callMeText);

                    // Trigger the fade-in effect
                    setTimeout(() => {
                        callMeText.classList.add('visible');
                    }, 950);
                }
                startTypingAnimations(index + 1); // Start the next animation after the current one finishes
            });
        } else {
            startNameChangingAnimation(); // Start name changing animation after all typing animations are complete
        }
    }

    startTypingAnimations(0); // Start the typing animations from the first element

    // Mobile navbar toggle
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbar = document.querySelector('.navbar');

    if (navbarToggle) {
        navbarToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }
});


// Swiper Slider
document.addEventListener('DOMContentLoaded', () => {
    var swiper = new Swiper(".mySwiper", {
        speed: 600,
        parallax: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
// End of Swiper Slider
