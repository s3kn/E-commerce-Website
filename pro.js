

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

// Add this script to a <script> tag at the bottom of your HTML file or in a separate JS file.
// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.querySelector("form");
//     const emailInput = document.querySelector("#email");
//     const passwordInput = document.querySelector("#password");

//     form.addEventListener("submit", (event) => {
//         event.preventDefault(); // Prevent actual form submission

//         // Basic validation
//         const email = emailInput.value.trim();
//         const password = passwordInput.value.trim();

//         if (!validateEmail(email)) {
//             alert("Please enter a valid email address.");
//             return;
//         }

//         if (password.length < 6) {
//             alert("Password must be at least 6 characters long.");
//             return;
//         }

//         // Mock login process
//         if (email === "test@example.com" && password === "password123") {
//             alert("Login successful! Redirecting to the shopping page...");
//             // Redirect to the shopping page
//             window.location.href = "/shopping";
//         } else {
//             alert("Invalid email or password. Please try again.");
//         }
//     });

//     // Helper function to validate email format
//     function validateEmail(email) {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     }
// });




