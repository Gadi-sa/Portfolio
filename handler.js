
// <!-- Add the following JavaScript to toggle the mobile menu -->

    document.addEventListener('DOMContentLoaded', function () {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    });

// Script to handle section visibility 
    document.addEventListener('DOMContentLoaded', function () {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        let userScrolling = false; // Flag to track user-initiated scrolling

        // Hide all sections except the default one
        sections.forEach(section => {
            if (section.id !== 'home') {
                section.style.display = 'none';
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                userScrolling = true; // Set the flag when the user clicks a navigation link
                showSection(targetId);
            });
        });

        window.addEventListener('scroll', function () {
            if (!userScrolling) {
                // If it's not user-triggered scrolling, ignore
                return;
            }

            const scrollPosition = window.scrollY;
            let visibleSectionId = 'home';

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 50;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    visibleSectionId = section.id;
                }
            });

            showSection(visibleSectionId);
        });

        function showSection(sectionId) {
            sections.forEach(section => {
                section.style.display = 'none';
            });

            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }

            // Reset the flag after showing the section
            userScrolling = false;
        }
    });