document.addEventListener('DOMContentLoaded', () => {
    // Typing animation function
    function typeText(element, text, speed) {
        return new Promise((resolve) => {
            let currentIndex = 0;
            const typingInterval = setInterval(() => {
                if (currentIndex < text.length) {
                    element.textContent += text.charAt(currentIndex);
                    currentIndex++;
                } else {
                    clearInterval(typingInterval);
                    resolve();
                }
            }, speed);
        });
    }

    // Text elements and their corresponding text and typing speeds
    const textElements = [
        { element: document.querySelector(".home-content h1"), text: "Hello, my name is José García", speed: 45 },
        { element: document.querySelector(".home-content h3"), text: "iOS Developer", speed: 60 },
        { element: document.querySelector(".home-content p"), text: "iOS Developer | Mobile App Developer | Tech Enthusiast | Continuous Learner | Aspiring Traveler | Adventurer | Gym Enthusiast.", speed: 15 }
    ];

    // Function to start typing animations sequentially
    async function startTypingAnimations() {
        for (let item of textElements) {
            await typeText(item.element, item.text, item.speed);
        }

        // After all text animations are complete, reveal the buttons with fade-in animation
        const btnBox = document.querySelector('.btn-box');
        btnBox.classList.remove('hidden');
        fadeIn(btnBox); // Call fadeIn function to animate the buttons
    }

    // Function to fade in an element
    function fadeIn(element) {
        element.style.opacity = 0;
        element.style.transition = 'opacity 1s ease-in-out'; // Adjust timing function as needed
        element.offsetHeight; // Trigger reflow to apply transition
        element.style.opacity = 1;
    }

    startTypingAnimations(); // Start the typing animations when DOM is loaded

    // Mobile navbar toggle (if applicable, keep your existing code here)
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbar = document.querySelector('.navbar');

    if (navbarToggle) {
        navbarToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }
});

//Swiper JS
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